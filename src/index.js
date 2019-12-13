import React from 'react';
import { render } from 'react-dom'; // ReactDOM.render

// Components
import Counter from './components/counter/Counter';
import Comments from './components/comments/Comments';
import Clock from './components/clock/Clock';
import Form from './components/form/Form';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: 'AR',
            showComponent: false
        };
        this.handleOnChangeCountry = this.handleOnChangeCountry.bind(this);
        this.toggleComponent = this.toggleComponent.bind(this);
    }
    handleOnChangeCountry() {
        this.setState({
            country: 'FR'
        });
    }
    toggleComponent() {
        this.setState({
            showComponent: !this.state.showComponent
        });
    }
    render() {
        const { country, showComponent } = this.state;
        return (
            <div className="container mt-4">
                <hr />
                <Counter initialValue={2} />
                <hr />
                <Comments />
                <hr />
                {showComponent ? <Clock country={country} /> : null}
                <hr />
                <button
                    className="btn btn-warning"
                    onClick={this.handleOnChangeCountry}
                >Cambiar pais</button> - {country}
                <hr />
                <p>
                    <a href="#" onClick={this.toggleComponent}>Toggle component</a>
                </p>
                <hr />
                <Form />
            </div>
        );
    }
};

render(
    <App />,
    document.getElementById('app')
);
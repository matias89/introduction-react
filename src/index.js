import React from 'react';
import { render } from 'react-dom'; // ReactDOM.render

// Components
import Counter from './components/counter/Counter';
import Comments from './components/comments/Comments';
import Clock from './components/clock/Clock';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: 'AR',
        };
        this.handleOnChangeCountry = this.handleOnChangeCountry.bind(this);
    }
    handleOnChangeCountry() {
        this.setState({
            country: 'FR'
        });
    }
    render() {
        const { country } = this.state;
        return (
            <div className="container mt-4">
                <Counter initialValue={2} />
                <Comments />
                <Clock country={country} />
                <button
                    className="btn btn-warning"
                    onClick={this.handleOnChangeCountry}
                >Cambiar pais</button> - {country}
            </div>
        );
    }
};

render(
    <App />,
    document.getElementById('app')
);
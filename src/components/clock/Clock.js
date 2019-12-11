import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'Haga click en INICIAR para prender el reloj',
            country: 'AR'
        }
        this.handleOnInit = this.handleOnInit.bind(this);
        this.myVar = 4;
        const id = document.getElementById('box');
        console.log(id);
    }
    componentDidMount() {
        const id = document.getElementById('box');
        console.log(id);
    }
    componentWillReceiveProps(props) {
        this.setState({
            country: props.country
        });
    }
    handleOnInit() {
        //this.state.date = 1;
        this.setState({
            date: 1
        });
    }
    render() {
        const { country } = this.props;
        const { date } = this.state;
        return (
            <div id="box" className="mt-4">
                <h3>{date}</h3>
                <button className="btn btn-secondary">Iniciar ({this.state.country})</button>
            </div>
        );
    }
}

export default Clock;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            country: 'ES'
        }
        this.handleOnInit = this.handleOnInit.bind(this);
        this.initCounter = this.initCounter.bind(this);
        this.myVar = 4;
        this.intervalRef = null;
        const id = document.getElementById('box');
        console.log(id);
    }
    componentDidMount() {
        const id = document.getElementById('box');
        console.log(id);
        this.myVar = 6
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            country: nextProps.country
        });
    }
    handleOnInit() {
        //this.state.date = 1;
        this.setState({
            date: 1
        });
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('updated 1 >>> ', prevProps, prevState);
        console.log('updated 2 >>> ', this.props, this.state);
    }
    componentWillUnmount() {
        console.log('Unmount');
        window.clearInterval(this.intervalRef);
    }
    initCounter() {
        this.intervalRef = window.setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            });
        }, 1000);
    }
    render() {
        console.log('Rendered!');
        const { counter } = this.state;
        const { country } = this.props;
        return (
            <div id="box" className="mt-4">
                <h3>{counter} {country}</h3>
                <button
                    className="btn btn-secondary"
                    onClick={this.initCounter}
                >
                    Iniciar ({this.state.country})
                </button>
            </div>
        );
    }
}

Clock.propTypes = {
    country: PropTypes.string.isRequired
}

Clock.defaultProps = {
    country: 'BR'
}

export default Clock;
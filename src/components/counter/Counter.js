import React, { Component, useState, useEffect } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleOnAdd = () => {
        setCounter(counter + 1);

    }
    const handleOnRemove = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
    useEffect(() => {
        console.log('Hello World!');
    });
    return (
        <div>
            <button
                className="btn btn-danger"
                onClick={handleOnRemove}
            > - </button>
            <span className="px-4">{counter}</span>
            <button
                className="btn btn-success"
                onClick={handleOnAdd}
            >+</button>
            <hr/>
        </div>
    );
}
/*
class Counter extends Component {
    constructor(props) {
        super(props);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnRemove = this.handleOnRemove.bind(this);
        this.state = {
            counter: props.initialValue || 0
        }
    }
    
    handleOnAdd() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    handleOnRemove() {
        this.setState({
            counter: this.state.counter - 1
        });
    }
    render() {
        return (
            <div>
                <button
                    className="btn btn-danger"
                    onClick={this.handleOnRemove}
                > - </button>
                <span className="px-4">{this.state.counter}</span>
                <button
                    className="btn btn-success"
                    onClick={this.handleOnAdd}
                >+</button>
                <hr/>
            </div>
        );
    }

}
*/
export default Counter;

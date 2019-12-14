import React, { Component } from 'react';
import './styles.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue1: '',
            inputValue2: '',
            inputValue3: ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(event) {
        console.log(event.target.value);
        const { target: {id, value} } = event;
        this.setState({
            [id]: value
        });
    }
    render() {
        return (
            <form className="custom-form">
                <div className="form-group">
                    <input
                        className="form-control"
                        value={this.state.inputValue1}
                        onChange={this.handleOnChange}
                        id="inputValue1"
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        value={this.state.inputValue2}
                        onChange={this.handleOnChange}
                        id="inputValue2"
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        value={this.state.inputValue3}
                        onChange={this.handleOnChange}
                        id="inputValue3"
                    />
                </div>
            </form>
        )
    }
}

export default Form;
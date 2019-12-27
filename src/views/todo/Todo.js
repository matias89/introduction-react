import React from 'react';

const Form = ({children, title, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <legend>{title}</legend>
            {children}
        </form>
    );
}

function Input({title, onChange, value}) {
    return (
        <div className="form-group">
            <label>{title}</label>
            <input
                className="form-control"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

const Button = ({text, onClick}) => (
    <button
        className="btn btn-primary"
        onClick={onClick}
    >
        {text}
    </button>
);

class TodoList extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <ul>
                {list && list.length && list.map((item, i) => {
                    return (
                        <li key={i}>{item.title}</li>
                    );
                })}
            </ul>
        );
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            form: {
                title: '',
                description: ''
            },
            todo: []
        }
    }
    handleOnChange(event) {
        const { target: { value }} = event;
        this.setState({
            form: {
                ...this.state.form,
                title: value
            }
        });
    }
    handleOnSubmit(event) {
        event.preventDefault();
        const { form: { title }, todo } = this.state;
        this.setState({
            ...this.state,
            todo: [...this.state.todo, {
                title
            }]
        });
    }
    render() {
        const { form: { title }, todo } = this.state;
        return (
            <div className="container">
                <Form title="To-Do" onSubmit={this.handleOnSubmit}>
                    <Input
                        title="Title"
                        onChange={this.handleOnChange}
                        value={title}
                    />
                    <Button text="Submit" />
                </Form>
                <hr />
                <TodoList list={todo} />
            </div>
        );
    }
}

export default Todo;
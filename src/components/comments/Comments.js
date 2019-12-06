import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.handleOnGetComments = this.handleOnGetComments.bind(this);
        this.state = {
            comments: []
        }
    }
    handleOnGetComments() {
        window.fetch('http://jsonplaceholder.typicode.com/comments')
            .then(response => {
                response.json()
                    .then(comments => {
                        this.setState({
                            comments
                        });
                    })
            });
    }
    buildItem(body, email) {
        return (
            <p>{email}: {body}</p>
        );
    }
    render() {
        const { comments } = this.state;
        return (
            <div>
                {
                    comments.map(comment => {
                        return this.buildItem(comment.body, comment.email)
                    })
                }
                <button
                    onClick={this.handleOnGetComments}
                    className="btn btn-primary"
                >Cargar comentarios</button>
            </div>
        );
    }
}

export default Comments;
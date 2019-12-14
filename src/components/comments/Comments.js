import React, { Component } from 'react';
import { get } from '../../utils/services';
import { API_URL } from '../../constants';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.handleOnGetComments = this.handleOnGetComments.bind(this);
        this.state = {
            comments: []
        }
    }
    handleOnGetComments() {
        get(`${API_URL}/comments`).then(comments => {
            this.setState({
                comments: comments.data // Si quitan axios, quitar '.data'
            });
        });
    }
    buildItem(body, email, key) {
        return (
            <p key={key}>{email}: {body}</p>
        );
    }
    render() {
        const { comments } = this.state;
        return (
            <div>
                {
                    comments.map(comment => {
                        const { body, email, id } = comment;
                        return this.buildItem(body, email, id)
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
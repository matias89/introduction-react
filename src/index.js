import React from 'react';
import { render } from 'react-dom'; // ReactDOM.render

// Components
import Counter from './components/counter/Counter';
import Comments from './components/comments/Comments';

class App extends React.Component {
    render() {
        return (
            <div className="container mt-4">
                <Counter initialValue={2} />
                <Comments />
            </div>
        );
    }
};

render(
    <App />,
    document.getElementById('app')
);
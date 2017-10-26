import React from 'react';
import { Link } from 'react-router';

class LessonPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h2>Lesoon Page</h2>
                <p>Lesson</p>
                <div>
                    <p>Lesson text</p>
                </div>
                <button>Previous Lesson</button>
                <br />
                <br />
                <button>Next Lesson</button>
            </div>
        );
    }
}

export default LessonPage;

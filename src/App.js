import React, {Component} from 'react';
import Comment from './components/Comment'
import faker from 'faker'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className={"ui container"}>
                    <div className="ui comments">
                        <h3 className="ui dividing header">Comments</h3>
                        <Comment
                            authorName={faker.name.firstName()}
                            authorPic={faker.image.avatar()}
                            date={'3 hours ago'}
                            text={faker.lorem.sentence()}
                        />
                        <Comment
                            authorName={faker.name.firstName()}
                            authorPic={faker.image.avatar()}
                            date={'2 hours ago'}
                            text={faker.lorem.sentence()}
                        />
                        <Comment
                            authorName={faker.name.firstName()}
                            authorPic={faker.image.avatar()}
                            date={'1 hours ago'}
                            text={faker.lorem.sentence()}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

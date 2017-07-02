import React, {Component} from 'react'
class Topic extends Component {
    render() {
        return (
            <div>我是{this.props.match.params.topicId}</div>
        )
    }
}
export default Topic;
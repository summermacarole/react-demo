import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Topic from '../topic/index'
class Topics extends Component {
    render() {
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li><Link to={this.props.match.url + '/rendering'}>rendering with react</Link></li>
                    <li><Link to={this.props.match.url + '/components'}>components</Link></li>
                    <li><Link to={this.props.match.url + '/props-vs-state'}>props vs state</Link></li>
                </ul>
                <Route exact path={this.props.match.url} render={() => (
                    <h3>请选择topic</h3>
                )}/>
                <Route path={this.props.match.url + '/:topicId'} component={Topic}/>

            </div>
        )
    }
}
export default Topics;
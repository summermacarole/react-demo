import React, {Component} from 'react'
import './Panel.css'
class Panel extends Component {
    render() {
        return (
            <div className={'panel panel-' + this.props.color}>
                {this.props.children}
            </div>
        )
    }
}
export default Panel;
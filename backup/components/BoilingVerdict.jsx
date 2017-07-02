import React, {Component} from 'react'
class BoilingVerdict extends Component {
    render() {
        if (this.props.celsius > 100) {
            return <p>水可以沸腾</p>
        }
        return <p>水无法沸腾的</p>
    }
}
export default BoilingVerdict;
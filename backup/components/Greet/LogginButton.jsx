import React, {Component} from 'react'
class LogginButton extends Component {
    render() {
        return (
            <button onClick={props.onClick}>Login</button>
        )
    }
}
export default LogginButton;
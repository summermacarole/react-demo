import React, {Component} from 'react'
class LogoutButton extends Component {
    render() {
        return (
            <button onClick={props.onClick}>Logout</button>
        )
    }
}
export default LogoutButton;
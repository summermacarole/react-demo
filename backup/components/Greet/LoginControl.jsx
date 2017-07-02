import React, {Component} from 'react'
import Greet from './Greet'
import LogginButton from './LogginButton'
import LogoutButton from './LogoutButton'

class LoginControl extends Component {
    constructor(props) {
        super(props)
        this.state = {isLoggedIn: false}
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    login() {
        this.setState({
            isLoggedIn: true,
        })
    }

    logout() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        const isLogedIn = this.state.isLoggedIn;
        let button = null;
        if (isLogedIn) {
            button = <LogoutButton onClick={this.logout}/>
        } else {
            button = <LogginButton onClick={this.login}/>
        }
        return (
            <div>
                <Greet isLogged='true'/>
                {button}
            </div>
        )
    }
}
export default LoginControl;
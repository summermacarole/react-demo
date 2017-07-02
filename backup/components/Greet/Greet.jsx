import React, {Component} from 'react'
import LoggedGreet from './LogedGreet'
import SignupGreet from './SignupGreet'
class Greet extends Component {
    render() {
        console.log(typeof this.props.isLogged)
        if (this.props.isLogged) {
            return (
                <LoggedGreet/>
            )
        } else {
            return (
                <SignupGreet/>
            )
        }
    }
}
export default Greet;
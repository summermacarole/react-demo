import React, {Component} from 'react'
class LoginButton extends Component {
    // 属性初始化方法，解决this的指向问题，否则this为null
    handleClick = () => {
        console.log(this)
    }
    render() {
        return (
            <button onClick={this.handleClick}>click me</button>
        )
    }
}
export default LoginButton;
import React, {Component} from 'react'
import './Demo5.css'
// 此处是个toggle组件
class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {isToggle: true}
        this.toggle = this.toggle.bind(this)
    }
    toggle(e) {
        console.log(e.target)
        this.setState((prevState) => ({
            isToggle: !prevState.isToggle
        }))
    }

    render() {
        return (
            <span onClick={this.toggle} className={this.state.isToggle ? 'on toggle' : 'toggle'}>
            </span>
        )
    }
}
export default Toggle;
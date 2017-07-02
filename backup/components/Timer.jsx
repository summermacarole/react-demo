import React, {Component} from 'react'
class Timer extends Component {
    constructor(props) {
        super(props)
        console.log('我是构造器')
        this.state = {
            secondsElapsed: 0
        }
    }
    tick(){
        this.setState((prevState)=>({
            secondsElapsed:prevState.secondsElapsed+1
        }))
    }
    componentDidMount(){
        console.log('我是挂在函数')
        this.interval=setInterval(()=>this.tick(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                Seconds Elapsed:{this.state.secondsElapsed}
            </div>
        )
    }

}
export default Timer;
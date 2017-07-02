import React, {Component} from 'react'
class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: new Date(),
            time: new Date()
        }
        this.play = this.play.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({
            current: new Date()
        })
        this.setState({
            time: new Date()
        })
    }

    play() {
        console.log('切换暂停或者播放')
        console.log(this.timer)
        if (this.timer) {
            console.log('暂停')
            clearInterval(this.timer)
            this.timer=null;
        } else {
            console.log('播放')
            this.timer = setInterval(() => this.tick(), 1000)
        }
    }

    render() {
        return (
            <div>
                <h2>定时器</h2>
                <button onClick={this.play}>暂停/播放</button>
                <p>当前时间：{this.state.current.toLocaleTimeString()}</p>
                <p>当前时间：{this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}
export default Clock;
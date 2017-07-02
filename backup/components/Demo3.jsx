import React, {Component} from 'react'
function tick() {
    const elem = (
        <div>hello,world
            <h2>it is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    class Demo3 extends Component {
        render() {
            return (
                <div>
                    elem
                </div>
            )
        }
    }
}
setInterval(tick,1000)
export default Demo3;
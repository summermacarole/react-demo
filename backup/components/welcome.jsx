import React from 'react'
import Logging from './Logging.jsx'
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h2>我是测试</h2>,
                <Logging/>
                <p>我叫{this.props.name}</p>
            </div>
        )
    }
}
export default Welcome;
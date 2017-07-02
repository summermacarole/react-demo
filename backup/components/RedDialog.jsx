import React, {Component} from 'react'
import Panel from './Panel'
class RedDialog extends Component {
    render() {
        return (
            <Panel color="blue">
                <h2>欢迎光临</h2>
                <p>我是欢迎光临的内容</p>
            </Panel>
        )
    }
}
export default RedDialog;
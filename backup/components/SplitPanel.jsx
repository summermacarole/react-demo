import React, {Component} from 'react'
import './SplitPanel.css'
class SplitPanel extends Component {
    render() {
        return (
            <div className="panel">
                <div className="panel-left">
                    {this.props.left}
                </div>
                <div className="panel-right">
                    {this.props.right}
                </div>
            </div>
        )
    }
}
export default SplitPanel;
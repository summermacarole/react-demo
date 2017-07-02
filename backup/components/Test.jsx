import React, {Component} from 'react'
import './Test.css'
// import Calculator from './Calculator'
// import RedDialog from './RedDialog'
import Blog from './Blog'
class Test extends Component {
    render() {
        const logged = true;
        const logged2 = false;
        return (
            <div className="test">
                此处都是测试组件
                {/*<Calculator/>*/}
                {/*<Panel color="blue"/>*/}
                {/*<Panel color="red"/>*/}
                {/*<RedDialog/>*/}
                <Blog/>
            </div>
        )
    }
}
export default Test;
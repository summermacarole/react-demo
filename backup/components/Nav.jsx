import React, {Component} from 'react'
class Blog extends Component {
    static  defaultProps = {
        message: '我日你大爷'
    }

    render() {
        return (
            <div>
                我是导航栏{this.props.message}
            </div>
        )
    }
}
export default Blog;
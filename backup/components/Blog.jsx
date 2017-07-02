import React, {Component} from 'react'
import SplitPane from './SplitPanel'
import Nav from './Nav'
import Content from './Content'
class Blog extends Component {
    render() {
        return (
            <SplitPane left={
                <Nav/>
            } right={
                <Content/>
            }/>
        )
    }
}
export default Blog;
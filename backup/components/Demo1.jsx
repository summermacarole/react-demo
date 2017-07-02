import React, {Component} from 'react'
function formateUser(user) {
    return user.firstname + '--' + user.lastname
}
const user = {
    firstname: 'jack',
    lastname: 'mary'
}
function greeting(user) {
    if (user) {
        return (
            <p>
                hello {formateUser(user)}
            </p>
        )
    }
    return (
        <p>
            hello 新朋友
        </p>
    )
}
class Demo1 extends Component {
    render() {
        return (
            <div>
                {greeting()}
            </div>
        )
    }
}
export default Demo1;
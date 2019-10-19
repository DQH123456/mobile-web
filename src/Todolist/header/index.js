import React, { Component } from 'react'
import Search from './search'
class Header extends Component {
    render() {
        return (
            <div>
                <Search enterPress={this.props.todo.add}/>
            </div>)
    }
}

export default Header
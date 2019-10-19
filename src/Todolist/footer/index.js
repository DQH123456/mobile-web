import React, { Component } from 'react'
class Footer extends Component {
    clear = () => {
        this.props.clear()
    }
    render() {
        return (<div><span className="clear-btn" onClick={this.clear}>clear</span></div>)
    }
}

export default Footer
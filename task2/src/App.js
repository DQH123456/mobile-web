import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from"./components/Header"
import {BrowserRouter as Router,Route} from "react-router-dom" 
import Home from "./container/Home"
import Start from "./container/Start"
import Api from "./container/Api"
import About from "./container/About"
import Login from './container/Login'
export default class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <Header/> 
          </div>
          <div className="content">
            <div className="left">
              <Route path = '/home' component={Home}/>
              <Route path = '/start' component={Start}/>
              <Route path = '/api' component={Api}/>
              <Route path = '/about' component={About}/>
              <Route path = '/login' component={Login} />
            </div>
            <div className="right">
              <h3>客户端二维码</h3>
              <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
              <p href='https://github.com/soliury/noder-react-native'>客户端源码地址</p>
            </div>
            <div className='bottom'>
              我是底部
            </div>
          </div>
        </Router>
          
      )
  }
}
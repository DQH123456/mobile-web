import React, { Component } from 'react';
import {Link,Route,Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import All from './Home/All'
import Jing from './Home/Jing'
import Share from './Home/Share'
import Ask from './Home/Ask'
import Job from './Home/Job'
export default class Home extends Component {
    render() {
        let{url} = this.props.match
        return (
            <div className='all'>
                <div className='qjf'>
                    <Link to={`${url}/all`}>全部</Link>
                    <Link to={`${url}/jing`}>精华</Link>
                    <Link to={`${url}/share`}>分享</Link>
                    <Link to={`${url}/ask`}>问答</Link>
                    <Link to={`${url}/job`}>招聘</Link>
                </div>
                <div>
                    <Route path={url+'/all'} component={All}/>
                    <Route path={url+'/jing'} component={Jing}/>
                    <Route path={url+'/share'} component={Share}/>
                    <Route path={url+'/ask'} component={Ask}/>
                    <Route path={url+'/job'} component={Job}/>
                </div>
            </div>            
        )
    }
}
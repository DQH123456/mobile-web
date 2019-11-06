import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class All extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            pages:[1,2,3,4,5,6,7,8,9,10]
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?tab=job&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});
                console.log(this.state.data);
            });
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page !== this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?tab=job&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data})
                });
        }
    }

    pgchange(num){
        fetch('https://cnodejs.org/api/v1/topics?tab=job&page='+num)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data})
            });
    }
    render() {
        return (
            <div>
                <div className='change'>
                    {
                        this.state.pages.map((item,idx)=>(
                            <li num={item} onClick={()=>this.pgchange(item)}>
                                {item}
                            </li>    
                            
                        ))
                    } 
                </div>
                <div>
                    {this.state.data.map((item,idx)=>(
                            <ul className='mingzi'>
                                <li num="item">
                                <img src={item.author.avatar_url} alt=""
                                    style={{float:'left',width:30,height:30}}/>
                                <div dangerouslySetInnerHTML={{__html:item.reply_count+'/'}} 
                                    style={{float:'left',width:40,height:'40px',paddingTop:10,fontSize:16,textAlign:'center'}}></div>
                                <div dangerouslySetInnerHTML={{__html:item.visit_count}} 
                                    style={{float:'left',width:40,height:'40px',paddingTop:10}}></div>
                                <div dangerouslySetInnerHTML={{__html:item.tab}} 
                                    style={{float:'left',width:40,height:'40px',paddingTop:10}}></div>
                                <Link to={`/detail/`+item.id}>
                                    <div dangerouslySetInnerHTML={{__html:item.title}} 
                                        style={{width:650,height:'40px',paddingTop:'12px',float:'left',overflow:'hidden',fontWeight:'bold',fontSize:16}}></div>
                                </Link>
                                <img src="https://avatars2.githubusercontent.com/u/227713?v=4&s=120" alt="" 
                                    style={{float:'left',width:20,height:20}}/>
                                <div dangerouslySetInnerHTML={{__html:'2天前'}} 
                                    style={{width:65,float:'left',height:40}}></div>
                                </li>
                            </ul>
                    ))}           
                </div>
            </div>
        )
    }
}

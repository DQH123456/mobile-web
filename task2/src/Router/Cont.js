// import React from 'react'
// //无状态组件
// export default function Content(props){
//     //console.log(props);
//     return(
//         <div>
//             {/* {props.children} */}
//             Content
//             {props.match.params.id}
//         </div>
//     )
// }

import React from 'react'
//函数组件改为类组件
export default class Content extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page=1')
            .then((res)=>res.json())        //.then((res)=>{returnres.json()})
            .then((res)=>{
                this.setState({
                    data:res.data
                })
                //console.log(res);
            })
    }
    render(){
            return(
                <div>
                    {
                        this.state.dadta.map((item)=>{
                            <div key={item.id}>
                                <h2>{item.title}</h2>
                                <div dangerouslySetInnerHTML={{__html:item.Content}}></div>
                            </div>
                        })
                        
                    }
                </div>
            )
    }
    
}
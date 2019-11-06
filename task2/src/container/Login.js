import React from 'react';
import { Button, Form, Input,} from 'antd';

export default function Buttons(props) {
    return (
        <div style={{background: '#fff' }}>
            
        <a style={{fontSize:"20px",color:"gray"}}>主页/ 登录</a>
            <Form style={{ width: 500, margin: '100px 100px' }}>
                    <a style={{color:"black"}}>用户名<Input/></a>
                    <a style={{color:"black"}}>密码<Input/></a>
                    <Button href='/home' type="Login" style={{margin:'100px 0'}}>
                        登录
                    </Button>
            </Form>
        </div>
    )
}
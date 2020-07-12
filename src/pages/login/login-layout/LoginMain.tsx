import React, {
    memo,
} from 'react';
import { Form, Button, Input, notification } from 'antd';

interface IProps {
    fetch: (values: ILogin) => Promise<any>;
    loading: boolean;
}

const { Item } = Form;
const LoginMain: React.FC<IProps> = (props) => {

    const { loading, fetch } = props;

    // values 是咱们这个表单的数据集合
    // 加入要给 某个表单项赋予初始值，就需要给它传递一个参数initialValues
    // 接受一个对象 键名就是 Item里边定义的name
    const handleLogin = async ( values: any ) => {
        if( !values.username ){
            notification.warn({
                message: '验证失败',
                description: '请输入用户名',
                duration: 2,
            })
        }else if( !values.password ){
            notification.warn({
                message: '验证失败',
                description: '请输入密码',
                duration: 2,
            })
        } else {
            // async await 用一个变量去接受await的值的话，
            // 如果await后面是一个promise 那么 变量接收到的值就是成功的值，
            // 如果该promise失败， 则程序会终止运行。
            // 因为 async await 本身就是一个promise 它不能捕获自身的错误
            // 所以我们一般是配合 try catch 使用，保证程序的正常运行。

            try {
                const result = await fetch(values);
                console.log('result-----------------', result);
            } catch ( error ) {
                console.log('result-----------------', error);
            }
        }

    };

    return (
        <div className="login-layout-main">
            <div className='main-form'>
                <h2>登  录</h2>
                <Form
                    className="main-form-box"
                    onFinish={handleLogin}
                >
                    <Item name="username">
                        <Input placeholder="请输入用户名"/>
                    </Item>
                    <Item name="password">
                        <Input type="password" placeholder="请输入密码" />
                    </Item>
                    <Item className='main-form-box_itemButton'>
                        <Button
                            type="primary"
                            className="main-form-box_button"
                            htmlType="submit"
                            loading={loading}
                        >
                            登录
                        </Button>
                    </Item>
                </Form>
            </div>
        </div>
    );
};

export default memo(LoginMain);
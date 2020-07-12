import React, {memo} from 'react';
import { Redirect } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import { loginActionPromise } from '../../redux/saga/actions/user';
import ParticlesBg from 'particles-bg';
import LoginMain from './login-layout/LoginMain';

import './index.less';
import {useSelector} from 'react-redux';

interface IProps {

}

const Login: React.FC<IProps> = (props) => {

    const { isLogin, loading } = useSelector((state: IState) => state.user );
    const actions = useActions({
        loginActionPromise,
    });

    if( isLogin ) return <Redirect to="/" />

    return (
        <div className="login">
            <div className="login-layout">
                <div className='login-layout-header' />
                <LoginMain
                    loading={loading}
                    fetch={actions.loginActionPromise}
                />
                <div className='login-layout-footer' />
                <ParticlesBg
                    type="custom"
                    bg
                />
            </div>
        </div>
    );
};

export default memo(Login);
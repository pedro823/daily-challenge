import { useState } from 'preact';
import style from './style';

const Login = () => {
    const email = useState('');

    return (
        <div className={style.login}>
            <h1>Login</h1>
        </div>
    );
};

export default Login;

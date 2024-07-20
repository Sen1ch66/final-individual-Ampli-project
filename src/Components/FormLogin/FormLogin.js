import './FormLogin.css'
import { TextField, Button } from '@mui/material';
import { useRef } from 'react';
import isLoginState from '../../mobX/LoginState';
import UserState from '../../mobX/UserState';

function FormLogin({ openForm }) {
    const spinner = useRef(null);
    const textField = useRef(null);
    const password = useRef(null);

    function onSubmit(event) {
        event.preventDefault();
    }

    function onWrongClick(e) {
        if (e.target.id === 'Background') {
            openForm(false);
        }
    }

    const loginRequest = (e) => {
        if (spinner.current) {
            spinner.current.style.opacity = 1;
        }

        fetch(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if (spinner.current) {
                    spinner.current.style.opacity = 0;
                }
                e.target.disabled = false;
                isLoginState.setIsLogin();
                UserState.setUserData(json);
                console.log(json);
                openForm(false);
            })
            .catch(e => {
                console.log(e);
                if (spinner.current) {
                    spinner.current.style.opacity = 0;
                }
                e.target.disabled = false;
            });
    }

    return (
        <div className='Background' onClick={onWrongClick} id='Background'>
            <form onSubmit={onSubmit}>
                <h1>Щоб почати, залогіньтесь</h1>
                <input placeholder='Логін' ref={textField} />
                <input placeholder='Пароль' ref={password} type='password' />
                <Button variant="outlined" onClick={(e) => {
                    if (password.current.value !== 'zos9807' || textField.current.value !== 'Arsenii89_0') {
                        alert('неправильний логін або пароль');
                    } else if (textField.current.value.length < 2 || password.current.value.length < 3) {
                        alert('Логін або пароль закороткий');
                    } else if (textField.current.value === '' || password.current.value === '') {
                        alert('Заповніть всі поля');
                    } else {
                        e.target.disabled = true;
                        loginRequest(e);
                        console.log('brb');
                    }
                }}>
                    <span>Увійти</span>
                    <span ref={spinner} className='spinner-border'></span>
                </Button>
            </form>
        </div>
    );
}

export default FormLogin;

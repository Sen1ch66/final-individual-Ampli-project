import './FormLogin.css'
import { TextField, Button } from '@mui/material';
import { useRef } from 'react';
import isLoginState from '../../mobX/LoginState';
import UserState from '../../mobX/UserState';
function FormLogin({ openForm }) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    const spinner = useRef(null)
    const textField = useRef(null)
    const password = useRef(null)
    function onSubmit(event) {
        event.preventDefault();

    }
    function onWrongClick(e) {
        if (e.target.id === 'Background') {
            openForm(false)
        }
    }
    const loginRequest = (e)=>{
        spinner.current.style.opacity = 1;
        if(textField.current.value ===''|| password.current.value===''){
            alert('Заповніть всі поля')
        } else {
            fetch(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
            .then(res=> res.json())
            .then(json=> {
            console.log(json)
            spinner.current.style.opacity = 0;
            e.target.disabled = false;
            isLoginState.setIsLogin()
            UserState.setUserData(json)
            console.log(json)
            openForm(false)
        })
        .catch(e => console.log(e))
        }

    }
    return (
        <div className='Background' onClick={onWrongClick} id='Background'>
            <form onSubmit={onSubmit}>
                <h1>Щоб почати, залогіньтесь</h1>
                <input placeholder='Логін' ref={textField}/>
                <input placeholder='Пароль' ref={password} type='password'/>
                <Button variant="outlined" onClick={loginRequest}>
                    <span>Увійти</span>
                    <span ref={spinner} className='spinner-border'></span>
                </Button>
            </form>
        </div>
    )
}
export default FormLogin;
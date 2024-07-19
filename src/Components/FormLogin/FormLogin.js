import './FormLogin.css'
import { TextField, Button } from '@mui/material';
import { useRef } from 'react';
import isLoginState from '../../mobX/LoginState';
function FormLogin({ openForm }) {
    const spinner = useRef(null)
    function onSubmit(event) {
        event.preventDefault();

    }
    function onWrongClick(e) {
        if (e.target.id === 'Background') {
            openForm(false)
        }
    }
    return (
        <div className='Background' onClick={onWrongClick} id='Background'>
            <form onSubmit={onSubmit}>
                <h1>Щоб почати, залогіньтесь</h1>
                <TextField id="filled-basic" label="Логін" variant="filled" />
                <TextField id="filled-basic" label="Пароль" variant="filled" />
                <Button variant="outlined" onClick={()=> {isLoginState.setIsLogin()}}>Увійти</Button>
            </form>
        </div>
    )
}
export default FormLogin;
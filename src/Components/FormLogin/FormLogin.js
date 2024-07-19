import './FormLogin.css'
import { TextField, Button } from '@mui/material';
import { useRef } from 'react';

function FormLogin(props) {
    const { openForm } = props;
    const spinner = useRef(null)
    function onSubmit(event) {
        event.preventDefault();

    }
    function onWrongClick(e) {
        if (e.target.id === 'Background') {
            openForm(false)
            console.log(848)
        }
    }
    return (
        <div className='Background' onClick={onWrongClick} id='Background'>
            <form onSubmit={onSubmit}>
                <h1>Щоб почати, залогіньтесь</h1>
                <TextField id="filled-basic" label="Логін" variant="filled" />
                <TextField id="filled-basic" label="Пароль" variant="filled" />
                <Button variant="outlined">Увійти</Button>
            </form>
        </div>
    )
}
export default FormLogin;
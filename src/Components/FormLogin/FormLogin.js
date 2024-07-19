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
        }
    }
    return (
        <div className='Background' onClick={onWrongClick}>
            <form>
                <h1>Щоб почати, залогіньтесь</h1>
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <Button variant="outlined">Outlined</Button>
            </form>
        </div>
    )
}
export default FormLogin;
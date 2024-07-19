import './LoginHeader.css'
import UserProfile from '../UserProfile/UserProfile.js'
import { NavLink } from 'react-router-dom';
import isLoginState from '../../mobX/LoginState.js';
import { observer } from 'mobx-react';
const LoginHeader= observer((props)=> {
    const { openForm, setIsLogged, isLogged} = props;
    return (
        <header>
            <div className='headerTitle'>
                <h1>Проект "Сайт логінізації"</h1>
                <NavLink to={'/AboutMe'}>
                    <p>Про мене</p>
                </NavLink>
            </div>
            <span></span>
            <span></span>
            {isLoginState.isLogin === false ? <button className='headerButtonLogin' onClick={() => { openForm(true) }}>Увійти</button> :
             <UserProfile setIsLogged={setIsLogged}/>}
        </header>
    )
})
export default LoginHeader;
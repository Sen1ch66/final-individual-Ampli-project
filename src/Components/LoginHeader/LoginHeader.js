import './LoginHeader.css'
import UserProfile from '../UserProfile/UserProfile.js'
import { NavLink } from 'react-router-dom';
import LoginState from '../../mobX/LoginState.js';
function LoginHeader(props) {
    const { openForm, isLogged, setIsLogged} = props;
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
            {isLogged === false ? <button className='headerButtonLogin' onClick={() => { openForm(true) }}>Увійти</button> :
             <UserProfile setIsLogged={setIsLogged}/>}
        </header>
    )
}
export default LoginHeader;
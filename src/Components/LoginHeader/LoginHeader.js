import './LoginHeader.css'
import UserProfile from '../UserProfile/UserProfile.js'
function LoginHeader(props){
    const { openForm, isLogged } = props;
    return(
        <header>
            <h1>Проект "Сайт логінізації"</h1>
            <span></span>
            <span></span>
            <span></span>
            {isLogged === false ? <button className='headerButtonLogin' onClick={()=> {openForm(true)}}>Увійти</button>: <UserProfile/>}
        </header>
    )
}
export default LoginHeader;
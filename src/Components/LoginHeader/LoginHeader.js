import './LoginHeader.css'
import UserProfile from '../UserProfile/UserProfile'
function LoginHeader(){
    return(
        <header>
            <a href='/'>Сайт про мене</a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <UserProfile/>
            <button className='headerButtonLogin' onClick={()=> openForm(true)}>Увійти</button>
        </header>
    )
}
export default LoginHeader;
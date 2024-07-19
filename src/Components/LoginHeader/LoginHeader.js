import './LoginHeader.css'
import UserProfile from '../UserProfile/UserProfile.js'
function LoginHeader(){
    return(
        <header>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <UserProfile/>
            <button className='headerButtonLogin'>Увійти</button>
        </header>
    )
}
export default LoginHeader;
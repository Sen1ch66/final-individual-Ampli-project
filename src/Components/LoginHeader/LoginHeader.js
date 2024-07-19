import './LoginHeader.css'
import UserProfile from '../UserProfile/UserProfile.js'
function LoginHeader(props){
    const { openForm } = props;
    return(
        <header>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <UserProfile/>
            <button className='headerButtonLogin' onClick={()=> {openForm(true)}}>Увійти</button>
        </header>
    )
}
export default LoginHeader;
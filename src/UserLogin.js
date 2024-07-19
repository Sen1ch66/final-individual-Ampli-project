import { useRef, useState } from 'react';
import LoginHeader from './Components/LoginHeader/LoginHeader.js';
import { NavLink } from 'react-router-dom';
import FormLogin from './Components/FormLogin/FormLogin.js';
function UserLogin() {
    const [isShowForm, setIsShowForm] = useState(true)
  return (
      <div className="userLogin">
        
          <LoginHeader openform={setIsShowForm}/>
          <div className="mainScreen">
              <section className="mainScreenContent">
                  <h1>Вітаємо</h1>
                  <p>Щоб побачити прихований контент - залогіньтесь</p>
              </section>
              <NavLink to={'/AboutMe'}>
                Про мене
              </NavLink>
          </div>
      </div>
  )
}
export default UserLogin;

import { useState } from 'react';
import LoginHeader from './Components/LoginHeader/LoginHeader.js';
import { NavLink } from 'react-router-dom';
import FormLogin from './Components/FormLogin/FormLogin.js';
import './UserLogin.css'
function UserLogin() {
    const [isShowForm, setIsShowForm] = useState(false)
  return (
      <div className="userLogin">
        {isShowForm && <FormLogin openForm={setIsShowForm}/>}
          <LoginHeader openForm={setIsShowForm}/>
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

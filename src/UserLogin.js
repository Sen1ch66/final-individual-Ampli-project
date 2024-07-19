import { useState } from 'react';
import LoginHeader from './Components/LoginHeader/LoginHeader.js';
import FormLogin from './Components/FormLogin/FormLogin.js';
import './UserLogin.css'
function UserLogin() {
    const [isShowForm, setIsShowForm] = useState(false)
    const [isLogged, setIsLogged] = useState(true)
  return (
      <div className="userLogin">
        {isShowForm && <FormLogin openForm={setIsShowForm}/>}
          <LoginHeader openForm={setIsShowForm} isLogged={isLogged} setIsLogged={setIsLogged}/>
          <div className="mainScreen">
              <section className="mainScreenContent">
                  <h2>{isLogged ? 'Привіт користувач': "Привіт гість"}</h2>
                  {isLogged && <p>Щоб побачити прихований контент - залогіньтесь</p>}
              </section>
          </div>
      </div>
  )
}
export default UserLogin;

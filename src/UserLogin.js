import { useState } from 'react';
import LoginHeader from './Components/LoginHeader/LoginHeader.js';
import FormLogin from './Components/FormLogin/FormLogin.js';
import isLoginState from './mobX/LoginState.js';
import './UserLogin.css'
import { observer } from 'mobx-react';
import UserState from './mobX/UserState.js';
const UserLogin = observer(() => {
    const [isShowForm, setIsShowForm] = useState(false)
    const [isLogged, setIsLogged] = useState(true)
  return (
      <div className="userLogin">
        {isShowForm && <FormLogin openForm={setIsShowForm}/>}
          <LoginHeader openForm={setIsShowForm} isLogged={isLogged} setIsLogged={setIsLogged}/>
          <div className="mainScreen">
              <section className="mainScreenContent">
                  <h2>{isLoginState.isLogin ? `Привіт ${UserState.userData.username}`: "Привіт гість"}</h2>
                  {isLoginState.isLogin && <p>Щоб побачити прихований контент - залогіньтесь</p>}
              </section>
          </div>
      </div>
  )
})
export default UserLogin;

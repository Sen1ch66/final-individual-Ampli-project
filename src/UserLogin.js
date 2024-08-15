import { useState } from 'react';
import LoginHeader from './Components/LoginHeader/LoginHeader.js';
import FormLogin from './Components/FormLogin/FormLogin.js';
import isLoginState from './mobX/LoginState.js';
import './UserLogin.css'
import { observer } from 'mobx-react';
import UserState from './mobX/UserState.js';
import ToDoList from './Components/ToDoLIst/ToDoList.js';
import { NavLink } from 'react-router-dom'
const UserLogin = observer(() => {
  const [isShowForm, setIsShowForm] = useState(false)
  const [isLogged, setIsLogged] = useState(true)
  return (
    <div className="userLogin">
      {isShowForm && <FormLogin openForm={setIsShowForm} />}
      <LoginHeader openForm={setIsShowForm} isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className="mainScreen">
        <section className="mainScreenContent">
          <h2>{isLoginState.isLogin ? `Привіт ${UserState.userData.username}` : "Привіт гість"}</h2>
          {isLoginState.isLogin &&
            <ToDoList/>
          }
        </section>
        <NavLink to={'/Risks'}>
         <h2 className='pageSwitcher'>
          Оцінити ризики командної роботи
         </h2>
        </NavLink>
      </div>
    </div>
  )
})
export default UserLogin;

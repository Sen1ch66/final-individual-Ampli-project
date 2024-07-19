import { useRef } from 'react';
import AboutMe from './Components/AboutMe';
function UserLogin() {
  return (
      <div className="userLogin">
          <div className="mainScreen">
              <section className="mainScreenContent">
                  <h1>Вітаємо</h1>
                  <p>Щоб побачити прихований контент - залогіньтесь</p>
              </section>
              <AboutMe/>
          </div>
      </div>
  )
}
export default UserLogin;

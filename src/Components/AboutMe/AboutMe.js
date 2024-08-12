import './AboutMe.css'
import { useRef } from 'react'
import MyPhoto from '../../Imgs/IMG_2573.jpg'
import gitPhoto from '../../Imgs/25231.png'
import instaPhoto from '../../Imgs/instaico.png'
import classRoom from '../../Imgs/png-transparent-google-classroom-teacher-g-suite-computer-icons-class-room-angle-text-class.png'
import Trello from '../../Imgs/web-trello-icon.png'
import { NavLink } from 'react-router-dom'
function AboutMe() {
    const extraInfo = useRef(null)
    const sectionButton = useRef(null)
    const header = useRef(null)
    const aboutMe = useRef(null)
    function showSection(){
      try{
        extraInfo.current.style.display = 'flex';
        sectionButton.current.remove()
      }
      catch(e){
        console.log(e)
      }
    }
  const themeSwitcher = useRef(null)
  function themeSwitch(){
    header.current.classList.toggle('headerBlack')
    aboutMe.current.classList.toggle('aboutMeBlack')
    extraInfo.current.classList.toggle('extraInfo-black')
  }
    return (
      <>
        <header id="header" ref={header}>
          <h2>Сторінка про мене</h2>
          <nav>
            <a href="#aboutMe">Про мене</a><a href="#extraInfo">Додаткова інформація</a>
          </nav>
        </header>
        <div id="themeSwitcher" ref={themeSwitcher}>
          <span>Хочете змінити тему?</span>
          <input type="button" value="Переключити тему" id="themeSwitch" onClick={themeSwitch} ref={sectionButton}/>
        </div>
        <section id="aboutMe" ref={aboutMe}>
          <div className="aboutMe-container">
            <div className="aboutMe-container-content">
              <h1>Я Арсеній</h1>
              <p>Мене звати Заховайко Арсеній, мені 17 років, я займаюсь фронт-ендом вже півтора року. Навчаюсь на рівні Advanced в школі програмування Ampli група AFE-44І маю який не який досвід
                в цій сфері</p>
              <p>ТАкож цікавлюсь ще багато чим, наприклад колись знімав відео на ютуб, монтував відео, розбираюсь у
                фотообробці</p>
            </div>
            <img src={MyPhoto} alt="My photo" loading="lazy"></img>
          </div>
          <button className="sectionButton" onClick={showSection} ref={sectionButton}>
            <span>Побачити більше</span>
          </button>
        </section>
        <section id="extraInfo" ref={extraInfo}>
          <h2>Додаткова інформація</h2>
          <div className="extraInfo-content">
            <div>
              <h3>Геймер</h3>
              <p>Раньше багато грав і загалом цікавився іграми, тепер трігки менше але всеодно, тепер більше орієнтуюсь на успіх в реальності а не в грі. Як на мене так краще</p>
            </div>
            <div>
              <h3>Блогер?</h3>
              <p>Колись знімав відео на ютуб але тепер через брак часу і трохи бажання відклав на потім, думаю потім повернусь не тільки до відео зйомки але і до фотообробки.
                Отримав сертифікат бегінер Ampli за завершення курсу з відзнакою
              </p>
            </div>
            <div>
              <h3>Скіли</h3>
              <ul>
                <li>Основи js 7/10</li>
                <li>html 10/10</li>
                <li>css 7/10</li>
                <li>react js 5/10</li>
                <li>Тайм менеджмент 3/10</li>
                <li>Ораторство 9/10</li>
                <li>Лідерство 7/10</li>
              </ul>
            </div>
            <div className='proj'>
              <h3>Проекти</h3>
              <ul>
                <li><a href='https://lighthearted-taiyaki-5e5eba.netlify.app/' target='_blank'>Випускна з бегінера</a></li>
                <li><a href='https://kalkulator-ne-tane.onrender.com/' target='_blank'>Калькулятор js</a></li>
                <li><a href='https://66ba739ba9b1db3d62f8c80a--cozy-pegasus-fc89f1.netlify.app/' target='_blank'>Рандомайзер js</a></li>
                <li><a href='https://calculator-on-react.onrender.com/' target='_blank'>Калькулятор реакт</a></li>
                <li><a href='https://todolist-3agi.onrender.com/' target='_blank'>Список справ</a></li>
                <li><a href='https://js-snake-game-ycqp.onrender.com/' target='_blank'>Змійка js</a></li>
              </ul>
            </div>
          </div>
        </section>
        <footer id="footer">
          <div className="footerTitles">
            <h2>Посилання</h2>
            <h2>Якірні посилання</h2>
            <h2>Мої контакти</h2>
            <NavLink to={'/'}>
              <h2>На головну</h2>
            </NavLink>
          </div>
          <div className="footerBlock">
            <div className="footerLinks">
              <div>
                <img src={Trello} alt="trello icon"/>
                  <a href="https://trello.com/b/WK95kJZY/arsenii-zakhovaiko-afe34-individual-final-ampli-project" target='_blank'>Trello</a>
              </div>
              <div>
                <img src={gitPhoto} alt="github icon"/>
                  <a href="https://github.com/Sen1ch66/" target='_blank'>Github</a>
              </div>
              <div>
                <img src={instaPhoto} alt="instagram icon"/>
                  <a href="https://www.instagram.com/ars1.zahx06/" target='_blank'>Instagram</a>
              </div>
              <div>
                <img src={classRoom} alt="instagram icon"/>
                  <a href="https://classroom.google.com/c/NjIxNzEzMDc0ODU2" target='_blank'>Клас</a>
              </div>
            </div>
            <div className="footerLnk">
              <a href="#">Назад</a>
              <a href="#aboutMe">Про мене</a>
            </div>
            <div className="footerContacts">
              <p>senazahovajko@gmail.com</p>
              <p>+380971998717</p>
            </div>
          </div>
        </footer>
      </>
    )
  }
  export default AboutMe;
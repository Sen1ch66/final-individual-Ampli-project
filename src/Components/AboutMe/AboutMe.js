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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse iusto dolor veritatis, dignissimos,
                tenetur omnis sapiente hic deleniti unde consequuntur deserunt excepturi nisi inventore veniam
                doloribus quis natus nesciunt ex.</p>
            </div>
            <div>
              <h3>Lorem ipsum</h3>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, vitae. Odio nihil doloremque nam
                sed neque quas distinctio accusantium omnis obcaecati, laborum fuga pariatur quaerat asperiores
                eaque qui, labore id.</p>
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
                  <a href="/">Trello</a>
              </div>
              <div>
                <img src={gitPhoto} alt="github icon"/>
                  <a href="/">Github</a>
              </div>
              <div>
                <img src={instaPhoto} alt="instagram icon"/>
                  <a href="/">Instagram</a>
              </div>
              <div>
                <img src={classRoom} alt="instagram icon"/>
                  <a href="/">Клас</a>
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
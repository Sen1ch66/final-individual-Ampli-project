import { NavLink } from 'react-router-dom';
import './PageIsntFound.css'
function PageNotFound() {
    return (
        <main>
            <section className='errorInfo'>
                <h2>Упс сторінка не знайдена</h2>
                <p>Перевірте адресу</p>
            </section>
            <section className='errorExample'>
                <h3>Помилка</h3>
                <h1>0</h1>
            </section>
            <section className='returnToMain'>
                <NavLink to={'/'}>
                <h2>Повернутись на головну</h2>
                </NavLink>
            </section>
        </main>
    )
}
export default PageNotFound;
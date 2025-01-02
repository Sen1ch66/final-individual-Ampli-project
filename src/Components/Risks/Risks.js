import './Risks.css'
import { NavLink } from 'react-router-dom'
function Risks() {
    return (
        <>
            <section id='Risks'>
                <h1>Ризики командної роботи над проектом</h1>
                <ol className='listOfRisks'>
                    <li>Випадковий пуш поламаного коду в master і подальший деплой</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
                <table>
                    <caption>Загроза ризику</caption>
                    <thead>
                        <tr>
                            <td>rgeg</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>gg</tr>
                        <tr>gg</tr>
                        <tr>gg</tr>
                    </tbody>
                    <tfoot>
                        <tr>gg</tr>
                        <tr>gg</tr>
                        <tr>gg</tr>
                    </tfoot>
                </table>
                <NavLink to={'/'}>
                    <h2 className='pageSwitcher'>
                        На головну
                    </h2>
                </NavLink>
            </section>
        </>
    )
}
export default Risks
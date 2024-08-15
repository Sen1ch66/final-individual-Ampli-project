import './Risks.css'
import { NavLink } from 'react-router-dom'
function Risks() {
    return (
        <>
            <section id='Risks'>
                <h1>Ризики командної роботи над проектом</h1>
                <table>
                    <caption>A summary of the UK's most famous punk bands</caption>
                    <thead>
                        <tr>
                            <td>grg</td>
                            <td>reg</td>
                            <td>rgeg</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                    <tfoot></tfoot>
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
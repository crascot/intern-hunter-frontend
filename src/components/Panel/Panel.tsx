import { ReactComponent as Logo } from '../../icons/logo.svg'
import { ReactComponent as MenuIcon } from '../../icons/menu.svg'
import s from './Panel.module.css'
import { NavLink } from 'react-router-dom'
import LinkButton from '../Buttons/LinkButton'

type panelTypes = {
    changeMenuActive: () => void
}

const Panel: React.FC<panelTypes> = ({ changeMenuActive }) => {
    return (
        <div className={s.panel}>
            <div>
                <NavLink to='/'>
                    <span className={s.logo}>
                        <Logo />
                        <h3>Intern Hunter</h3>
                    </span>
                </NavLink>
                {
                    window.innerWidth > 1070 ?
                        <span className={s.filter}>
                            <label>
                                <input
                                    type='text'
                                    placeholder='Job tittle, keyword, company'
                                />
                            </label>
                        </span>
                        :
                        <MenuIcon onClick={changeMenuActive} />
                }
            </div>
            {
                window.innerWidth > 1070 ?
                    <div className={s.buttons}>
                        <LinkButton link='/login/student' text='Войти' />
                        <LinkButton link='/profile' text='Профиль' />
                    </div>
                    :
                    ''
            }
        </div>
    )
}

export default Panel
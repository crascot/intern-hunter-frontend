import React from 'react'
import s from './Menu.module.css'
import { ReactComponent as Cansel } from '../../icons/cancel.svg'
import { ReactComponent as Logo } from '../../icons/logo.svg'
import { MenuType } from '../../types/menuType'
import LinkButton from '../Buttons/LinkButton'

const Menu: React.FC<MenuType> = ({ links, changeMenuActive }) => {
  return (
    <div className={s.container} onClick={changeMenuActive}>
      <div className={s.menu} onClick={(e) => e.stopPropagation()}>
        <span>
          <Logo />
          <button onClick={changeMenuActive}><Cansel /></button>
        </span>
        <ul>
          {
            links.map((link, i) =>
              <li key={i}>
                <a href={link.link}>
                  {link.text}
                </a>
              </li>)
          }
        </ul>
        <div className={s.buttons}>
          <LinkButton link='/login/student' text='Войти' />
          <LinkButton link='/profile' text='Профиль' />
        </div>
      </div>
    </div>
  )
}

export default Menu
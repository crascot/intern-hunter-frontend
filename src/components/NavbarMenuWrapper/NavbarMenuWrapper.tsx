import { useState } from 'react'
import Menu from '../Menu/Menu'
import Navigation from '../Navigation/Navigation'
import Panel from '../Panel/Panel'
import { auctions, main, profile } from '../../endpoints'

type NavbarMenuWrapperType = {
  current: string
}

const NavbarMenuWrapper:React.FC<NavbarMenuWrapperType> = ({ current }) => {
  const links = [
    {
      text: 'Домой',
      link: main
    },
    {
      text: 'Аукционы',
      link: auctions
    },
    {
      text: 'Профиль',
      link: profile
    }
  ]

  const [isMenuActive, setIsMenuActive] = useState(false)
  const changeMenuActive = () => setIsMenuActive(prev => !prev)

  return (
    <>
      {
        isMenuActive ?
          <Menu
            links={links}
            changeMenuActive={changeMenuActive}
          />
          :
          ''
      }
      <Navigation links={links} current={current} />
      <Panel changeMenuActive={changeMenuActive} />
    </>
  )
}

export default NavbarMenuWrapper
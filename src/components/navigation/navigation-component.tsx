import './navigation-component.css'

import logo from './../../img/my_logo.png'
import linkedIn from './../../img/linkedin-logo.png'
import gitHub from './../../img/github-logo.png'

import { Fragment, ReactElement, useContext } from 'react'
import { NavigationContext } from '../contexts/navigation-context'
import { HideMenuContext } from '../contexts/navigation-hide-context'
import { LinkButton } from '../buttons/link-button/link-button-component'
import { Separator } from '../separator/separator-component'
import { Outlet } from 'react-router-dom'
import { Open } from './open-navigation/open-navigation-component'

export const Naviation = (): ReactElement => {
  const { navItems } = useContext(NavigationContext)
  const { isHidden } = useContext(HideMenuContext)

  return (
    <Fragment>
      <aside className={isHidden.hide ? `narrow` : ''}>
        <div className='aside-container'>
          <span className='img-place'>
            <img src={logo} alt='not yet implemented' height={isHidden.hide ? `30` : '100'} />
          </span>
          <div className='navigation-container'>
            <Separator />
            {navItems?.map((obj) => {
              const [item] = Object.entries(obj)
              const [key, value] = item
              const [title, icon] = value
              return (
                <Fragment key={`button-${key}`}>
                  <LinkButton isHidden={isHidden.hide} iconMaterial={icon} link={key === 'about' ? '/' : key} item={title} />
                  <Separator />
                </Fragment>
              )
            })}
          </div>
          <div className={`social-container ${isHidden.hide ? 'set-column' : ''}`}>
            <a href='https://www.linkedin.com/in/andrastoth2000/' target='_blank'>
              <img src={linkedIn} height='30' />
            </a>
            <a href='https://github.com/tothandras2019' target='_blank'>
              <img src={gitHub} height='30'></img>
            </a>
          </div>
        </div>
        <Open />
      </aside>
      <Outlet />
    </Fragment>
  )
}

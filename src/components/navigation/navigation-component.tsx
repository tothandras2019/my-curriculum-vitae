import './navigation-component.css'

import logo from './../../img/my_logo.png'
import linkedIn from './../../img/linkedin-logo.png'
import gitHub from './../../img/github-logo.png'

import { Fragment, ReactElement, useContext, useEffect } from 'react'
import { NavigationContext } from '../contexts/navigation-context'
import { HideMenuContext } from '../contexts/navigation-hide-context'
import { LinkButton } from '../buttons/link-button/link-button-component'
import { Separator } from '../separator/separator-component'
import { Outlet } from 'react-router-dom'
import { Open } from './open-navigation/open-navigation-component'

export const Naviation = (): ReactElement => {
  const { navItems } = useContext(NavigationContext)
  const { isHidden } = useContext(HideMenuContext)
  const version = '1.1'

  return (
    <Fragment>
      <aside className={`aside-top-container ${isHidden.hide ? `narrow` : ''}`}>
        <div className='aside-container'>
          <span className='img-place'>
            <p>Ta</p>
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
          <p className='version'>{`v.${version}`} </p>
        </div>
      </aside>
      <Outlet />
    </Fragment>
  )
}

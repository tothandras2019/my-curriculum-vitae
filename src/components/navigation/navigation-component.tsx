import './navigation-component.css'
import logo from './../../img/my_logo.png'
import { Fragment, ReactElement, useContext } from 'react'
import { NavigationContext } from '../contexts/navigation-context'
import { LinkButton } from '../buttons/link-button/link-button-component'
import { Separator } from '../separator/separator-component'
import { Outlet } from 'react-router-dom'

export const Naviation = (): ReactElement => {
  const { navItems } = useContext(NavigationContext)

  return (
    <Fragment>
      <aside>
        <img src={logo} alt='not yet implemented' height='100' />
        <div className='navigation-container'>
          <Separator />
          {navItems?.map((item) => (
            <Fragment>
              <LinkButton item={item} />
              <Separator />
            </Fragment>
          ))}
        </div>
        <div className='social-container'>
          <a href=''>LinkedIn</a>
          <a href=''>Git Hub</a>
        </div>
      </aside>
      <Outlet />
    </Fragment>
  )
}

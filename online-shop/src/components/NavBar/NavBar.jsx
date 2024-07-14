import { NavLink } from 'react-router-dom'
import './navBar.scss'
import { useAuthContext } from '@/hooks/useAuth'

const NavBar = () => {
  const { isAuth, logout } = useAuthContext()

  const linkIsActive = (isActive) => isActive ? 'nav-link' : 'nav-link'

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand'>
          Online Shop
        </NavLink>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>

            <li className='nav-item'>
              <NavLink to='/' className={(isActive) => linkIsActive(isActive)} aria-current='page'>
                Home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/dashboard' className={(isActive) => linkIsActive(isActive)} aria-current='page'>
                Dashboard
              </NavLink>
            </li>

            {isAuth
              ? (
                <>
                  <li className='nav-item'>
                    <NavLink to='/cart' className={(isActive) => linkIsActive(isActive)} aria-current='page'>
                      Cart
                    </NavLink>
                  </li>

                  <li className='nav-item'>
                    <NavLink to='/' className='nav-link' onClick={logout} aria-current='page'>
                      Log out
                    </NavLink>
                  </li>

                </>
                )
              : (
                <>
                  <li className='nav-item'>
                    <NavLink to='/login' className={(isActive) => linkIsActive(isActive)} aria-current='page'>
                      Login
                    </NavLink>
                  </li>

                  <li className='nav-item'>
                    <NavLink to='/signup' className={(isActive) => linkIsActive(isActive)} aria-current='page'>
                      Sign up
                    </NavLink>
                  </li>
                </>
                )}

          </ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default NavBar

import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuth'
import { useState } from 'react'
import './navBar.scss'
import SearchBar from '../SearchBar/SearchBar'
import SearchResultsList from '../SearchResultsList/SearchResultsList'

const NavBar = () => {
  const { isAuth, logout } = useAuthContext()

  const [results, setResults] = useState([])

  const linkIsActive = (isActive) => isActive ? 'nav-link' : 'nav-link'

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <NavLink to='/' className='navbar-brand'>
          <img className='logo' style={{maxHeight: '50px'}} src='https://cdn-icons-png.flaticon.com/512/2649/2649213.png' alt='Online Shop' />
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
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
        </div>
      </div>
    </nav>

  )
}

export default NavBar

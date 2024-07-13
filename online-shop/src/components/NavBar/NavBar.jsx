import { NavLink } from 'react-router-dom'
import './navBar.scss'

const NavBar = () => {
  const linkIsActive = (isActive) => isActive ? 'nav-link active' : 'nav-link'

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
              <a className='nav-link' href='#'>
                Link
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Link
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Link
              </a>
            </li>
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

import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='font-sans pr-2'>
          <ul className='absolute flex justify-end'>
            <li className='p-2'>Welcome, {user.name}</li>
            <li className='p-2'><Link to="/profiles">Profiles</Link></li>
            <li className='p-2'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li className='p-2'><Link to="/changePassword">Change Password</Link></li>
          </ul>
        </nav>
      :
        <nav className='flex justify-end absolute right-0 font-sans pr-2'>
          <ul className='flex justify-end w-fit'>
            <li className='p-2'><Link to="/login">Log In</Link></li>
            <li className='p-2'><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar

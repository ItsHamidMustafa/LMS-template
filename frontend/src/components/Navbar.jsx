import { React } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
import UserTray from './UserTray'

export const Navbar = () => {
    const { student } = useAuthContext();

    const location = useLocation();
    return (
        <nav>
            <div className='nav-left font-size-large'>
                <span>Hello {student ? student.firstName : 'Traveller'} 👋</span>
            </div>
            <div className='nav-right'>
                {student ? (
                    <>
                        <span className="material-symbols-outlined col-white font-size-large">
                            notifications
                        </span>
                        <UserTray />
                    </>
                ) : (
                    <Link className='nav-right-link' to={location.pathname === '/signup' ? '/login' : '/signup'}>
                        {location.pathname === '/signup' ? 'Login' : 'Signup'}
                        <span className="material-symbols-outlined">
                            account_circle
                        </span>
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
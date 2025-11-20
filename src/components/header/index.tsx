import { Link } from 'react-router'
import { useAuth } from '../../context/auth.context'
import NavLinks from './nav_links'
import UserProfile from './user_profile'

const NavBar = () => {
    const { isLoading, user } = useAuth()
    console.log(user)
    return (
        <div className='px-24 h-16 border border-gray-200 flex items-center justify-between '>
            {/* icon */}
            <Link to='/'>
                <p className='text-2xl font-bold italic text-blue-600'>Tour Mgmt</p>
            </Link>
            {/* nav links */}
            <NavLinks/>

            {/* auth section */}
            <div className='w-fit min-w-[150px]'>
                {isLoading && <p>Checking Auth.....</p>}
                {!isLoading && !user && <Link to={'/sign-in'} className='bg-blue-600 px-9 py-3 rounded-md text-lg font-bold text-white'>Login</Link>}
                {!isLoading && user && <UserProfile user={user} />}
            </div>
        </div>
    )
}

export default NavBar
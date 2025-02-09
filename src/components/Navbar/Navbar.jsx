import { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_logo from '../../assets/search_icon.svg';
import bell_logo from '../../assets/bell_icon.svg';
import profile_logo from '../../assets/profile-content.svg';
import caret_logo from '../../assets/caret_icon.svg';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const dropdownHandler = () => {
        setShowDropdown(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <div>
                    <img src={logo} alt='company-logo'/>
                </div>
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </div>
            <div className='navbar-right'>
                <img src={search_logo} alt='search-logo' className='icons'/>
                <p>Children</p>
                <img src={bell_logo} alt='notification-logo' className='icons'/>
                <div className='navbar-profile' onClick={dropdownHandler} ref={dropdownRef}>
                    <img src={profile_logo} alt='profile-logo' className='profile'/>
                    <img src={caret_logo} alt='caret-logo' className='icons'/>
                    {showDropdown && (
                        <div className='profile-dropdown'>
                            <p>Sign out of Netflix</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './Navigation.css'

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
    if (showMenu) return
    setShowMenu(true)
  };

  useEffect(() => {
    if (!showMenu) return

    const closeMenu = () => {
      setShowMenu(false)
    };

    document.addEventListener('click', closeMenu)

    return () => document.removeEventListener("click", closeMenu)
  }, [showMenu])

  const logout = (e) => {
    e.preventDefault()
    dispatch(sessionActions.logout())
  };

  return (
    <>
      <Link to='/campus/new' className='nav-links'>Add a Campus</Link>
      <Link to='/campus' className='nav-links'>Campuses</Link>
      <button onClick={openMenu} id='profile-icon'>
        <i className="fa-solid fa-building-columns"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className='dropdown-name'>{user.username}</li>
          <li className='dropdown-email'>{user.email}</li>
          <li>
            <button onClick={logout} className='logout-btn'>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;

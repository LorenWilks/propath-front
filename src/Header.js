import React, { useState } from 'react';
import { Dropdown, Image, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './CSS/Header.css';
import propathlogo from './Assets/propathlogo.png';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const profileImg = 'path/to/profile/image';

  const handleProfileClick = () => {
    setShowMenu(!showMenu);
  };

  

  return (
    <header className="header">
      <div className="header__logo">
        <Image src={propathlogo}  height={200} left={0}/>
      </div>
    </header>
  );
}

export default Header;

import React, {useState} from 'react';

import './HeaderNavbar.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function HeaderNavbar(props) {
  const [currentTheme, setCurrentTheme] = useState('light-theme');

  return (
    <div className={ `d-flex ${currentTheme} w-100` }>
      <header className="app-header d-flex justify-content-between w-100 align-items-center pt-4">
        <button className="btn btn-logo p-0">
          <div className="product-logo"></div>
        </button>

        { props.showThemeIcons === 'true' ? (
          <div className="d-flex themes">
          <span className="cursor-pointer">
            <LightModeIcon className="theme-icon light" onClick={ () => setCurrentTheme('light-theme') } />
          </span>
          <span className="cursor-pointer">
            <DarkModeIcon className="theme-icon dark" onClick={ () => setCurrentTheme('dark-theme') } />
          </span>
        </div>
        ) : '' }
      </header>
    </div>
  )
}

export default HeaderNavbar;
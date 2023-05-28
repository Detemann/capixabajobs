import React from 'react';
import './HeaderNavbar.scss';

function HeaderNavbar(props) {
  return (
    <>
      <div className={ `d-flex w-100` }>
        <header className="app-header d-flex justify-content-between w-100 align-items-center pt-4">
          <button className="btn btn-logo p-0">
            <div className="product-logo"></div>
          </button>
        </header>
      </div>
    </>
  )
}

export default HeaderNavbar;
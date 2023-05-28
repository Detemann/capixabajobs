import React from 'react';

import './HeaderNavbar.scss';
import { Button, Stack } from '@mui/material';

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
      <div className="d-flex row">
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" color='secondary'>Contained</Button>
        <Button variant="outlined" color='secondary'>Outlined</Button>
      </Stack>
      </div>
    </>
  )
}

export default HeaderNavbar;
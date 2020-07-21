import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText
} from 'reactstrap';

const HeaderComponent = () => {
  return (
    <div>
      <Navbar color="light" light  expand="md">
        <NavbarBrand>
          <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png"
               width="60" height="60" alt="logo"
          />
        </NavbarBrand>
        <NavbarText><b>Weather Point</b></NavbarText>
      </Navbar>

    </div>
  );
}

export default HeaderComponent;
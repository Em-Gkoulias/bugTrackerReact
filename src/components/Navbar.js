import React from 'react';
import Search from './NavbarComponents/Search';
import Notifications from './NavbarComponents/Notifications';
import User from './NavbarComponents/User';

import logo from "../components/images/logo.png";

function Navbar({user}) {
    return (
        <div className="Navbar">
            <img src={logo} alt="LOGO" className="logo" />
            <div className="navbarRight">
                {/* <Search />
                <Notifications /> */}
                <User user={user} />
            </div>

        </div>
    );
}

export default Navbar;

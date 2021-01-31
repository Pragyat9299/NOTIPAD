import React from 'react';
import './index.css';


const Header = () => {
    return (
        <React.Fragment>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Icon-notepad.svg/1024px-Icon-notepad.svg.png" alt="logo"/>
                <h1>NotiPad</h1>
            </div>
        </React.Fragment>
    )
}
export default Header;
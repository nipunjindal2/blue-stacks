import React from 'react';
import blueStacksLogo from '../../assets/images/Logo/bluestacks-logo.jpg'
import './Logo.css'

const logo = (props) => (
    <div className="Logo">
        <img src = {blueStacksLogo} alt = "BlueStacks-logo" />
    </div>
)

export default logo;
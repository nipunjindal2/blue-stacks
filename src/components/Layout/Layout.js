import React from 'react'
import Toolbar from '../Toolbar/Toolbar';
import './Layout.css'


const layout = (props) => (
    <React.Fragment>
    <div className = "Head">
        <Toolbar />
    </div>

    <main className="Content">
        <h1>Manage Campaigns</h1>
        {props.children}
    </main>
    </React.Fragment>
)


export default layout;

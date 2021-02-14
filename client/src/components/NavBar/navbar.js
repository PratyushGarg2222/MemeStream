import React from 'react';
import classes from './navbar.module.css';

const navbar = () => {
    return (
        // <!-- NAVBAR-->
        <nav className = {`navbar fixed-top` + ' ' + classes.navBackg}>

            {/* <!-- Centers stuff --> */}
            <div className = "container">

                {/* <!-- Brand logo --> */}
                <a className = {'navbar-brand' + ' ' + classes.brand} href = "#"><i className = {'fab fa-meetup' + ' ' + classes.icon}></i>&nbsp;Meme Stream</a>

                {/* <!-- Add Meme Button --> */}
                <div className = "ml-auto">

                    <button type = "button" className = {'btn'  + ' ' + classes.addMemebtn} data-bs-toggle="modal" data-bs-target="#addMemeModal">
                        Add Meme
                    </button>
    
                </div>

            </div>

        </nav>
    )
}

export default navbar;
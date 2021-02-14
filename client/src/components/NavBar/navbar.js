import React from 'react';
import classes from './navbar.module.css';

const navbar = (props) => {

    let addMeme;


    //If the add Meme button is to be included in the navbar
    if(props.addMemebtnreq){

        addMeme = (

            <div className = "ml-auto">

                <button type = "button" className = {'btn'  + ' ' + classes.addMemebtn} data-bs-toggle="modal" data-bs-target="#addMemeModal">
                    Add Meme
                </button>

            </div>

        );

    }else{

        addMeme = null;

    }

    return (
        // <!-- NAVBAR-->
        <nav className = {`navbar fixed-top` + ' ' + classes.navBackg}>

            {/* <!-- Centers stuff --> */}
            <div className = "container">

                {/* <!-- Brand logo --> */}
                <a className = {'navbar-brand' + ' ' + classes.brand} href = "#"><i className = {'fab fa-meetup' + ' ' + classes.icon}></i>&nbsp;Meme Stream</a>

                {/* <!-- Add Meme Button --> */}
                {addMeme}
            </div>

        </nav>
    )
}

export default navbar;
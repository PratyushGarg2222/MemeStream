import React from 'react';
import classes from './memeComponent.module.css';

const memeComponent = (props) => {
    return (
        <div className = {classes.MemeComponent}>

                <div className = {"card " + classes.cardBkg}>

                    <div className = "card-body">

                        <div className = {classes.nameAndEdit}>
                            <h5 className = "card-title">{props.name}</h5>
                            <button type = "button" className = "btn btn-primary">Edit</button>
                        </div>
                        <p className = "card-text">{props.caption}</p>

                    </div>
                    <img src = {props.url} className = "card-img-bottom" alt = "Meme" />

                </div>

        </div>
    );
}

export default memeComponent;

import React from 'react';
import Navbar from '../NavBar/navbar';
import AddMemeModal from '../Modal/AddMeme/modal';
import MemeComponent from '../MemeComponent/memeComponent';

const mainpage = () => {
    return (
        <div>
            <Navbar addMemebtnreq/>
            <AddMemeModal />
            <MemeComponent name = "Hello" caption = "This is caption" url = "https://photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg"></MemeComponent>
        </div>
    )
}

export default mainpage;
    
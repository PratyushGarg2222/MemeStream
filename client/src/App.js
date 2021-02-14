import React from 'react';
import './App.css';

import Navbar from './components/NavBar/navbar';
import Modal from './components/Modal/AddMeme/modal';

const App = () => {

  return(
    <div>
      <Navbar/>
      <Modal />
    </div>
  )

}

export default App;

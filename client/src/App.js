import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Mainpage from './components/MainPage/mainpage';
import SingleMeme from './components/SingleMeme/singleMeme';

const App = () => (

  <Router>

     <Fragment>
       <Route exact path = '/' component = {Mainpage} />
       <Route exact path = "/:id" component = {SingleMeme} />
     </Fragment>

  </Router>

);

export default App;

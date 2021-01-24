import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
 
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreatePostComponent from './components/CreatePostComponent';

import ViewPostComponent from './components/ViewPostComponent';
import ListPost from './components/ListPost';
 

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container justify-content-center">
                    <Switch> 
                          <Route path = "/" exact component = {ListPost}></Route>
                          
                          <Route path = "/add-post/:id" component = {CreatePostComponent}></Route>
                          <Route path = "/view-post/:id" component = {ViewPostComponent}></Route>
                          <Route path = "/posts" component = {ListPost}></Route> 
                          
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;

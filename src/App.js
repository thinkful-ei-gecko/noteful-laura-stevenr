import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage  from './Components/MainPage/MainPage';
import FolderPage  from './Components/FolderPage/FolderPage';
import NotePage  from './Components/NotePage/NotePage';
import './App.css';
import data from './dummy-store.js';
import Header from "./Components/Header";


class App extends React.Component {
  state = {
    data: [],
    notes: [],
    folders: []
  };

  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' render={props =>
            <div><Header /><MainPage /></div>}
          />
          <Route path='/folder/:folder-id' render={props =>
            <div><Header /><FolderPage /></div>}
          />
          <Route path='/note/:note-id' render={props =>
            <div><Header /><NotePage /></div>}
          />
        </Switch>
      </BrowserRouter>

    )};  
  }
​
  export default App;
  
  
  
  
  
  



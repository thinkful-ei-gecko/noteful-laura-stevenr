import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./Components/Header";
import MainPage  from './Components/MainPage/MainPage';
import FolderPage  from './Components/FolderPage/FolderPage';
import NotePage  from './Components/NotePage/NotePage';
import './App.css';
import dataBank from './dummy-store.js';


class App extends React.Component {
  state = {
    data: dataBank,
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
  
  
  
  
  
  



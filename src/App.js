import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './Components/MainPage';
import { FolderPage } from './Components/FolderPage';
import { NotePage } from './Components/NotePage';
import './App.css';
import './dummy-store';



function App() {

  constructor(){
    super();
    this.state = {
      
    };
  }


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/folder/<with-a-folder-id>' component={FolderPage} />
        <Route path='/note/<with-a-note-id>' component={NotePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

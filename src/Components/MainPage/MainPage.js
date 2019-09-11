import React from 'react';
import FolderList from "./FolderPage/FolderList";
import NoteList from './NotePage/NoteList'
import './MainPage.css';

export default class MainPage extends React.Component {
  render() {
    return (
      <>
        <section className="side-bar">
          <FolderList state={this.props.state}/>
        </section>
        <section className="note-area">
          <NoteList state={this.props.state}/>
        </section>
      
      </>
    );
  }
}


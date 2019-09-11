import React from 'react';
import './NotePage.css';
import FolderList from '../FolderPage/FolderList'
import NoteList from './NoteList'


export default function MainPage(){
    
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
import React from 'react';
import './FolderPage.css';
import FolderList from './FolderList'
import NoteList from '../NotePage/NoteList'


export default function FolderPage(){
    
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
import React from 'react';
import { Link } from 'react-router-dom';


export default class FolderList extends React.Component {

    generateFolders() {
        let folderList = this.props.state.data.folders.map(folder => {
            <li key={folder.id}>
              <Link to={`/folders/${folder.id}`}>
                <h3>{folder.name}</h3>
              </Link>
            </li>});

        return folderList;
    }

    render() {
        return (
            <div className="folderList">
              <ul>
                {this.generateFolders()}
              </ul>
              <button className="newFolder">Add Folder</button>
            </div>
        )
    }
}

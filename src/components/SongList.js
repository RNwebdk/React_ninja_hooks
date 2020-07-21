import React, { useState } from 'react';
import { v4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'This wild Darkness', id: 1 },
    { title: 'Memory gospel', id: 2 },
    { title: 'Cry me a river', id: 3 },
  ]);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: v4() }]);
  };

  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;

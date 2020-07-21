import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'This wild Darkness', id: 1 },
    { title: 'Memory gospel', id: 2 },
    { title: 'Cry me a river', id: 3 },
  ]);

  const [age, setAge] = useState(20);

  const [dog, setDog] = useState(50);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: v4() }]);
  };

  useEffect(() => {
    console.log('useEffect Hook ran', songs);
  }, [songs, age]);

  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age {age} </button>
      <button onClick={() => setDog(dog + 1)}>Add 1 to dog {dog} </button>
    </div>
  );
};

export default SongList;

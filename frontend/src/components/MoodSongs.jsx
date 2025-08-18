import './MoodSongs.css';
import React, { useState, useRef } from 'react';

const MoodSongs = ({ Songs }) => {
  const [isPlaying, setIsPlaying] = useState(null);
  const audioRefs = useRef([]);

  const handlePlayPause = (index) => {
    if (isPlaying === index) {
      audioRefs.current[index]?.pause();
      setIsPlaying(null);
    } else {
      if (isPlaying !== null) {
        audioRefs.current[isPlaying]?.pause();
      }
      audioRefs.current[index]?.play();
      setIsPlaying(index);
    }
  };

  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>
      <ul>
        {Songs.map((song, index) => (
          <li className="song" key={index}>
            <div className="title">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <div className="play-pause-button">
              <audio
                ref={(el) => (audioRefs.current[index] = el)}
                src={song.audio}
              />
              <button onClick={() => handlePlayPause(index)}>
                {isPlaying === index
                  ? <i className="ri-pause-line"></i>
                  : <i className="ri-play-circle-line"></i>}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodSongs;
import React from 'react';
import useMusicPlayer from '../hooks/useMusicPlayer';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HeadphonesIcon from "@mui/icons-material/Headphones";


function TrackList() {
    const { trackList, currentTrackName, playTrack, isPlaying, currentTrackIndex } = useMusicPlayer();
    return (
        <>
        <div className='track-list'>{currentTrackName}
        {trackList.map((track, index) => (
        // ( Surprise us with your code here)
        <button className="track-btn" key={index} onClick={() => {playTrack(index);}}>
        {isPlaying && currentTrackIndex === index ? (
              <HeadphonesIcon />
            ) : (
              <PlayArrowIcon />
            )}
            <div className="song-list">{track.name}</div>
        </button>
        ))};
        </div>
        </>
    );
}

export default TrackList

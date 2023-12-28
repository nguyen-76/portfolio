import React from 'react';
import useMusicPlayer from '../hooks/useMusicPlayer';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";
import { Box, IconButton } from "@mui/material";

function Controller() {
    const {currentTrackIndex, isPlaying, playTrack, playPreviousTrack, playNextTrack} = useMusicPlayer();
    const handleTogglePlay = () => {
        if (currentTrackIndex) {
          playTrack(currentTrackIndex);
        } else {
          playTrack(0);
        }
      };
    
      const handlePlayPreviousTrack = () => {
        playPreviousTrack();
      };
    
      const handlePlayNextTrack = () => {
        playNextTrack();
      };
  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", pl: 1, pb: 1,}}>
      <IconButton aria-label="previous" onClick={() => handlePlayPreviousTrack()}>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton
        aria-label="play/pause"
        onClick={() => handleTogglePlay()}
      >
        {isPlaying ? (
          <PauseIcon sx={{ height: 38, width: 38 }} />
        ) : (
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        )}
      </IconButton>
      <IconButton aria-label="next" onClick={() => handlePlayNextTrack()}>
        <SkipNextIcon />
      </IconButton>
    </Box>

  )
}

export default Controller

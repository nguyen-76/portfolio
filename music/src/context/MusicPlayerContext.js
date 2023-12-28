import React, { useState } from "react";
import Track1 from "../music/track1.mp3";
import Track2 from "../music/track2.mp3";
import Track3 from "../music/track3.mp3";

const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Drive Breakbeat - Rockot",
        file: Track1,
      },
      {
        name: "Titanium - Alisbeat",
        file: Track2,
      },
      {
        name: "Glossy - Coma-Media",
        file: Track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }


const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
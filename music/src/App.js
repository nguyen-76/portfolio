import Controller from "./component/Controller";
import TrackList from "./component/TrackList";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";
import "./App.css"

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Controller />
        <TrackList />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
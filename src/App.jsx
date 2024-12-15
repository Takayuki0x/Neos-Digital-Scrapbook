import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage";
import DigitalShadows from "./pages/DigitalShadows";
import PopCyber from "./pages/PopCyber";
import HackersInGames from "./pages/HackersInGames";
import HackersInMovies from "./pages/HackersInMovies";
import BlastingBeats from "./pages/BlastingBeats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/digitalshadows" element={<DigitalShadows/>} />
        <Route path="/popcyber" element={<PopCyber/>} />
        <Route path="/hackersingames" element={<HackersInGames/>} />
        <Route path="/hackersinmovies" element={<HackersInMovies/>} />
        <Route path="/blastingbeats" element={<BlastingBeats/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

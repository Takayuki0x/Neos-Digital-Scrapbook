import { useState } from "react";
import music from "../assets/nameofthegamesong.mp3";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(music));

  const toggleMusic = () => {
    if (!isPlaying) {
      audio.loop = true;
      audio
        .play()
        .then(() => {
          console.log("Audio started playing");
        })
        .catch((err) => {
          console.error("Failed to play audio:", err);
        });
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex mb-8">
        <div className="flex-1"></div>
        <div className="text-center mt-8 border border-green-400 bg-black flex-1">
            <button onClick={toggleMusic} className="text-white font-ocraextended font-bold text-lg w-full h-full">
                {isPlaying ? "DISABLE MUSIC" : "CLICK HERE FOR FULL EXPERIENCE!"}
            </button>
        </div>
        <div className="flex-1"></div>
    </div>
  );
};

export default MusicToggle;
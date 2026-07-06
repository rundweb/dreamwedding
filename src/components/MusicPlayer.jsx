import { useEffect, useRef, useState } from "react";
import music from "../assets/music/bruno.mp3";

import { MdMusicNote, MdMusicOff } from "react-icons/md";

const MusicPlayer = ({ openPages }) => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  // play music ketika undangan dibuka
  useEffect(() => {
    if (openPages) {
      const audio = audioRef.current;

      audio.currentTime = 26;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [openPages]);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-lg z-50">
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
      </audio>

      <div className="flex justify-end px-4">
        <button
          onClick={toggleMusic}
          className="bg-blue-900 shadow-lg w-10 h-10 flex items-center justify-center rounded-full text-white"
        >
          {isPlaying ? <MdMusicNote /> : <MdMusicOff />}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;

import { useContext, useEffect, useState } from "react";
import useSound from "use-sound";
import BackgroundContext from '@/utils/context/sliderBg';
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Player() {
  const { background } = useContext(BackgroundContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound('/music/airdrop.m4a');

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec: sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (

    <div className={'flex flex-row gap-1 items-center rounded-lg my-1.5 pr-1.5 z-10 w-80 ' + background.bg}>

      <div className="flex items-center">
        <button className="playButton">
            <IconContext.Provider value={{ size: "1.8em", color: "#16ee70" }}>
            <BiSkipPrevious />
            </IconContext.Provider>
        </button>
        {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "1.8em", color: "#16ee70" }}>
                <AiFillPlayCircle />
            </IconContext.Provider>
            </button>
        ) : (
            <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "1.8em", color: "#16ee70" }}>
                <AiFillPauseCircle />
            </IconContext.Provider>
            </button>
        )}
        <button className="playButton">
            <IconContext.Provider value={{ size: "1.8em", color: "#16ee70" }}>
            <BiSkipNext />
            </IconContext.Provider>
        </button>
    </div>

      <div className={'flex flex-col duration-300 transition-all ' + (background.text)}>
        <div className="text-[12px] mb-[0px]">
            Lil Bubble - Airdrop
        </div>
        <div className="flex flex-row justify-between !leading-[1rem] gap-1">
          <div className="text-[12px] mb-[0px] w-8">
            {currTime.min}:{currTime.sec}
          </div>
          <div>
            <input
              type="range"
              min="0"
              max={duration / 1000}
              default="0"
              value={seconds}
              className="timeline"
              onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            />
          </div>
          <div className="text-[12px] w-8">
            {time.min}:{time.sec}
          </div>
        </div>


      </div>

    </div>

  );
}

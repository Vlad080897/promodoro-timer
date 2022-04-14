import React, { useEffect, useState } from 'react';
import Session from './components/Session/Session';
import Title from './components/Title/Title';

function App() {
  const [sessionBreakeToggle, setSessionBreakeToggle] = useState<boolean | null>(true)
  const [length, setLength] = useState<number>(30);
  const [breake, setBreake] = useState<number>(10)
  const [minutes, setMinutes] = useState<number>(length);
  const [seconds, setSeconds] = useState<number | null>(null);
  const [audioBreakPoint, setAudioBreakPoint] = useState<number>(0)
  const [lastSecond, setLastSecond] = useState<number | null>(0)
  const [toggle, setToggle] = useState<boolean>(true)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const сancelAudio = () => {
    setIsPlaying(false);
    setAudioBreakPoint(0)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (seconds === 0 && minutes === 0) {
        if (sessionBreakeToggle) {
          setSeconds(0)
          setToggle(false)
          setSessionBreakeToggle(false)
        }
        if (sessionBreakeToggle === false) {
          setMinutes(breake)
          setToggle(false)
          сancelAudio()
          setSessionBreakeToggle(null)
        }
        if (sessionBreakeToggle === null) {
          setSeconds(null)
          setLastSecond(0)
          setMinutes(length)
          setToggle(true)
          setSessionBreakeToggle(true)
        }
      } else if (seconds === null) {
        return
      } else if (seconds <= 10 && minutes === 0) {
        setAudioBreakPoint(audioBreakPoint + 1)
        setSeconds((prevSec) => prevSec ? prevSec - 1 : null)
      } else if (minutes === 0 && seconds < 12 && seconds >= 10) {
        setIsPlaying(true)
        setSeconds((prevSec) => prevSec ? prevSec - 1 : null)
      } else if (seconds === 0) {
        setMinutes((prevMin: number) => prevMin - 1)
        setSeconds(59)
      } else if (seconds !== 0) {
        setSeconds((prevSec) => prevSec && prevSec - 1)
      }
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [minutes, seconds, length, audioBreakPoint, breake, toggle, sessionBreakeToggle])

  useEffect(() => {
    setMinutes(length)
  }, [length])


  return (
    <div className="App">
      <Title />
      <Session
        setIsPlaying={setIsPlaying}
        setToggle={setToggle}
        setSeconds={setSeconds}
        setMinutes={setMinutes}
        setLength={setLength}
        length={length}
        minutes={minutes}
        seconds={seconds}
        toggle={toggle}
        isPlaying={isPlaying}
        audioBreakPoint={audioBreakPoint}
        sessionBreakeToggle={sessionBreakeToggle}
        setSessionBreakeToggle={setSessionBreakeToggle}
        lastSecond={lastSecond}
        setLastSecond={setLastSecond}
        breake={breake}
        setBreake={setBreake}
      />
    </div>
  );
}

export default App;

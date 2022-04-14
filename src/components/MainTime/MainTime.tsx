import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { SetStateAction } from "react";

const startButton = { bgcolor: '#FFF', color: 'black', borderRadius: '0', '&:hover': { bgcolor: '#FFF' } }
const pauseButton = { bgcolor: '#161616', color: 'FFF', borderRadius: '0', '&:hover': { bgcolor: 'black' } }

const MainTime: React.FC<IPropsType> = ({
  length,
  minutes,
  seconds,
  toggle,
  lastSecond,
  setSessionBreakeToggle,
  setLastSecond,
  setSeconds,
  setMinutes,
  setToggle,
  setIsPlaying
}) => {

  const haveSeconds = seconds && seconds < 10 ? `0${seconds}` : seconds
  const noSeconds = seconds === null ? lastSecond === 0 ? '00' : seconds && seconds > 10 ? lastSecond : lastSecond && lastSecond > 10 ? lastSecond : `0${lastSecond}` : seconds === 0 ? '00' : seconds
  const handle = () => {
    setMinutes(minutes - 1)
    return 59
  }

  return (
    <>

      <Typography color='#FFF' align="center" mt={3} sx={{ fontSize: '6rem' }} >
        {minutes}
        :
        {seconds ? haveSeconds : noSeconds}
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        {
          toggle ?
            <Button
              disabled={!minutes && !seconds && !lastSecond ? true : false}
              variant="contained"
              sx={startButton}
              onClick={() => {
                setToggle(false)
                setSeconds(lastSecond === 0 ? handle() : lastSecond)
                setIsPlaying(lastSecond && lastSecond < 10 && !minutes ? true : false)
              }}
            >
              <PlayArrowIcon />
              Start
            </Button>
            :
            <Button
              variant="contained"
              sx={pauseButton}
              onClick={() => {
                setLastSecond(seconds)
                setSeconds(null)
                setIsPlaying(false)
                setToggle(true)
              }}
            >
              <PauseIcon />
              Pause
            </Button>
        }
        <Button
          variant="contained"
          sx={{ marginLeft: '10px', bgcolor: '#FFF', color: 'black', borderRadius: '0', '&:hover': { bgcolor: '#FFF' } }}
          onClick={() => {
            setMinutes(length)
            setSeconds(null)
            setLastSecond(0)
            setToggle(true)
            setSessionBreakeToggle(true)

          }}
        >
          <RestartAltIcon />
          Reset
        </Button>
      </Box>
    </>
  );
};

export default MainTime

type IPropsType = {
  length: number
  minutes: number
  seconds: number | null
  toggle: boolean
  lastSecond: number | null
  setLastSecond: (prevLastSecond: SetStateAction<number | null>) => void
  setSessionBreakeToggle: (toggle: SetStateAction<boolean | null>) => void
  setToggle: (toggle: boolean) => void
  setSeconds: (prevSec: number | null) => void
  setMinutes: (prevMin: number) => void
  setIsPlaying: (isPlaying: boolean) => void
}
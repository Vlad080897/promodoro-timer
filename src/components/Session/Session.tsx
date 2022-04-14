import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { SetStateAction, useCallback } from "react";
import MainTime from "../MainTime/MainTime";
import Alarm from "../Sound/Sound";
const alarm = require('../../sounds/timer.mp3');

const style = {
    width: 500,
    height: 500,
    margin: '0 auto',
    backgroundColor: '#ea1241',
    borderRadius: '45px'
}
const innerBlock = {
    width: 500,
    height: '35%',
    backgroundColor: 'white',
    borderBottomLeftRadius: '45px',
    borderBottomRightRadius: '45px',
    marginTop: '4rem',
    justifyContent: 'center',
    alignItems: 'center',
}

const Session: React.FC<IPropsType> = ({
    length,
    minutes,
    seconds,
    toggle,
    isPlaying,
    audioBreakPoint,
    sessionBreakeToggle,
    lastSecond,
    breake,
    setBreake,
    setLength,
    setSeconds,
    setMinutes,
    setToggle,
    setIsPlaying,
    setLastSecond,
    setSessionBreakeToggle
}) => {

    return (
        <Box sx={style}>
            {/* @ts-ignore */}
            {useCallback(<Alarm isPlaying={isPlaying} audioBreakPoint={audioBreakPoint} />, [isPlaying, audioBreakPoint])}
            <Typography variant="h5" sx={{ color: '#FFF', margin: '0 auto', width: 'fit-content', fontWeight: '500' }} pt={3}>
                {sessionBreakeToggle ? 'Session' : 'Breake'}
            </Typography>
            <MainTime
                toggle={toggle}
                length={length}
                minutes={minutes}
                seconds={seconds}
                lastSecond={lastSecond}
                setSeconds={setSeconds}
                setMinutes={setMinutes}
                setToggle={setToggle}
                setIsPlaying={setIsPlaying}
                setLastSecond={setLastSecond}
                setSessionBreakeToggle={setSessionBreakeToggle}
            />
            <Box sx={innerBlock} component='div' display='flex' >
                <Box mr={4}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.3rem', letterSpacing: '-1px', textAlign: 'center' }}>
                        Session Length
                    </Typography>
                    <Box display='flex' justifyContent='space-between' width='162px' >
                        <ExpandCircleDownIcon
                            onClick={() => setLength((prevLength) => length > 0 ? prevLength - 1 : 0)}
                            sx={{ color: '#ea1241', '&:hover': { 'cursor': 'pointer' } }} />
                        <Typography fontSize='1rem'>
                            {length} min
                        </Typography>
                        <ExpandCircleDownIcon
                            onClick={() => setLength((prevLength) => prevLength + 1)}
                            sx={{ color: '#ea1241', transform: 'rotate(180deg)', '&:hover': { 'cursor': 'pointer' } }} />
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{
                        fontWeight: 'bold', fontSize: '1.3rem', letterSpacing: '-1px', textAlign: 'center'
                    }}>
                        Breake Length
                    </Typography>
                    <Box display='flex' justifyContent='space-between' width='162px'>
                        <ExpandCircleDownIcon
                            onClick={() => setBreake((prevBreake) => breake > 0 ? prevBreake - 1 : 0)}
                            sx={{ color: '#ea1241', '&:hover': { 'cursor': 'pointer' } }}
                        />
                        <Typography fontSize='1rem'>
                            {breake} min
                        </Typography>
                        <ExpandCircleDownIcon
                            onClick={() => setBreake((prevTimeOut) => prevTimeOut + 1)}
                            sx={{ color: '#ea1241', transform: 'rotate(180deg)', '&:hover': { 'cursor': 'pointer' }, fontSize: '1.5rem' }} />
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default Session

type IPropsType = {
    length: number
    minutes: number
    seconds: number | null
    toggle: boolean
    isPlaying: boolean
    audioBreakPoint: number
    sessionBreakeToggle: boolean | null
    lastSecond: number | null
    breake: number
    setLastSecond: (prevLastSecond: SetStateAction<number | null>) => void
    setSessionBreakeToggle: (toggle: SetStateAction<boolean | null>) => void
    setLength: (prevLength: SetStateAction<number>) => void
    setToggle: (toggle: SetStateAction<boolean>) => void
    setSeconds: (prevSeconds: SetStateAction<number | null>) => void
    setMinutes: (prevMin: SetStateAction<number>) => void
    setIsPlaying: (isPlaying: SetStateAction<boolean>) => void
    setBreake: (breake: SetStateAction<number>) => void
}
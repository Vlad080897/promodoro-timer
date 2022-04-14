import React from "react";
import Sound, { ReactSoundProps } from 'react-sound';
const alarm = require('../../sounds/timer.mp3');

const Alarm: React.FC<ReactSoundProps & IPropsType> = ({
    audioBreakPoint,
    isPlaying,
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
}) => {
    return (
        <div>
            <Sound
                url={alarm}
                playStatus={isPlaying ? 'PLAYING' : 'STOPPED'}
                playFromPosition={audioBreakPoint * 1000}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            >
            </Sound>
        </div>
    )
}

export default Alarm

type IPropsType = {
    audioBreakPoint: number
    isPlaying: boolean
    handleSongLoading: () => void
    handleSongPlaying: () => void
    handleSongFinishedPlaying: () => void
}

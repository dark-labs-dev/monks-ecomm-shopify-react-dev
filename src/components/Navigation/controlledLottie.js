import React, { useState, useMemo, useCallback, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from './logo-lottie-0.json'
import { LottieContainer } from './styles'

const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

function ControlledLottie({ navActive }) {
    const [isPaused, setIsPaused] = useState(true);
    const [isStopped, setIsStopped] = useState(true);

    const handlePlay = useCallback(() => {
        setIsStopped(false);
        setIsPaused(false);
    }, []);

    const handleStop = useCallback(() => {
        setIsStopped(true);
    }, []);

    const handlePause = useCallback(() => {
        setIsPaused(!isPaused);
    }, [isPaused]);

    useEffect(() => {
        if (!navActive) { (handlePlay()) }
    }, [navActive])

    return useMemo(() => {
        return (
            <div style={{ 'width': '55%','minWidth': '150px','maxWidth': '200px'}}>
                <Lottie
                    options={defaultOptions}
                    height={'auto'}
                    width={'100%'}
                    isStopped={isStopped}
                    isPaused={isPaused}
                />
            </div>
        );
    }, [isStopped, isPaused, handleStop, handlePlay, handlePause]);
}

export default ControlledLottie;

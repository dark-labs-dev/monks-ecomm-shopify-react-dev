import { useRef, useState, useEffect } from "react";

export default function useTimer(callback, interval) {
    const [started, setStarted] = useState(true);
    const fn = useRef();
    fn.current = callback;

    useEffect(
        () => {
            if (started) {
                const intervalId = setInterval(() => fn.current(), interval);
                return () => clearInterval(intervalId);
            }
        },
        [started, interval]
    );

    return {
        started,
        toggle() {
            setStarted(state => !state);
        }
    };
}

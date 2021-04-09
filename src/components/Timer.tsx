import { useState, useEffect } from "react";

export const Timer = () => {
    const [start, setStart] = useState<number>(0);
    const [elapsedTime, setElapsedTime] = useState<number>();

    useEffect(() => {
        setStart(Date.now());
        console.log("startTime: ", start);
        setInterval(() => {
            setElapsedTime(getElapsedTime());
        }, 1000);

        const getElapsedTime = () => {
            return Math.floor((Date.now() - start) / 1000);
        };
    }, [start]);

    return <div>Time: {elapsedTime!} seconds</div>;
};

import { useState, useEffect } from "react";

export const Timer = () => {
    const [start, setStart] = useState<number>(0);
    const [elapsedTime, setElapsedTime] = useState<number>();

    useEffect(() => {
        setStart(Date.now());

        let timer = setInterval(() => {
            console.log("A second has passed");
            setElapsedTime(getElapsedTime());
        }, 1000);

        const getElapsedTime = () => {
            return Math.floor((Date.now() - start) / 1000);
        };

        return () => clearInterval(timer);
    }, [start]);

    return <div>Time: {elapsedTime!} seconds</div>;
};

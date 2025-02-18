import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onTimeout }) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => {
                if (prev === 1) {
                    clearInterval(interval);
                    onTimeout();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [onTimeout]);

    return <h3>Time left: {time}s</h3>;
};

export default Timer;

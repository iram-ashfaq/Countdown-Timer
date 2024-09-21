import { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds }: { initialSeconds: number }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer); // Cleanup on unmount
    };
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const restartTimer = () => {
    setIsActive(false);
    setSeconds(initialSeconds);
  };

  return (
    <div className="timer-container">
      <h1>Countdown Timer</h1>
      <h2>{seconds} seconds remaining</h2>
      <div>
        <button onClick={startTimer} disabled={isActive || seconds === 0}>Start</button>
        <button onClick={stopTimer} disabled={!isActive}>Stop</button>
        <button onClick={restartTimer}>Restart</button>
      </div>
    </div>
  );
};

export default CountdownTimer;

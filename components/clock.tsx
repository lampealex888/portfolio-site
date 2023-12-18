import React, { useState, useEffect } from 'react';

type DateOptions = {
  weekday: 'long';
  year: 'numeric';
  month: 'short';
  day: 'numeric';
};

type TimeOptions = {
  hour: 'numeric';
  minute: 'numeric';
  second: 'numeric';
  hour12: false;
};

type ClockProps = {
  // Add any props here if needed
};

const Clock: React.FC<ClockProps> = () => {
  const [isClient, setIsClient] = useState(false)

  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    } as DateOptions)
      .split(',')
      .join('')
  );

  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    } as TimeOptions)
  );

  useEffect(() => {
    setIsClient(true);
    const intervalId = setInterval(() => {
      setCurrentDate(
        new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        } as DateOptions)
          .split(',')
          .join('')
      );
      setCurrentTime(
        new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false,
        } as TimeOptions)
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>{currentTime}</p>
      <p>{currentDate}</p>
    </div>
  );
};

export default Clock;

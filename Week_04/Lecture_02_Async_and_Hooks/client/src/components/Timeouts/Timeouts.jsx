import React, { useEffect, useState } from "react";

function Timeouts() {
  const [time, setTime] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <p>Time Remaining: {time}</p>
      <button onClick={(e) => setTime(5)}>Reset Timer</button>
    </div>
  );
}

export default Timeouts;

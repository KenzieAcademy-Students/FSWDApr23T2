import { useState } from "react";
import "./Team.css";

const initialStats = {
  shotsTaken: 0,
  score: 0,
};

function Team({ name, logo }) {
  const [stats, setStats] = useState(initialStats);
  const [shootSound] = useState(new Audio("./shoot.mp3"));
  const [scoreSound] = useState(new Audio("./score.mp3"));

  const handleShoot = (e) => {
    stopSound(shootSound);
    stopSound(scoreSound);
    const newStats = { ...stats, shotsTaken: stats.shotsTaken + 1 };

    if (Math.round(Math.random() * 10) < 3) {
      newStats.score++;
      playSound(scoreSound);
    } else {
      playSound(shootSound);
    }

    setStats(newStats);
  };

  const stopSound = (sound) => {
    sound.pause();
    sound.currentTime = 0;
  };

  const playSound = (sound) => {
    sound.play();
  };

  return (
    <div>
      <h3>{name}</h3>
      <img className="team-logo" src={logo} alt={name} />
      <h4>Stats</h4>
      <ul>
        <li>Score: {stats.score}</li>
        <li>Shots: {stats.shotsTaken}</li>
        {stats.shotsTaken > 0 && (
          <li>Shot Pct: {(stats.score / stats.shotsTaken).toFixed(3)}</li>
        )}
      </ul>
      <button onClick={handleShoot}>Shoot</button>
    </div>
  );
}

export default Team;

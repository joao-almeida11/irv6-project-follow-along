import { useState, useEffect } from "react";
import Score from "./Score";
import getStore from "./getScore";

export default function App() {
  const [isPending, setIsPending] = useState(true);
  const [game, setGame] = useState(1);
  const [score, setScore] = useState({ home: "-", away: "-" });

  async function getNewScore(game) {
    setIsPending(true);
    setGame(game);
    const newScore = await getStore(game);
    setScore(newScore);
    setIsPending(false);
  }

  useEffect(() => {
    getNewScore(game);
  }, []);

  return (
    <div className="app">
      <h1>Game {game}</h1>
      <select
        name=""
        id=""
        disabled={isPending} // to avoid potential race collision
        onChange={(e) => e.target.value}
      >
        <option value="1">Game 1</option>
        <option value="2">Game 2</option>
        <option value="3">Game 3</option>
        <option value="4">Game 4</option>
        <option value="5">Game 5</option>
        <option value="6">Game 6</option>
        <option value="7">Game 7</option>
        <option value="8">Game 8</option>
      </select>
      <div className={`loading-container ${isPending ? "loading" : ""}`}>
        <span className="spinner">⚽︎</span>
      </div>
      <div>
        <Score
          isPending={isPending}
          homeImage={score.homeImage}
          homeName={score.homeName}
          awayImage={score.awayImage}
          home={score.homw}
          away={score.away}
        />
      </div>
    </div>
  );
}

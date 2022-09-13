import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { GameContext } from "../../context/GameContext";

const SnakeGame = () => {
  const { game, gameUpdate, gameResult } = useContext(GameContext);
  const { player } = useContext(AuthContext);

  const handleKeyDown = (e) => {
    let inputDirection = { x: 0, y: 0 };
    let lastInputDirection = { x: 0, y: 0 };
    switch (e.key) {
      case "ArrowUp":
        if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: -1 };
        break;
      case "ArrowDown":
        if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: 1 };
        break;
      case "ArrowLeft":
        if (lastInputDirection.x !== 0) break;
        inputDirection = { x: -1, y: 0 };
        break;
      case "ArrowRight":
        if (lastInputDirection.x !== 0) break;
        inputDirection = { x: 1, y: 0 };
        break;
      default:
        return inputDirection;
    }
    gameUpdate(game, inputDirection, player);
  };

  return (
    <main>
      <div>
        <h1>time: {game.lastRenderTime}</h1>
      </div>
      <div className="board snake-game" tabIndex={0} onKeyDown={handleKeyDown}>
        {game.board.length > 1 &&
          game.board.map((cell) => (
            <div
              key={cell.uid}
              // onClick={() => checkLegalMove(cell)}
              className={`cell x-${cell.x} y-${cell.y} ${cell.content}`}
            />
          ))}
      </div>
    </main>
  );
};
export default SnakeGame;

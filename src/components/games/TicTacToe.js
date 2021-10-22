import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { PlayerContext } from "../../context/PlayerContext";

const TicTacToe = () => {
  const { game, placeMark } = useContext(GameContext);
  const { player } = useContext(PlayerContext);
  const [turn, setTurn] = useState(false);

  const isPlayer1 = player.uid === game.players.player1.uid ? true : false;
  useEffect(() => {
    if (game.turn) {
      isPlayer1 && game.turn === "player1" ? setTurn(true) : setTurn(false);
    }
  }, [game.turn, isPlayer1]);
  return (
    <main className="board tictactoe">
      {game.board.length > 1 &&
        game.board.map((cell) => (
          <button
            key={cell.uid}
            disabled={!cell.isEmpty || !turn}
            onClick={() => placeMark(game, cell)}
            className={`cell x-${cell.positionX} y-${cell.positionY} ${
              game.turn === "player1" && isPlayer1 ? "player1" : "player2"
            }`}
          />
        ))}
    </main>
  );
};
export default TicTacToe;

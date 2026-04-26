import { useState } from "react";
import './LudoGame.css'

function LudoGame() {
    const [moves, setMoves] = useState({ red: 0, yellow: 0, green: 0, blue: 0 });
    let updateRed = () => {
        let newMove = Math.ceil(Math.random() * 6);
        setMoves((prev) => {
            return { ...prev, red: newMove };
        })
    };

    let updateYellow = () => {
        let newMove = Math.ceil(Math.random() * 6);
        setMoves((prev) => {
            return { ...prev, yellow: newMove };
        })
    };

    let updateGreen = () => {
        let newMove = Math.ceil(Math.random() * 6);
        setMoves((prev) => {
            return { ...prev, green: newMove };
        })
    };

    let updateBlue = () => {
        let newMove = Math.ceil(Math.random() * 6);
        setMoves((prev) => {
            return { ...prev, blue: newMove };
        })
    };

    return (
        <div className="ludo-container">
            <h1 className="title">🎲 Ludo Game Begins</h1>
            <div className="players-grid">
                <div className="player-card red">
                    <h3>🔴 Red Player</h3>
                    <p>Moves: {moves.red}</p>
                    <button onClick={updateRed}>Roll Dice</button>
                </div>

                <div className="player-card yellow">
                    <h3>🟡 Yellow Player</h3>
                    <p>Moves: {moves.yellow}</p>
                    <button onClick={updateYellow}>Roll Dice</button>
                </div>

                <div className="player-card green">
                    <h3>🟢 Green Player</h3>
                    <p>Moves: {moves.green}</p>
                    <button onClick={updateGreen}>Roll Dice</button>
                </div>

                <div className="player-card blue">
                    <h3>🔵 Blue Player</h3>
                    <p>Moves: {moves.blue}</p>
                    <button onClick={updateBlue}>Roll Dice</button>
                </div>
            </div>
        </div>
    )
}

export default LudoGame;
import { useState } from "react";
import { GameScreen } from "./style";

export default function Game() {
    const [ newgame, setNewgame ] = useState(true);
    return(
        <GameScreen>
            <h1>Game</h1>
            <button>START</button>
        </GameScreen>
    )
}
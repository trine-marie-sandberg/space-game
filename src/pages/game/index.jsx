import { useState } from "react";
import { Button, GameScreen } from "./style";

export default function Game() {
    const [ newgame, setNewgame ] = useState(false);
    return(
        <GameScreen>
            {newgame?
              <div>newgame</div>
              :
              <Button onClick={() => setNewgame(true)}>START</Button>
            }
        </GameScreen>
    )
}
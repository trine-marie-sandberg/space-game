import { useState } from "react";
import { StartBtn, GameScreen, GameWrapper, QuitBtn } from "./style";

export default function Game() {
    const [ newgame, setNewgame ] = useState(false);
    return(
        <GameScreen>
            {newgame?
              <GameWrapper>
                <QuitBtn onClick={() => setNewgame(false)}>
                    Quit
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </QuitBtn>
                newgame
              </GameWrapper>
              :
              <GameWrapper>
                <StartBtn onClick={() => setNewgame(true)}>START</StartBtn>
              </GameWrapper>
            }
        </GameScreen>
    )
}
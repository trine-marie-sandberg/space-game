import { useState } from "react";
import { StartBtn, GameScreen, GameWrapper, QuitBtn, ShipBtn, VsWrapp } from "./style";
import SpaceShip1 from "../../game-components/spaceship1";
import SpaceShip2 from "../../game-components/spaceship2";

export default function Game() {
    const [ newgame, setNewgame ] = useState(false);
    const [ shipChosen, setShipChosen ] = useState(0);
    return(
        <div>
            <h1>Space Game</h1>
            <GameScreen>
                {newgame?
                <GameWrapper>
                    <QuitBtn onClick={() => {
                        setNewgame(false);
                        setShipChosen(0);
                    }}>
                        Quit
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </QuitBtn>
                    {shipChosen === 0 ?
                        <div>
                            <h2>Choose ship</h2>
                            <ShipBtn onClick={() => setShipChosen(1)}>
                                <SpaceShip1 />
                            </ShipBtn>
                            <ShipBtn onClick={() => setShipChosen(2)}>
                                <SpaceShip2 />
                            </ShipBtn>
                        </div>
                        : 
                        <div>
                            {shipChosen === 1 ?
                              <VsWrapp>
                                <div>
                                    <SpaceShip1 />
                                    <p>100%</p>
                                </div>
                                <div>
                                    <SpaceShip2 />
                                    <p>100%</p>
                                </div>
                                
                              </VsWrapp>
                              :
                              <VsWrapp>
                                <div>
                                    <SpaceShip2 />
                                    <p>100%</p>
                                </div>
                                <div>
                                    <SpaceShip1 />
                                    <p>100%</p>
                                </div>
                              </VsWrapp>
                            }
                        </div>
                    }
                </GameWrapper>
                :
                <GameWrapper>
                    <StartBtn onClick={() => setNewgame(true)}>START</StartBtn>
                </GameWrapper>
                }
            </GameScreen>
        </div>
    )
}
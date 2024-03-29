import { NavLink } from "react-router-dom";
import { Li, Ul, Navigation } from "./style";

export default function Nav() {
    return(
        <Navigation>
            <Ul>
                <Li>
                    <NavLink to="/"> 
                      <i className="fa-solid fa-house"></i>
                      Home
                    </NavLink>
                </Li>
                <Li>
                    <NavLink to="game">
                      <i className="fa-solid fa-shuttle-space"></i>
                      Game
                    </NavLink>
                </Li>
            </Ul>
        </Navigation>
    )
}
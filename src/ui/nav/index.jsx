import { NavLink } from "react-router-dom";
import { Li, Ul } from "./style";

export default function Nav() {
    return(
        <nav>
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
        </nav>
    )
}
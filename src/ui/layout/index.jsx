import Nav from "../nav";
import { Header, Main, Grid, Footer } from "./style";

export default function Layout({children}) {
    return(
        <Grid>
            <Header>
                <Nav/>
            </Header>
            <Main>
                {children}
            </Main>
            <Footer>© rights reserved, 2024</Footer>
        </Grid>
    )
}
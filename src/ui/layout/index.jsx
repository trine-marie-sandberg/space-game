import Nav from "../nav";

export default function Layout({children}) {
    return(
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}
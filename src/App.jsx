import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import Layout from "./ui/layout"
import Game from "./pages/game"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

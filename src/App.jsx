import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import YourCoins from "./pages/YourCoins"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/yourCoins" element={<YourCoins />} />
      </Routes>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Trade from "./pages/Trade"
import YourCoins from "./pages/YourCoins"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/yourCoins" element={<YourCoins />} />
        <Route path="/trade" element={<Trade />} />
      </Routes>
      
    </>
  )
}

export default App

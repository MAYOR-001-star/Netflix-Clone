import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Player from "./Pages/Player/Player"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route path="/player/:id" element={<Player />}/>
      </Routes>
    </div>
  )
}

export default App

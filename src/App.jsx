import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App

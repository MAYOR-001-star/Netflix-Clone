import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Player from "./Pages/Player/Player"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase"
import { useEffect } from "react"

const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        console.log(user) 
        navigate('/')
      }else{
        console.log('Logged out')
        navigate('/login')
      }
    })
  })
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

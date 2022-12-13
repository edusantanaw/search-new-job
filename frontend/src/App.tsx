import { useAuth } from "./context/authContext"
import Home from "./pages/home/Home"
import { Global } from "./styles/Global"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/auth/Index'

function App() {
  const { isLogged } = useAuth()
  console.log(isLogged)
  return (
    <div>
      <Global />
      <Router>
        <Routes>
          <Route path="/" element={isLogged ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={!isLogged ? <Auth /> : <Navigate to="/" />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App

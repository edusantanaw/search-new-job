import { useAuth } from "./context/authContext"
import Home from "./pages/home/Home"
import { Global } from "./styles/Global"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/auth/Index'
import Header from "./layout/Header"
import Search from "./pages/search/Search"

function App() {
  const { isLogged } = useAuth()
  console.log(isLogged)
  return (
    <div>
      <Global />
      <Router>
        {isLogged && <Header />}
        <Routes>
          <Route path="/" element={isLogged ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/search/:params" element={isLogged ? <Search /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={!isLogged ? <Auth /> : <Navigate to="/" />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App

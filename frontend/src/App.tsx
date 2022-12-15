import { useAuth } from "./context/authContext"
import Home from "./pages/home/Home"
import { Global } from "./styles/Global"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/auth/Index'
import Header from "./layout/Header"
import Search from "./pages/search/Search"
import Company from "./pages/company/Company"
import RegisterCompany from "./pages/company/RegisterCompany"

function App() {
  const { isLogged } = useAuth()
  return (
    <div>
      <Global />
      <Router>
        {isLogged && <Header />}
        <Routes>
          <Route path="/" element={isLogged ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/company/register" element={isLogged ? <RegisterCompany /> : <Navigate to="/signin" />} />
          <Route path="/company" element={isLogged ? <Company /> : <Navigate to="/signin" />} />
          <Route path="/search/:params" element={isLogged ? <Search /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={!isLogged ? <Auth /> : <Navigate to="/" />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App

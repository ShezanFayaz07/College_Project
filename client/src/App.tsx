import AuthPage from "./pages/AuthPage"
import LandingPage from "./pages/LandingPage"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </>
  )
}

export default App

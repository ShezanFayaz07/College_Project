import AuthPage from "./pages/AuthPage"
import LandingPage from "./pages/LandingPage"
import { Routes, Route } from "react-router-dom"
import QuizViewPage from "./pages/QuizViewPage"
import ResultPage from "./pages/ResultPage"



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />

        <Route path="/quiz/:id" element={<QuizViewPage />} />
        <Route path="/quiz/:id/results" element={<ResultPage />} />
      </Routes>
    </>
  )
}

export default App

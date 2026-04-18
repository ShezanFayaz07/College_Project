import AuthPage from "./pages/AuthPage"
import LandingPage from "./pages/LandingPage"
import { Routes, Route } from "react-router-dom"
import QuizViewPage from "./pages/QuizViewPage"
import ResultPage from "./pages/ResultPage"
import ShareLinkPage from "./pages/ShareLinkPage"
import TermsPage from "./pages/TermsPage"
import PrivacyPage from "./pages/PrivacyPage"
import StatsPage from "./pages/StatsPage"
import DashboardPage from "./pages/DashboardPage"
import QuizConfigPage from "./pages/QuizConfigPage"
import QuizEditPage from "./pages/QuizEditPage"
import CreaterLayout from "./layouts/CreaterLayout"
import UploadPage from "./pages/UploadPage"
import { useEffect } from "react"



function App() {


    useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/quiz/:id" element={<QuizViewPage />} />
        <Route path="/quiz/:id/results" element={<ResultPage />} />



        <Route path="/create" element={<CreaterLayout />} >

        <Route path="upload" element={<UploadPage />} />
        <Route path="share" element={<ShareLinkPage />} />
        <Route path="config" element={<QuizConfigPage/>}/>
        <Route path="edit" element={<QuizEditPage />} />

        </Route>




        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/stats/:id" element={<StatsPage />} />
      </Routes>
    </>
  )
}

export default App

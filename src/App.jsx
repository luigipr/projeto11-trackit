
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import HabitsPage from "./pages/HabitsPage"
import TodayPage from "./pages/TodayPage"
import HistoryPage from "./pages/HistoryPage"
import ResetStyle from "./style/ResetStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom";





export default function App() {



  return (
      <>
          <BrowserRouter>
            <ResetStyle />

              <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<SignUpPage />} />
              <Route path='/habitos' element={<HabitsPage />} />
              <Route path='/hoje' element={<TodayPage />} />
              <Route path='/historico' element={<HistoryPage />} />
              </Routes>

              
          </BrowserRouter>
      </>
  )
}

import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";





export default function App() {

  axios.defaults.headers.common['Authorization'] = '2GkGoRP9ETlDO5k8paZaQY5V';



  return (
      <>
          <BrowserRouter>

              <Routes>
              <Route path='/' element={<HomePage />} />               
              <Route path='/assentos/:idSessao' element={<SeatsPage  />} />
              <Route path='/sessoes/:idFilme' element={<SessionsPage />} />
              <Route path='/sucesso' element={<SuccessPage />} />
              </Routes>
              
          </BrowserRouter>
      </>
  )
}

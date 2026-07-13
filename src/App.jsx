import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import CoachDetails from './pages/CoachDetails';
import ScrollToHash from './components/ScrollToHash';
export default function App() {
  return (
    <>

      <ScrollToHash />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/coach-details" element={<CoachDetails />} />
      </Routes>
    </>
  )
}

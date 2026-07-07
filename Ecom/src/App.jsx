import About from './components/About';
import Jobs from './components/Jobs';
import Services from './components/Services';
import HomePage from './pages/Homepage';
import CaseStudy from "./pages/CaseStudy"
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/case-study' element={<CaseStudy />} />
    </Routes >
  );
}


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import HomePage from './pages/Home'
import ChroniclesPage from './pages/Chronicles'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chronicles" element={<ChroniclesPage />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App

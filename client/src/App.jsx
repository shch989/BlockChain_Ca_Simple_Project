import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
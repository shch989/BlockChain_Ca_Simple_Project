import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import MainWalletPage from './pages/MainWalletPage';
import AdminWalletPage from './pages/AdminWalletPage'
import UserWalletPage from './pages/UserWalletPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWalletPage />} />
        <Route path="/wallet-admin" element={<AdminWalletPage />} />
        <Route path="/wallet-user" element={<UserWalletPage />} />
      </Routes>
    </Router>
  )
}

export default App
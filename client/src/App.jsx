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
        <Route path="/admin-wallet" element={<AdminWalletPage />} />
        <Route path="/user-wallet" element={<UserWalletPage />} />
      </Routes>
    </Router>
  )
}

export default App
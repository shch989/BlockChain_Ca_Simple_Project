import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import MainWalletPage from './pages/MainWalletPage';
import AdminWalletPage from './pages/AdminWalletPage'
import UserWalletPage from './pages/UserWalletPage';
import CreateAssetPage from './pages/CreateAssetPage';
import QueryAssetPage from './pages/QueryAssetPage';
import TransferAssetPage from './pages/TransferAssetPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWalletPage />} />
        <Route path="/wallet-admin" element={<AdminWalletPage />} />
        <Route path="/wallet-user" element={<UserWalletPage />} />
        <Route path="/create-asset" element={<CreateAssetPage />} />
        <Route path="/query-asset" element={<QueryAssetPage />} />
        <Route path="/transfer-asset" element={<TransferAssetPage />} />
      </Routes>
    </Router>
  )
}

export default App
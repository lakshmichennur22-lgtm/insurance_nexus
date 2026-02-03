import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PolicyList from './pages/PolicyList.jsx'
import PolicyDetails from './pages/PolicyDetails.jsx'
import PurchaseSuccess from './pages/PurchaseSuccess.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import './styles.css'

function App() {
  return (
    <BrowserRouter>
      <header className="topbar">
        <nav className="container">
          <Link to="/" className="brand">InsureSmart</Link>
          <div className="nav-links">
            <Link to="/admin">Admin</Link>
          </div>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<PolicyList />} />
          <Route path="/policy/:id" element={<PolicyDetails />} />
          <Route path="/success" element={<PurchaseSuccess />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} InsureSmart</footer>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

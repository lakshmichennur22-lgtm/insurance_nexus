import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminLogin } from '../../lib/api.js'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    const ok = await adminLogin(username, password)
    if (ok) navigate('/admin/dashboard')
    else alert('Invalid credentials')
  }

  return (
    <div className="card">
      <h2>Admin Login</h2>
      <form onSubmit={onSubmit}>
        <input className="input" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="button">Login</button>
      </form>
      <p>Demo credentials: <code>admin / admin123</code></p>
    </div>
  )
}

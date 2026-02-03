import React, { useEffect, useState } from 'react'
import { fetchPurchases } from '../../lib/api.js'

export default function AdminDashboard() {
  const [rows, setRows] = useState([])
  useEffect(() => { fetchPurchases().then(setRows) }, [])

  return (
    <div>
      <h2>Purchased Policies</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Policy</th>
            <th>Premium</th>
            <th>Purchased At</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.fullName}</td>
              <td>{r.email}</td>
              <td>{r.policyName}</td>
              <td>₹{r.premium}</td>
              <td>{new Date(r.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

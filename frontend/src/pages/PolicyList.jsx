import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPolicies } from '../lib/api.js'

export default function PolicyList() {
  const [policies, setPolicies] = useState([])
  useEffect(() => { fetchPolicies().then(setPolicies) }, [])

  return (
    <div>
      <h1>Popular Insurance Policies</h1>
      <div className="grid">
        {policies.map(p => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p><span className="badge">₹{p.premium} / year</span></p>
            <Link to={`/policy/${p.id}`} className="button">View & Buy</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

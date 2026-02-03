import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchPolicy, purchasePolicy } from '../lib/api.js'

export default function PolicyDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [policy, setPolicy] = useState(null)
  const [form, setForm] = useState({ fullName: '', email: '', age: '', nominee: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => { fetchPolicy(id).then(setPolicy) }, [id])

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await purchasePolicy({ policyId: Number(id), ...form })
      navigate('/success')
    } catch (e) {
      alert('Purchase failed. Try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!policy) return <p>Loading...</p>

  return (
    <div className="card">
      <h2>{policy.name}</h2>
      <p>{policy.description}</p>
      <p><strong>Premium:</strong> ₹{policy.premium} / year</p>
      <h3>Enter your details</h3>
      <form onSubmit={onSubmit}>
        <input className="input" name="fullName" placeholder="Full Name" value={form.fullName} onChange={onChange} required />
        <input className="input" name="email" placeholder="Email" value={form.email} onChange={onChange} type="email" required />
        <input className="input" name="age" placeholder="Age" value={form.age} onChange={onChange} type="number" min="18" required />
        <input className="input" name="nominee" placeholder="Nominee Name" value={form.nominee} onChange={onChange} required />
        <button className="button" disabled={loading}>{loading ? 'Processing...' : 'Pay & Purchase (Demo)'}</button>
      </form>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function PurchaseSuccess() {
  return (
    <div className="card">
      <h2>Purchase Successful 🎉</h2>
      <p>Your policy purchase has been recorded.</p>
      <Link to="/" className="button">Back to Policies</Link>
    </div>
  )
}

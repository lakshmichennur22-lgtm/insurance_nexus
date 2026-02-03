const API_BASE = import.meta.env.VITE_API_BASE + "/api"

export async function fetchPolicies() {
  const res = await fetch(`${API_BASE}/policies`)
  return res.json()
}

export async function fetchPolicy(id) {
  const res = await fetch(`${API_BASE}/policies/${id}`)
  return res.json()
}

export async function purchasePolicy(payload) {
  const res = await fetch(`${API_BASE}/purchases`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Failed to purchase')
  return res.json()
}

export async function adminLogin(username, password) {
  // demo-only: fake login for now
  if (username === 'admin' && password === 'admin123') {
    localStorage.setItem('adminToken', 'demo-token')
    return true
  }
  return false
}

export async function fetchPurchases() {
  const res = await fetch(`${API_BASE}/admin/purchases`)
  return res.json()
}

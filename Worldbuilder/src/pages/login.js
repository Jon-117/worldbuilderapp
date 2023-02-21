import React, { useState } from "react"
import { navigate } from "gatsby"
import firebase from "firebase/app"
import "firebase/auth"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      navigate("/dashboard")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default LoginPage

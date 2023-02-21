import React, { useState } from "react"
import { navigate } from "gatsby"
import firebase from "firebase/app"
import "firebase/auth"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
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

  const handleRegister = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      navigate("/dashboard")
    } catch (error) {
      setError(error.message)
    }
  }
 
  return (
    <div>
      <h2>Login</h2>
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
      </form>
      {error && <p>{error}</p>}
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default LoginPage


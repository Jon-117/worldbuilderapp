import React, { useState } from "react"
import { navigate } from "gatsby"
import firebase from "firebase/app"
import "firebase/auth"

const RegistrationForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(null)
  
    const handleRegistration = async (e) => {
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
      <form onSubmit={handleRegistration}>
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
        {error && <p>{error}</p>}
      </form>
    )
  }

  export default RegistrationForm
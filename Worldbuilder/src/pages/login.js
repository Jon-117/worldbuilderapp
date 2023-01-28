import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { firebase } from 'gatsby-plugin-firebase'

const LoginLogout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      await firebase.auth().signInWithPopup(provider)
      setIsLoggedIn(true)
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut()
      setIsLoggedIn(false)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  )
}

export default LoginLogout
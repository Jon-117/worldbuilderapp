import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const ProfilePage = () => {
  return (
    <main>

      <Link to="/">Home</Link>
    </main>
  )
}
export const Head = () => <title>Profile</title>
// Step 3: Export your component
export default ProfilePage
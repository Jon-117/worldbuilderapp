import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About the author</h1>
      <p></p>
      <Link to="/">Back to Home</Link>
    </main>
  )
}
export const Head = () => <title>About Me</title>
// Step 3: Export your component
export default AboutPage
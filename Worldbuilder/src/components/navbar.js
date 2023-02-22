import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => {
  // Array of linked pages
  const samplePageLinks = [
    {
      text: "Page 2",
      url: "page-2",
      badge: false,
      description:
        "A simple example of linking to another page within a Gatsby site",
    },
    { text: "TypeScript", url: "using-typescript" },
    { text: "Server Side Rendering", url: "using-ssr" },
    { text: "Deferred Static Generation", url: "using-dsg" },
    { text: "Profile", url: "profile" },
    { text: "Login", url: "login" },
  ]

  return (
    // map array of links to a list
    <nav className="navbar">
      <ul className="navbar-nav">
        {samplePageLinks.map((link) => (
          <li className="nav-item" key={link.url}>
            <Link to={`/${link.url}`} className="nav-link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

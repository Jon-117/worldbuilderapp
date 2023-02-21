import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
<p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
const pageLinks = [
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
    { text: "Profile", url: "profile"},
    { text: "Login", url: "login"}
  ]
export default Navbar

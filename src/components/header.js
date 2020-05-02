import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <div className="container main-login">
      <div className="row">
        <Link to="/">
          Zaloguj
        </Link>
        <Link to="/">
          Załóż konto
        </Link>
      </div>
    </div>
  )
}

export default Header

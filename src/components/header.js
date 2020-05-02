import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <div className="container main-login">
      <div className="row">
        <Link to="/login">
          Zaloguj
        </Link>
        <Link to="/register">
          Załóż konto
        </Link>
      </div>
    </div>
  )
}

export default Header

import { Link } from "gatsby"
import React from "react"

import HomeNavigation from './home/HomeNavigation';

const Header = () => {
  return (
    <>
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
      <HomeNavigation />
    </>
  )
}

export default Header

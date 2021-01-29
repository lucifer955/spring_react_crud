import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComponent() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><span className=""><b>NATURE</b></span><span className="text-secondary"><b>CAMPGROUNDS</b></span></Link>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/add-campgrounds/-1">Add Campgrounds</Link>
      </div>
    </div>
  </div>
</nav>

        </div>
    )
}

export default HeaderComponent

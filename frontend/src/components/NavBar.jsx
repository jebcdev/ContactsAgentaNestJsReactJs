import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className="text-center">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">Contacts Agenda</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/create"} className="nav-link" aria-current="page" >Create Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
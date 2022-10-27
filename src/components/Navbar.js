import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Tai Store Indumentaria</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Colección 2022</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Camisas y remeras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pantalones y shorts</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Calzado
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Zapatillas urbanas</a></li>
                  <li><a className="dropdown-item" href="#">Zapatos</a></li>
                </ul>
              </li>
                          </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            {<CartWidget notificationNumber={4} />}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
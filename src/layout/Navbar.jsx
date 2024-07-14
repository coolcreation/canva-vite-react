import logo from '../../public/vite.svg'

const Navbar = () => {
   return(
    <>
     <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary px-1 px-lg-3">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-2 me-auto ms-lg-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link text-start text-lg-center active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-start text-lg-center " href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link text-start text-lg-center  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul className="dropdown-menu rounded-0 border-0">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>

            </ul>
            <form className="d-flex ms-2 me-2 ms-lg-0 me-lg-0 position-relative" role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-info position-absolute end-0 rounded-0 rounded-end" type="submit">Go!</button>
            </form>
            </div>
        </div>
        </nav>
     </div>
    </>
   )
}

export default Navbar
function Navbar() {
   return(
    <nav className="navbar navbar-expand-larg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-tuggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedConent" aria-expanded="false" arai-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="nabarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="na-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="nabarDropdown">
                <a className="dropdown-item" href="#">Action </a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">something else here</a>
                </div>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" href="#">disabled</a>
            </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="search " aria-label="search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
        </form>
    </div>
</nav>
   )
}


ReactDOM.render(
    <div>
        <Navbar />
    </div>,
    document.getElementById("root")
)
ReactDOM.render(<marquee>oleh</marquee>, document.getElementById("root2"))
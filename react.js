function Navbar() {
    return (
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

// function MainContent() {
//     return(
//         <h1> My React </h1>
//     )
// }


// const h1 = document.createElement("h1")
// h1.textContent = "this is an imperetive way to program"
// h1.className = "header"
// document.getElementById("root2").append(h1)

// const page = (
//     <div>
//         <h1 className="header">this is jsx</h1>
//         <p>this is a paragraph</p>

//     </div>
// )

// ReactDOM.render(
//     page,
//     document.getElementById("")
// )
// ReactDOM.render(<marquee>oleh</marquee>, document.getElementById(""))

 
import React from "react"
import  {ReactDOM}  from "react"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

  ReactDOM.render(navbar, document.getElementById("root") )

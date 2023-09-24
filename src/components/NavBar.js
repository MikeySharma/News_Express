import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({setSearchData, updateNews}) => {

  const valueToSearch =(e) =>{
    if(e.key ==="Enter"){
     setSearchData(()=> e.target.value)
     setTimeout(()=>{
       updateNews();
     }, 600)

      


    } 
  }
  

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark">
      <div className="container-fluid ">
        <Link className="navbar-brand text-light" to="/">NewsExpress</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-space-between" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li> <div className="dropdown mx-3">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/business" >Business</Link></li>
                <li><Link className="dropdown-item" to="/entertainment" >Entertainment</Link></li>
                <li><Link className="dropdown-item" to="/general">General</Link></li>
                <li><Link className="dropdown-item" to="/science" >Science</Link></li>
                <li><Link className="dropdown-item" to="/health" >Health</Link></li>
                <li><Link className="dropdown-item" to="/sports" >Sports</Link></li>
                <li><Link className="dropdown-item" to="/technology" >Technology</Link></li>
              </ul>

            </div>
            </li>
          </ul>
          
            <input className="form-control me-2" onKeyDown={valueToSearch} type="search" placeholder="Search" aria-label="Search" />
          
        </div>
      </div>

    </nav>

  )

}

export default NavBar;
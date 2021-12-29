import React, {useState} from 'react'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [modeChange, setmodeChange] = useState("Enable Dark mode");

  const toggleshift = ()=>{
    if(`${props.Mode==='dark'}`){
      setmodeChange("Enable Light mode")
      
    }
    else{
      setmodeChange("Enable dark mode")
    }
  }
    return (
        <div>
          <nav className={`navbar navbar-expand-lg navbar-${props.Mode} `} style={{backgroundColor:props.Mode==='dark'?'#252929':'#8cc8fa'}}>
            <div className="container-fluid">
              <a className="navbar-brand" href="#">{props.title}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href='#'>Home</a>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/about">About us</Link>
                  </li> */}
                </ul>
                <div className={`form-check form-switch text-${props.Mode==='dark'?'light':'dark'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" onClick={toggleshift} htmlFor="flexSwitchCheckDefault">{modeChange}</label>
                </div>
      
              </div>
  </div>
</nav>
        </div>
    )
}


import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './ResuableBanner.css';
import {Link} from "react-router-dom"
function Mymenu(){
    return(
        <>
        <nav class="navbar bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand"  >
      <img src="https://blog.logrocket.com/wp-content/uploads/2020/07/react-native-geolocation.png" alt="Logo" width="40" height="34" class="d-inline-block align-text-top"/>ReactJS</a>
  </div>
</nav>
<nav class="navbar navbar-expand-lg navbar1">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to='/home' className="nav-link"   ><li>Home</li></Link>
        </li>
        <li class="nav-item">
        <Link to='/about' className="nav-link"   ><li>Login</li></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
        
    );
}
export default Mymenu;
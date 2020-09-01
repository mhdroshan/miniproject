import React from 'react';

import { BrowserRouter, Link } from 'react-router-dom'
const Navbar = () => {
    return (


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Shopping</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      
    <Link class="nav-item nav-link" to="/">Shop</Link>
      <Link class="nav-item nav-link" to="/cart">My cart</Link>

    </div>
  </div>
</nav>

        // <nav className="nav-wrapper">
        //     <div className="container">

                



        //         <BrowserRouter>

        //             <Link to="/" className="brand-logo">Shopping</Link>

        //             <ul className="right">
        //                 <li><Link to="/">Shop</Link></li>
        //                 <li><Link to="/cart">My cart</Link></li>
        //                 <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
        //             </ul>
        //         </BrowserRouter>
        //     </div>
        // </nav>
    )
}

export default Navbar;
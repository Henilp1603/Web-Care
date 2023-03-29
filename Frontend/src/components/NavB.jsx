import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/Cartcontext';
import '../styles/NavB.css';


function NavB() {
 const {total_item}=useCartContext();
  return (
    <header className='header-active' >

<div className=" container ">

    <a href="#" className="logo"><span>W</span>eb<span>C</span>are.</a>

    <nav className="nav">
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/products">products</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/donation" className="donation">Tests</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li className='position-relative' >
              <Link to="/cart">
                Cart {total_item !== 0 ? (<span className="beg  position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {total_item}
    
  </span>):(<span></span>)}
              </Link>
            </li>
            
        </ul>
    </nav>

    <div className="fas fa-bars"></div>

</div>

</header>
  )
}

export default NavB

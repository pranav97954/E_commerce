import React, { useContext,useState } from 'react'
import'./Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import menu_icon from '../Assets/menu.png'
import cross_icon from '../Assets/close.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>PRINCESS</p>
      </div> 
      <div>
        <ul className="sidebar">
        <li  onClick={()=>{document.querySelector('.sidebar').style.display = 'none'}} className='cross-icon'><img src={cross_icon} alt="X" /></li>
          <li onClick={()=>{setMenu("shop")}}><Link to='/' style = {{ textDecoration: 'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("men")}}><Link to='/mens' style={{textDecoration: 'none'}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("women")}}><Link to='/womens' style={{textDecoration: 'none'}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kid")}}><Link to='/kids' style={{textDecoration: 'none'}}>Kids</Link>{menu==="kid"?<hr/>:<></>}</li>
          <li className='nav-login'><Link to='/login'><button>Login</button></Link></li>
          <li className='nav-button'><Link to='/cart'><img src={cart_icon} alt="cart" /></Link></li>
        </ul>
      </div>


      <ul className="nav-menu">
        <li className='hide'  onClick={()=>{setMenu("shop")}}><Link to='/' style = {{ textDecoration: 'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li className='hide'  onClick={()=>{setMenu("men")}}><Link to='/mens' style={{textDecoration: 'none'}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li className='hide'  onClick={()=>{setMenu("women")}}><Link to='/womens' style={{textDecoration: 'none'}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li className='hide'  onClick={()=>{setMenu("kid")}}><Link to='/kids' style={{textDecoration: 'none'}}>Kids</Link>{menu==="kid"?<hr/>:<></>}</li>
        <li className='hide' ><div className="nav-login-cart">
               <Link to='/login'><button>Login</button></Link>
               <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
               <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </li>
        <li  onClick={()=>{document.querySelector('.sidebar').style.display = 'flex'}} className='menu-icon'><img src={menu_icon} alt="logo" /></li>
      </ul>
    </div>
  )
}

export default Navbar

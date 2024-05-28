import React from 'react'
import logo from '../../assets/img/logo.png'
import edu from '../../assets/img/edu.png'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

  const nav_titles=[{
    path:'/',display:'Home'
  },
  {
    path:'/Services',display:'Services'
  },
  {
    path:'/Courses',display:'Courses'
  },
  {
    path:'/about',display:'About us'
  },
]
  return (
    <header className='header'>
<div className='container'>
<div className='nav-container'>
<div className='logo'>
<div className='logo-img'>
  <img src={edu} alt=""/>

</div>
<h2>Tech World</h2>
</div>

<div className='navigation'>
  <ul className='menu'>
    {
      nav_titles.map((item)=>(
        <li className='nav_item'><Link to={item.path}>{item.display}</Link></li>
      ))
    }

  </ul>
</div>
  
</div>  
</div>  
      
    </header>
  )
}

export default Header
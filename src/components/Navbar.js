import React from 'react'
import { NavLink } from 'react-router-dom'
import css from '../style/Navbar.module.css'

const Navbar = () => {
  return (
    <div className= {css.maincontainer}>
        <div className={css.heading}>Amith</div>
        <div className={css.listitems}>
            <div className={css.item}><NavLink className={css.itemtext} to="/amithajith">{"<Home/>"}</NavLink></div>
            <div className={css.item}><NavLink className={css.itemtext} to="/resume">{"<Resume/>"}</NavLink></div>
            <div className={css.item}><NavLink className={css.itemtext} to="/contact">{"<Contact/>"}</NavLink></div>
        </div>
    </div>
  )
}

export default Navbar
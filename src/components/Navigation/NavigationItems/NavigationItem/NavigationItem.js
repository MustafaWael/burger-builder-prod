import React from 'react'
import classes from './NavigationItem.module.css'
import { NavLink } from 'react-router-dom'

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      exact
      to={props.link}
      activeClassName={classes.Active}
      onClick={props.closeDrawer}
    >
      {props.children}
    </NavLink>
  </li>
)

export default navigationItem

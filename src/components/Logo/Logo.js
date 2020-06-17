import React from 'react'
import classes from './Logo.module.css'
import burgerLogo from '../../assets/images/28.1 burger-logo.png'

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
)

export default logo

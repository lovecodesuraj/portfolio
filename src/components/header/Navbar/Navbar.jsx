import React from 'react'
import {Toolbar, Button} from "@material-ui/core"
import { Link } from 'react-router-dom'
import "./styles.css"

const Navbar = () => {
  return <>
    <Toolbar className='navbar'>
      <Button variant='outlined'>Home</Button>
      <Button variant='outlined'>Projects</Button>
      <Button variant='outlined'>Contact</Button>
    </Toolbar>
  </>
}

export default Navbar
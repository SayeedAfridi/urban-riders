import React from 'react'
import { AppBar, Typography, makeStyles, Toolbar } from '@material-ui/core'
import NavItem from './navitem'

export interface NavbarProps {}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    width: '100vw',
  },
}))

const Navbar: React.FC<NavbarProps> = () => {
  const classes = useStyles()
  return (
    <AppBar color='transparent' position='relative'>
      <Toolbar>
        <Typography variant='h6' noWrap>
          Urban Riders
        </Typography>
        <div className={classes.grow} />
        <NavItem to='/' title='Home' />
        <NavItem to='/dashboard' title='Dashboard' />
        <NavItem to='/login' title='Login' />
        <NavItem to='/signup' title='Signup' />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

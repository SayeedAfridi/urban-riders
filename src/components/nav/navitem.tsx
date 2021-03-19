import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItem, makeStyles } from '@material-ui/core'

export interface NavItemProps {
  title: string
  to: string
}

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.text.primary,
  },
  linkActive: {
    background: theme.palette.primary.main,
    color: 'white',
  },
}))

const NavItem: React.FC<NavItemProps> = ({ title, to }) => {
  const classes = useStyles()
  return (
    <NavLink
      exact
      activeClassName={classes.linkActive}
      className={classes.link}
      to={to}
    >
      <MenuItem>{title}</MenuItem>
    </NavLink>
  )
}

export default NavItem

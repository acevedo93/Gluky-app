import React from 'react'
import { Nav, Link, List } from './styles.js'
import { Logo } from '../Logo'
import { WiAlien } from 'react-icons/wi'
import { GoBell } from 'react-icons/go'
import { MdHome } from 'react-icons/md'
export const NavDesktop = () => (
  <Nav>
    <Logo />
    <List>
      <Link to='/user'><WiAlien size='3rem' /></Link>
      <Link to='/'><MdHome size='2rem' /></Link>
      <Link to='/notifications'><GoBell size='2rem' /></Link>
    </List>
  </Nav>
)

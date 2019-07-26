import React from 'react'
import { Nav, Link } from './styles'
import { MdHome } from 'react-icons/md'
import { WiAlien } from 'react-icons/wi'
import { GoBell } from 'react-icons/go'
export const NavMobile = () => {
  return (
    <Nav>
      <Link to='/my-account'><WiAlien size='50px' /></Link>
      <Link to='/'><MdHome size='32px' /></Link>
      <Link to='/notifications'><GoBell size='30px' /></Link>
    </Nav>
  )
}

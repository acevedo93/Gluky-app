import React from 'react'
import {
  Link, Image, Name
} from './styles'

export const Friend = ({
  name,
  avatar,
  path = '#'
}) => (
  <Link to={path}>
    <Image src={avatar} />
    <Name>{name}</Name>
  </Link>
)

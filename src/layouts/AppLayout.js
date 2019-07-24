import React from 'react'
import { NavDesktop } from '../components/NavDesktop'
import { NavMobile } from '../components/NavMobile'

export const AppLayout = (props) => (
  <div>
    <NavDesktop />

    <NavMobile />
  </div>
)

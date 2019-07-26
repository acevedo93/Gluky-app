import React from 'react'
import { NavDesktop } from '../../components/NavDesktop'
import { NavMobile } from '../../components/NavMobile'
import { ContainerIn } from './styles'

export const AppLayout = (props) => {
  return (
    <div>
      <NavDesktop />
      <ContainerIn >
        { props.children }
      </ContainerIn >
      <NavMobile />
    </div>
  )
}

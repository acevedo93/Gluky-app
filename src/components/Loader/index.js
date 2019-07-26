import React from 'react'
import ReactLoading from 'react-loading'
import { Brand } from '../../styles/brand'
import { Container } from './styles.js'
export const Loader = () => (
  <Container>
    <ReactLoading
      type='cubes'
      color={Brand.colors.tertiary}
    />
  </Container>
)

import styled from 'styled-components'
import { Brand } from '../../styles/brand'
export const Form = styled.form`
  padding: 30px 0;
  margin: 0 auto;
`

export const Input = styled.input`
  border: 1px solid ${Brand.colors.tertiary};
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 8px 4px;
  width: 90%;
  margin-left: 20px;
`

export const Button = styled.button`
  background: ${Brand.colors.primary};
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 90%;
  margin: 0 auto;
  padding: 8px 4px;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  padding: 8px 0;
  padding-left: 20px;
`

export const Error = styled.span`
  font-size: 20px;
  color: red;
  text-align:center;
  width: 40%;

`

import styled from 'styled-components'
import { Brand } from '../../styles/brand'
export const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 90%;
margin: 5% auto;
@media (min-width: 768px) {
    width: 40%;
  }
`
export const Img = styled.img`
  border: 1px solid #ddd;
  border-radius: 5%;
  height: auto;
  height: 4rem;
  width: 4rem;
  margin-bottom: 4%;
  box-shadow: 10px 10px 5px -6px rgba(230,230,230,1);
`

export const Label = styled.p`
  font-size: 20px;

`
export const Input = styled.input`
border: 1px solid ${Brand.colors.tertiary};
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 8px 4px;
  width: 90%;

  ::placeholder {
    color: #000;
  }

`
export const Select = styled.select`
border: 1px solid ${Brand.colors.tertiary};
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 8px 4px;
  width: 90%;
  background:white;

  ::placeholder {
    color: #000;
  }

`
export const Divider = styled.div`
display:flex;

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
  margin-bottom: 2%;
`
export const LogOut = styled.div`
  background: #ff5252;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 90%;
  margin: 0 auto;
  padding: 8px 4px;
  text-align: center;
  margin-bottom: 2%;
`
export const ContainerImages = styled.div`
 display:flex;
`

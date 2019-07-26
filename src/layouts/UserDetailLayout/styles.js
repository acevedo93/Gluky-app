import styled from 'styled-components'
import { Brand } from '../../styles/brand'

export const Container = styled.section`
width: 100%;
display:flex;
margin: 0 auto;

padding-top:2%;
padding-bottom:2%;
justify-content:center;
align-items:center;
background: ${Brand.colors.white};
box-shadow: 10px 10px 5px -6px rgba(230,230,230,1);
  @media (min-width: 768px) {
    width: 50%;
    border-radius: 10px;
    margin-top: 2%;
  }
  `

import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { SelectPum, fadeIn } from '../../styles/animations'
import { Brand } from '../../styles/brand'

export const Container = styled.article`
  display:flex;
  justify-content:center;
  flex-direction:column;
  margin-bottom: 5%;
  border-bottom: ${Brand.colors.grey};
  min-height:300px;
  @media (min-width: 768px) {
   width: 33.3%;
  }
`
export const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 10px;
  padding: 2%;
  ${fadeIn()}
`

export const Title = styled.p`
  font-weight: bold;
  padding-left: 20px;
  ${fadeIn()}
  @media (min-width: 768px) {
    font-size:.6rem;
  }
`
export const IconsWrapper = styled.div`
${fadeIn()}
  display:flex;
  width: 20%;
  justify-content: space-around;
`
export const LikeButton = styled.button`
&.like {
  ${SelectPum()}
}
`

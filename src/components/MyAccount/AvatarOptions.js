import React from 'react'
import { Img, ContainerImages } from './styles'
const images = [
  {
    id: 1,
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Fernando_Botero_%282018%29.jpg'
  },
  {
    id: 2,
    src: 'https://assets.pernod-ricard.com/nz/media_images/test.jpg?hUV74FvXQrWUBk1P2.fBvzoBUmjZ1wct'
  },
  {
    id: 3,
    src: 'https://static.vix.com/es/sites/default/files/styles/1x1/public/btg/curiosidades.batanga.com/files/10-de-los-pintores-y-escultores-mas-influyentes-de-todos-los-tiempos-00.jpg'
  },
  {
    id: 4,
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Fernando_Botero_%282018%29.jpg'
  }
]
export const AvatarOptions = ({ select }) => (
  <ContainerImages>
    {
      images.map(image => <Img src={image.src} key={image.id} onClick={() => select(image.src)} />)
    }
  </ContainerImages>
)

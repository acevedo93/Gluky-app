import React, { useState } from 'react'
import { Link } from '@reach/router'
import { Image, Container, Title, IconsWrapper, LikeButton } from './styles'
import { MdFavoriteBorder, MdFavorite, MdArtTrack } from 'react-icons/md'
// import { ProgressiveLoading } from '../../hooks/ProgressiveLoading'
import { Brand } from '../../styles/brand'
export const Post = ({ data }) => {
  // const [show, element] = ProgressiveLoading()
  const [like, setLike] = useState()

  return (
    <Container >
      <React.Fragment>
        <Link to={`/album/${data.album_id}`}>
          <Image src={data.thumbnail} />
        </Link>
        <IconsWrapper>
          <LikeButton onClick={() => setLike(!like)} className={like ? 'like' : ''}>
            {
              like ? <MdFavorite size='32px' color={Brand.colors.tertiary} />
                : <MdFavoriteBorder size='32px' />
            }
          </LikeButton>
          <MdArtTrack size='32px' />
        </IconsWrapper>
        <Title>{data.title}</Title>
      </React.Fragment>

    </Container>
  )
}

import React from 'react';
import { CardContainer, CardDescription } from '../gifCard/style'

const GifDetailsCard = ({details}) => {

  return(
    <>
      <CardContainer details style={{backgroundImage: `url(${details.images.downsized.url})`}} />
      <CardDescription>
        {details.title}
      </CardDescription>
    </>
  )
}

export default GifDetailsCard;
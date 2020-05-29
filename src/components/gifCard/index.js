import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer } from './style'

const GifCard = ({gifDetails, itemIndex}) => {

  return (
    <Link to={{pathname: '/details', state: itemIndex}}>
      <CardContainer style={{backgroundImage: `url(${gifDetails.images.downsized.url})`}} />
    </Link>
  )
}

export default GifCard;
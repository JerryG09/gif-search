import React from 'react';
import GifCard from '../gifCard';

const GifCardList = ({list = []}) => {
  return (
    <>
      {
        list.map((item, index) => (
          <GifCard gifDetails={item} key={index} itemIndex={index} />
        ))
      }
    </>
  )
}

export default GifCardList;
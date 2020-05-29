import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GifDetailsCard from '../../components/gifDetailsCard';
import { Container, Navigation } from './style'

const back = '/icons/back.svg'

const GifDetail = () => {
  const userGifs = useSelector(({ userReducer }) => userReducer);

  const {
    allRelatedGifs,
  } = userGifs

  let {
    location: { state: gifIndex },
  } = useHistory();
  const history = useHistory();

  const gifData = allRelatedGifs[gifIndex];

  return (
    <Container>
      <GifDetailsCard details={gifData} />
      <Navigation onClick={() => history.goBack()}>
        <div>
          <img src={back} alt="navigation icon" />
        </div>
      </Navigation>
    </Container>
  )
}

export default GifDetail;
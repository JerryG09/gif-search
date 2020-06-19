import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../../components/searchBar';
import GifCardList from '../../components/gifCardList'
import { 
  Container, 
  GifCardsContainer, 
  Header, 
  PaginationContainer 
} from './style';
import { Navigation } from '../gifDetail/style'

import { fetchGifs } from '../../redux/actions/userActions';

const back = '/icons/back.svg'
const right = '/icons/next.svg'

const Home = () => {
  const dispatch = useDispatch();
  const userGifs = useSelector(({ userReducer }) => userReducer);
  
  const {
    allRelatedGifs,
  } = userGifs

  const [values, setValues] = useState({
    searchWord: '',
    gifs: allRelatedGifs ? allRelatedGifs : [],
    offset: 0,
    limit: 20,
    totalCount: 20
  });

  useEffect(() => {
    
  }, [])

  const handleChange = (input) => {
    setValues(prevState => ({
      ...prevState,
      searchWord: input
    }))
  }

  const handlePaginate = async (offset) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${values.searchWord}&api_key=V7f0WU9gpFcnARe0crRhyA7FE2RMRJRX&limit=${values.limit}&offset=${offset * values.limit}`;
    
    try {
      const response = await axios.get(url)
      setValues(prevState => ({
        ...prevState,
        gifs: response.data.data
      }))
      const payload = {
        allRelatedGifs: response.data.data
      }
      dispatch(fetchGifs(payload));
    } catch (error) {
      console.log(error)
    }
  }
  
  const handleSubmit = async (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=V7f0WU9gpFcnARe0crRhyA7FE2RMRJRX&limit=${values.limit}&offset=${values.offset * values.limit}`;
    
    try {
      const response = await axios.get(url)
      setValues(prevState => ({
        ...prevState,
        gifs: response.data.data,
        totalCount: response.data.pagination.total_count
      }))
      const payload = {
        allRelatedGifs: response.data.data
      }
      dispatch(fetchGifs(payload));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header>
        <h3>Gif Search</h3>
      </Header>
      <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
      {
      values.gifs.length >= 1 ? 
        <GifCardsContainer>
          <GifCardList list={values.gifs} />
        </GifCardsContainer>
        : null
      }
      <PaginationContainer>
        <Navigation onClick={() => {
          if (!values.offset) return
          const offset = --values.offset
          setValues(prevState => ({
            ...prevState,
            offset
          }))
          handlePaginate(offset)
        }}>
          <div className="box">
            <img src={back} alt="navigation icon" />
          </div>
      </Navigation>
      <Navigation 
        onClick={() => {
          if (values.offset + values.limit > values.totalCount) return
          const offset = ++values.offset
          setValues(prevState => ({
            ...prevState,
            offset
          }))
          handlePaginate(offset)
        }}
        style={{marginLeft: '1em'}}
      >
        <div className="box">
          <img src={right} alt="navigation icon" />
        </div>
      </Navigation>
      </PaginationContainer>
    </Container>
  )
}

export default Home;
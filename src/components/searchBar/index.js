import React, { useState } from 'react';
import { 
  Input, 
  Button, 
  InputContainer, 
  SearchContainer,  
} from './style'

const SearchBar = ({onSubmit, onChange}) => {
  const [values, setValues] = useState('');

  const handleChange = ({target}) => {
    setValues(target.value)
    onChange(target.value)
  }

  const handleSubmit = () => {
    onSubmit(values)
  }

  return (
    <SearchContainer>
      <InputContainer>
        <Input
          type='text'
          name='search-box'
          placeholder='Describe a GIF'
          onChange={handleChange}
          value={values}
        >
        </Input>
      </InputContainer>

      <Button onClick={handleSubmit}>
        Submit
      </Button>
    </SearchContainer>
  )
}

export default SearchBar;
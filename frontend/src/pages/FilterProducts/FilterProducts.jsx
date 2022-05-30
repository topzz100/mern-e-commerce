import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Products from '../../components/Products/Products'
import { Filter, Heading, Left, Option, Right, Select, Title, Wrapper } from './FilterProducts.styles'

const FilterProducts = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('')

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase()
    })
   
  }
  
  
  return (
    <>
      <NavBar/>
      <Announcement/>
      <Wrapper>
        <Heading>
          {cat}
        </Heading>
        <Filter>
          <Left>
            <Title>
              Filter Products:
            </Title>
            <Select defaultValue='Color' name="color" onChange={handleFilters} >
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
            <Select defaultValue='Size' name= "size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          </Left>
          <Right>
            <Title>
              Filter Products:
            </Title>
            <Select onChange={e => setSort(e.target.value)}>
            <Option value= 'newest'>Newest</Option>
            <Option value = 'asc'>Price (asc)</Option>
            <Option value= 'desc'>Price (desc)</Option>
          </Select>
          </Right>
        </Filter>
        <Products category= {cat} filters ={filters} sort={sort}/>
      </Wrapper>
      
      <Footer/>

    </>
  )
}

export default FilterProducts
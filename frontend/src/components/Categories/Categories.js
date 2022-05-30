import React from 'react'
import {Wrapper } from './Categories.styles'
import { categories } from '../../data'
import Category from '../Category/Category'

const Categories = () => {
  return (
    <>
      <Wrapper>
        { 
          categories.map(cat => {
            return <Category key = {cat.id} category = {cat}/>
          })
        }
      </Wrapper>
    </>
  )
}

export default Categories
import React from 'react'
import { Anons } from '../components/Anons'
import { Categories } from '../components/Categories'
import { Navbar } from '../components/Navbar'
import { Products } from '../components/Products'
import {Slider} from '../components/Slider'

export const Home = () => {
  return (
    <div>
      <Anons/>
      <Navbar/>
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

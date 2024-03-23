import React from 'react'
import hammer from '../hammer.jpg'
import Card from './card'


let desc = "";


const Home = (props) => {
  return (
   <Card image={hammer} title={"Hammer Of Thor"} description={desc}/>
  )
}

export default Home

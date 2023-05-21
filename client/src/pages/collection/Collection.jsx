import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import TopBanner from '../../components/topbanner/TopBanner'
import Allproducts from '../../components/products/allprod/Allproducts'

import Metadata from '../../Rconfig/Metadata'

// import videoforban from '../../assets/mclaren01.mp4'

const Collection = () => {
  return (
    <>
    <Metadata title={"COLLECTION --mclaren"} />
      <Navbar/>
      <TopBanner hedfortb={"Collection"} srcfortb={"https://mclaren.scene7.com/is/content/mclaren/765LT_Spider_hero_loop-0x720-3000k"}/>
      <Allproducts />
      <Footer/>
    </>
  )
}

export default Collection

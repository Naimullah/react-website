import { Button } from 'bootstrap'

import React from 'react'


import 'swiper/css'
import LatestProduct from './common/LatestProduct';
import FeaturedProduct from './common/FeaturedProduct';
import Hero from './common/Hero';
import Layout from './common/Layout';
const Home=()=>{
    return(
        <>
        <Layout>
            <Hero /> 
            <LatestProduct />
            <FeaturedProduct />
        </Layout>
      
        </>
    )
}
export default Home
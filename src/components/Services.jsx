import React from 'react'
import Image from './Image'
import Text from './Text'
import Imagetext from './Imagetext'

import eggimgMobile from '../assets/mobile/image-transform.jpg'
import eggimgDesktop from '../assets/desktop/image-transform.jpg'
import glassimgMobile from '../assets/mobile/image-stand-out.jpg'
import glassimgDesktop from '../assets/desktop/image-stand-out.jpg'
import graphicdesingMobile from '../assets/mobile/image-graphic-design.jpg'
import graphicdesingDesktop from '../assets/desktop/image-graphic-design.jpg'
import photographyMobile from '../assets/mobile/image-photography.jpg'
import photographyDesktop from '../assets/desktop/image-photography.jpg'

function Services() {
  return (
    <section className=' tablet:grid tablet:grid-cols-2  '>
      < Image 
        order='order-2'
        imgMobile={eggimgMobile}
        imgDesktop={eggimgDesktop}
      />
      <Text 
        order='order-1'
        title='Transform your brand'
        text='We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you.'
        color='bg-Yellow'
      />
      < Image 
        order='order-3'
        imgMobile={glassimgMobile}
        imgDesktop={glassimgDesktop}
      />
        <Text 
        order='order-4'
        title='Stand out to the right audience'
        text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
        color='bg-Soft-red'
      />

      <Imagetext 
        order ='order-5'
        imgMobile = {graphicdesingMobile}
        imgDesktop = {graphicdesingDesktop}
        title ='Graphic design'
        text ='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
      />

      <Imagetext 
        order ='order-6'
        imgMobile = {photographyMobile}
        imgDesktop = {photographyDesktop}
        title ='Photography'
        text ='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
      />
    </section>
  )
}

export default Services

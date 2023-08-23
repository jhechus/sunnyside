import React from 'react'
import Testimonial from './Testimonial'
import emilyphoto from '../assets/image-emily.jpg'
import jenniephoto from '../assets/image-jennie.jpg'
import thomasphoto from '../assets/image-thomas.jpg'

export default function Testimonialcontainer() {
  return (
    <section className=' bg-white pt-4 '>
      <h2 className=' text-center uppercase mb-6 text-Grayish-blue'> Client testimoials </h2>
      <div className=' lg:flex lg:w-[900px] lg:mx-auto xl:w-[1110px]'>
        <Testimonial
            img = {emilyphoto}
            testimonial = 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
            name = 'Emily R.'
            position = 'Marketing Director'
        />
        <Testimonial
            img = {thomasphoto}
            testimonial = 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
            name = 'Thomas S.'
            position = 'Chief Operating Officer'
        />
        <Testimonial
            img = {jenniephoto}
            testimonial = 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
            name = 'Jennie F.'
            position = 'Business Owner'
        />
      </div>
    </section>
  )
}

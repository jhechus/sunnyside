import React from 'react'

export default function Testimonial({img, testimonial, name, position}) {
  return (
    <div className='flex flex-col items-center text-center mb-10'>
      <img className=' w-[72px] rounded-full ' src={img} alt="phototestimonial" />
      <p className=' my-3 text-Very-dark-grayish-blue px-4 max-w-[400px]'>{testimonial}</p>
      <h3 className=' text-[18px] text-Very-dark-desaturated-blue'>{name}</h3>
      <p className=' text-Grayish-blue text-[14px]'>{position}</p>
    </div>
  )
}

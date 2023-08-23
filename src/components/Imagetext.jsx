import React from 'react'

export default function Imagetext({order, imgMobile, imgDesktop, title, text}) {
  return (
    <div className={`${order} relative pt-[398px]  sm:pt-[340px] tablet:pt-[170px] lg:pt-[270px] desktop:pt-[400px]`}>
      <picture className=' absolute top-0 z-[-1]'>
         <source  media='(max-width:639px)' srcSet={imgMobile} />
         <source  media='(min-width:640px)' srcSet={imgDesktop} />
         <img src={imgMobile} alt="Servicesimg" />
      </picture>
      <h2 className=' text-center text-[28px] text-Very-dark-desaturated-blue mb-7'>{title}</h2>
      <p className=' text-center text-Dark-desaturated-cyan mx-3 mb-[60px] px-6 tablet:text-sm lg:w-[400px] lg:mx-auto'>{text}</p>
    </div>
  )
}

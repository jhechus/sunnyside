import React from 'react'

export default function Text({order, title, text, color}) {
  return (
    <div className={`${order} text-center h-[300px] flex flex-col place-content-around py-5 tablet:h-auto lg:py-[100px] lg:px-[75px] desktop:text-left desktop:pl-[120px] desktop:py-[140px] desktop:pr-[105px]`}>
      <h2 className=' text-[2rem] font-black tablet:text-[1.25rem] lg:text-[2.5rem] desktop:leading-tight'>{title}</h2>
      <p className=' text-Dark-grayish-blue text-[1.125rem] leading-[1.8rem] px-6 tablet:text-[0.8rem] tablet:leading-[1.5rem] lg:text-[18px] desktop:px-0 '>{text}</p>
      <div className=' relative'>
        <button className=' uppercase lg:text-2xl'> Learn more </button>
        <div className={`w-[137px] h-[10px] ${color} rounded-full absolute right-0 left-0 mx-auto bg-opacity-25 desktop:mx-0`}></div>
      </div>
    </div>
  )
}
 
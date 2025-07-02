import React from 'react'

const Card = ({data}) => {
  return (
    <div className='w-[190px] h-[180px] pt-7 pl-5 relative rounded-2xl bg-[#242e24]'>
      <img src={data.dotIcon} alt="threeDot" className='absolute top-4 right-4 w-[7px]'/>
      <div className={`rounded-full ${data.color} text-white`}>
      <img src={data.icon} alt="icon" className='w-[30px]'/>
      </div>
      <div>
        <p className='text-[32px] font-[700]'>{data.price}</p>
        <p className='w-[1px] leading-5'>{data.text}</p>
      </div>
    </div>
  )
}

export default Card



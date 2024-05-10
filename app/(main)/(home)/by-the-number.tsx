import React from 'react'

const ByTheNumbers = () => {
  return (
    <div className='bg-[#272E5C] py-16'>
        <div className='max-w-[1080px] w-11/12 mx-auto text-white'>
            <p className='text-4xl text-center'>By the number</p>
            <div className='grid lg:grid-cols-3 gap-4 grid-cols-1 mt-10'>
                <div className='lg:border-r flex flex-col items-center justify-center border-white px-24 py-2'>
                    <p className='font-semibold text-5xl'>15<span className='text-[#465ce6]'>+</span></p>
                    <p className='text-2xl text-center'>Solutions for Global crises</p>
                </div>
                <div className='lg:border-r flex flex-col items-center justify-center border-white px-24 py-2'>
                    <p className='font-semibold text-5xl'>10<span className='text-[#465ce6]'>+</span></p>
                    <p className='text-2xl text-center'>University Collaborations</p>
                </div>
                <div className='px-24 flex flex-col items-center justify-center py-2'>
                    <p className='font-semibold  text-5xl'>25<span className='text-[#465ce6]'>+</span></p>
                    <p className='text-2xl text-center'>Employees Worldwide</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ByTheNumbers
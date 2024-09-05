import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto bg-[#3B1814] text-[#FEFFF5] relative bottom-0 '>
         <div className='w-full flex justify-center py-[3vw] '>
         <h1 className='capitalize'>pixelforge studio</h1></div>
        <div className='w-full h-full flex justify-evenly py-[3vw] px-[2vw] '>
           
            <div className='w-1/3 h-2/3 text-[#FEFFF5]'>
            <h3 className='capitalize'>follow us</h3>
            <div className='text-sm flex flex-col gap-[1vw] mt-[1vw] font-["butler"] '>
                <h4>instagram</h4>
                <h4>facebook</h4>
                <h4>pinterest</h4>
            </div>
            </div>
            <div className='w-1/3 h-2/3 text-[#FEFFF5]'>
            <h3 className='capitalize'>contact us</h3>
            <div className='text-sm flex flex-col gap-[1vw] mt-[1vw] font-["butler"] '>
                <h4>info@mysite.com</h4>
                <h4>123-456-7890</h4>
            </div>
            </div>

            <div className='w-1/3 h-2/3 text-[#FEFFF5]'>
            <h3 className='capitalize'>address</h3>
            <div className='text-sm flex flex-col gap-[1vw] mt-[1vw] font-["butler"] '>
                <h4>500 terry francine street</h4>
                <h4>san francisco, CA</h4>
                <h4>94156</h4>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
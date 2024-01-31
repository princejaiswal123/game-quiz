import React from 'react'
import abc from "../../images/image 2.svg"

const CompletedQuizmodal = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#041325] fixed top-0 left-0  flex justify-center items-center z-50">
    <div className="lg:w-[70%] md:w-[60%] sm:w-[70%] w-[90%] h-auto bg-[white] rounded-xl font-poppins md:px-10 sm:px-5 px-5 md:py-10 sm:py-5 py-5 flex flex-col md:gap-10 gap-5">
       {/* <div className='flex items-center justify-between text-xl font-semibold'>
        <p className='text-[#474444]'>01/04</p>
        <p className='text-[#d60000]'>00:10s</p>

       </div> */}
       <div className='flex flex-col gap-7'>
        <h1 className='text-[#474444] md:text-2xl text-xl font-semibold text-center'>Congrats Quiz is completed</h1>
        <div className='flex justify-center'>
          {/* {
              [1,3,4,5].map((item,idx)=>{
                return <div className='bg-[#f0f0f0] py-4 text-center rounded-md text-base font-semibold'>Option 1</div>
              })
          } */}
          <img src={abc} alt='img'/> 
        </div>
       </div>
     
        <div className='flex items-center justify-center md:gap-x-10 gap-2 '>
            <h5 className=' py-2 rounded-lg md:text-2xl text-xl text-[#474444] font-semibold '>Your Score is <span className='text-[#60b84b]'>03/04</span></h5>
        </div>
        </div>
</div>
  )
}

export default CompletedQuizmodal
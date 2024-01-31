import React from 'react'

const QuizInterFaceModal = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#041325] fixed top-0 left-0  flex justify-center items-center z-50">
    <div className="lg:w-[70%] md:w-[60%] sm:w-[70%] w-[90%] h-auto bg-[white] rounded-xl font-poppins md:px-10 sm:px-5 px-5 md:py-10 sm:py-5 py-5 flex flex-col md:gap-10 gap-5">
       <div className='flex items-center justify-between md:text-xl text-base font-semibold'>
        <p className='text-[#474444]'>01/04</p>
        <p className='text-[#d60000]'>00:10s</p>

       </div>
       <div className='flex flex-col gap-7'>
        <h1 className='text-[#474444] md:text-2xl text-lg font-semibold'>Your question text comes here, its a sample text.</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-x-8 md:gap-y-8 gap-y-4'>
          {
              [1,3,4,5].map((item,idx)=>{
                return <div className='bg-[#f0f0f0] md:py-4 py-3 text-center rounded-md mdtext-base text-sm font-semibold'>Option 1</div>
              })
          }
        </div>
       </div>
     
        <div className='flex items-center justify-center md:gap-x-10 gap-2'>
            <button className='sm:w-[40%] w-[100%] py-2 rounded-lg md:text-base text-sm bg-[#60b84b] font-semibold text-white'>Next</button>
        </div>
        </div>
</div>
  )
}

export default QuizInterFaceModal
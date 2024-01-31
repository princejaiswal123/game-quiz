import React from 'react'
import "./DashBoard.css"
import eye from "../../../images/Group (2).svg"

const DashBoard = () => {
  return (
    <div className='w-[100%] bg-[#EDEDED] px-20 h-[100%]'>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-20'>
        <div className=' flex flex-col gap-2 bg-white rounded-md text-center p-6 text-[#ff5d01] text-2xl font-poppins font-semibold'>
          <div className=' flex gap-5 items-end justify-center '>
            <span className=' text-5xl  font-bold '>12</span>
            Quiz
          </div>
          <div className="">Created</div>
        </div>
        <div className=' flex flex-col gap-2 bg-white rounded-md text-center p-6 text-[#60b84b] text-2xl font-poppins font-semibold'>
          <div className=' flex gap-5 items-end justify-center '>
            <span className=' text-5xl  font-bold '>110</span>
            questions
          </div>
          <div className="">Created</div>
        </div>
        <div className=' flex flex-col gap-2 bg-white rounded-md text-center p-6 text-[#5076ff] text-2xl font-poppins font-semibold'>
          <div className=' flex gap-5 items-end justify-center '>
            <span className=' text-5xl  font-bold '>12</span>
            Total
          </div>
          <div className="">Impressions</div>
        </div>
      </div>
      <div>
        <h1 className=' text-4xl  font-bold text-[#474444] '>
          Trending Quizs
        </h1>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10 my-10'>
         {
          [1,2,3,4,5,6,7].map((item,idx)=>{
            return  <div key={idx} className='rounded-md bg-white px-3 py-3 flex flex-col gap-2'>
            <div className='flex justify-between'><h3 className=' text-xl  font-bold text-[#474444]'>Quiz 1</h3>
              <div className='text-[#ff5d01] flex gap-2 items-center font-bold'>
                <p>667</p>
                <img src={eye} alt='eye' />
              </div></div>
            <div className='text-[#60b84b] font-semibold'>Created on : 04 Sep, 2023</div>
          </div>
          })
         }
        </div>
      </div>
    </div>
  )
}

export default DashBoard
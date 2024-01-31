
import React from 'react'
import { useState } from 'react'
import AddQuestionModal from "./AddQuestionModal"

const QuizTypeModal = ({setIsCreateQuiz}) => {
    const [isAddQuestions,setIsAddQuestions]=useState(false)
    return (
        <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.7)] fixed top-0 left-0  flex justify-center items-center z-50">
            <div className="lg:w-[40%] md:w-[60%] sm:w-[70%] w-[90%] h-auto bg-[white] rounded-xl font-poppins md:px-10 sm:px-5 px-5 md:py-10 sm:py-5 py-5 flex flex-col md:gap-10 gap-5">
               
              <div className='flex flex-col gap-6 w-full'>
              <div className=' w-full'>
               <input className='cancel-button md:py-3 py-2 rounded-md px-4 w-[100%]'
                placeholder='Quiz name '
               />
               </div>
                   
                <div className='flex items-center justify-between md:gap-x-10 gap-2 font-semibold  md:text-base text-sm'>
                <h4 className='w-1/3 text-[#9f9f9f]   '>Quiz Type</h4>
                    <button className='w-1/3  py-2 rounded-lg text-white  bg-[#60b84b] '>Q & A</button>
                    <button className='w-1/3 cancel-button py-2 rounded-lg  text-[#9f9f9f] '>Poll Type</button>
                </div>
              </div>
                <div className='flex items-center justify-center md:gap-x-10 gap-2'>
                    <button onClick={()=>{setIsCreateQuiz(false)}} className=' cancel-button w-[50%] py-2 rounded-lg text-[#474444] md:text-base text-sm font-semibold'>Cancel</button>
                    <button onClick={()=>{
                        setIsAddQuestions(true)
                        // setIsCreateQuiz(false)
                    }} className='w-[50%] py-2 rounded-lg md:text-base text-sm bg-[#60b84b] font-semibold text-white'>Continue</button>
                </div>
                </div>
             
                {isAddQuestions&&<AddQuestionModal setIsAddQuestions={setIsAddQuestions}/>}
        </div>
    )
}

export default QuizTypeModal
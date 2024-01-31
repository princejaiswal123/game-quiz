import React, { useState } from 'react'
import "./Sidebar.css"
import { NavLink, useNavigate } from 'react-router-dom'
import QuizTypeModal from '../../Modals/QuizTypeModal'

const Sidebar = () => {
  const navigate = useNavigate()
  const [isCreateQuiz,setIsCreateQuiz]=useState(false)
  return (
    <div className='w-[100%] min-h-[100vh] px-3 flex flex-col justify-between'>
        <p className='font-jomhuria text-[70px] w-full text-center text-[#474444] '>QUIZZIE</p>
      <div className='font-poppins  gap-8 flex flex-col text-[#474444] '>
        <NavLink to={"/dashboard"}>
        <h3  
      className={` text-base font-semibold text-center py-2.5 rounded-md cursor-pointer 
      ${window.location.pathname === "/dashboard" && "box-shadow"}`}>Dashboard</h3>
        </NavLink>
     
   <NavLink to={"/analytics"}>
   <h3 
        className={` text-base font-semibold text-center py-2.5 rounded-md cursor-pointer 
        ${window.location.pathname === "/analytics" && "box-shadow"} ${window.location.pathname === "/single-analytics" && "box-shadow"}  `}>Analytics</h3>
   </NavLink>
      <button onClick={()=>{setIsCreateQuiz(true)}} className=' text-base font-semibold text-center py-2 rounded-md '>Create Quiz</button>
      </div>
      <div>
        <button onClick={()=>{navigate("/")}} className='text-base font-poppins font-bold text-[#474444]  py-4 border-t border-t-[black] w-full text-center ' >
          Logout</button>
      </div>
      {isCreateQuiz&&<QuizTypeModal setIsCreateQuiz={setIsCreateQuiz}/>}
    </div>
  )
}

export default Sidebar
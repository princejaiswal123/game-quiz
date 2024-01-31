import React from 'react'
import "./MainDashBoard.css"
import Sidebar from './Sidebar/Sidebar'
import DashBoard from './DashboardPage/DashBoard'
import QuizAnalysis from './AnalyticsComponents/QuizAnalysis'
import SingleQuizAnalysis from './AnalyticsComponents/SingleQuizAnalysis'
import QuizInterFaceModal from '../Modals/QuizInterFaceModal'

const MainDashBoard = ({ children }) => {
  return (
    <div className='flex w-[100%] h-full'>
        <div className='xl:w-[20%] md:w-[30%] w-[40%]  h-[100%]'>
        <Sidebar/>
        </div>
       <div className='xl:w-[80%] md:w-[70%] w-[60%] h-auto '>
        {/* <DashBoard/> */}
        {/* <QuizAnalysis/> */}
        {/* <SingleQuizAnalysis/> */}
        {/* <QuizInterFaceModal/> */}
        {children}
        </div>
    </div>
  )
}

export default MainDashBoard
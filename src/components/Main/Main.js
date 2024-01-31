import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../DashBoardComponents/DashboardPage/DashBoard'
import Login from '../Login/Login'
import QuizAnalysis from '../DashBoardComponents/AnalyticsComponents/QuizAnalysis'
import MainDashBoard from '../DashBoardComponents/MainDashBoard'
import SingleQuizAnalysis from '../DashBoardComponents/AnalyticsComponents/SingleQuizAnalysis'

const Main = () => {
    const DashboardComps = [
        {
          path: "/dashboard",
          comp: <DashBoard/>
        },
        
        {
          path: "/analytics",
          comp: <QuizAnalysis />
        },
        {
          path: "/single-analytics",
          comp: <SingleQuizAnalysis />
        },
        // {
        //   path: "/settings",
        //   comp: <Settings />
        // },
        // {
        //   path: "/meetings",
        //   comp: <Meetings />
        // }
      ]
      const nonDashboardComps = [
        // {
        //   path: "/upload",
        //   comp: <Process />
        // },
        // {
        //   path: "/signup",
        //   comp: <SignUp />
        // },
        // {
        //   path: "/login",
        //   comp: <Login />
        // }
        {
          path: "/",
          comp: <Login />
        },
      ]
  return (
    <div>
        <Routes>
        {nonDashboardComps.map((x, idx) => {
            return <Route
              key={idx}
              path={x.path}
              element={
             <div>{x.comp}</div>
                // <Protected>
                //   <Layout>{x.comp}</Layout>
                // </Protected>
              }
            />
          })} 
        {DashboardComps.map((x, idx) => {
            return <Route
              key={idx}
              path={x.path}
              element={
                <MainDashBoard>{x.comp}</MainDashBoard>
                // <Protected>
                //   <Layout>{x.comp}</Layout>
                // </Protected>
              }
            />
          })} 
           {/* <Route path="/" element={ <Login/> } /> */}
        </Routes>
    </div>
  )
}

export default Main
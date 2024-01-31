import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import DeleteAnalysisModal from '../../Modals/DeleteAnalysisModal';
import { NavLink } from 'react-router-dom';

const QuizAnalysis = () => {
  const [isDelete,setIsDelete]=useState(false)
  return (
    <div className='w-[100%] bg-[#EDEDED] px-20 h-[100%] font-poppins'>
        <h1 className='text-[#5076ff] text-5xl text-center font-bold py-20 '>Quiz Analysis</h1>
    {/* <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-20'>
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
    </div> */}
    <div>
    
  
      {/* <div  className='rounded-md grid grid-flow-col  py-3  gap-2'>
         <p className=' border border-[red]'>S no</p>
         <p className=' border border-[red]'>Quiz name </p>
         <p className=' border border-[red]'>crested on </p>
         <p className=' border border-[red]'>Impression</p>
         <p className=' border border-[red]'>Quiz 1 </p>
         <p className=' border border-[red]'>Quiz 1 </p>
         <p className=' border border-[red]'>Quiz 1 </p>
         <p className='col-span-2 border border-[red]'>Question Wise Analysis</p>
        </div> */}
       {/* {
        [1,2,3,4,5,6,7].map((item,idx)=>{
          return  <div key={idx} className='rounded-md grid grid-flow-col  px-3 py-3  gap-2'>
         <p className=' border border-[red]'>1</p>
         <p className=' border border-[red]'>Quiz 1 </p>
         <p className=' border border-[red]'>on 01 Sep, 2023</p>
         <p className=' border border-[red]'>345</p>
         <p className=' border border-[red]'>Quiz 1 </p>
         <p className=' border border-[red]'>Quiz 1 </p>
         <p className=' border border-[red]'>Quiz 1 </p>
         <p className='col-span-2 border border-[red]'>Question Wise Analysis</p>
        </div>
        })
       } */}
       <div  className='rounded-md flex px-3 py-3  gap-2 w-full text-white text-base font-bold bg-[#5076ff]'>
         <p className='  w-[5%]'>S no.</p>
         <p className='  w-[10%]'>Quiz Name</p>
         <p className='  w-[20%]'>Created on</p>
         <p className='  w-[10%]'>Impressions</p>
         <p className='   w-[5%]'> </p>
         <p className='   w-[5%]'> </p>
         <p className='   w-[5%]'> </p>
         <p className='col-span-2   w-[40%]'></p>
        </div>
       
        {
        [1,2,3,4,5,6,7].map((item,idx)=>{
          return  <div key={idx} className={`rounded-md ${(idx+1)%2===0&&"bg-[#b3c3ff]"} flex px-3 py-3  gap-2 text-base font-bold `}>
         <p className='  w-[5%]'>1</p>
         <p className='  w-[10%]'>Quiz 1 </p>
         <p className='  w-[20%]'>on 01 Sep, 2023</p>
         <p className='  w-[10%]'>345</p>
         <p className='   w-[5%] flex items-center justify-center'><FaRegEdit className='text-xl text-[#854cff]'/></p>
         <p onClick={()=>{setIsDelete(true)}} className=' cursor-pointer  w-[5%] flex items-center justify-center'><RiDeleteBin6Line className='text-xl text-[#d60000]'/> </p>
         <p className='   w-[5%] flex items-center justify-center text-[#60b84b]'><IoShareSocialOutline className='text-xl text-[#60b84b]'/></p>
        <NavLink to={"/single-analytics"} className={`w-[40%]`}>
         <p className='col-span-2   w-[100%]'>Question Wise Analysis</p>

        </NavLink>
        </div>
        })
       }

    </div>
{isDelete&&<DeleteAnalysisModal setIsDelete={setIsDelete}/>}
    
  </div>
  )
}

export default QuizAnalysis

// import React from 'react';

// const QuizAnalysis = () => {
//   return (
//     <div className="Dashboard_subContainer__k+h33">
//       <div className="Dashboard_analyticsScreen__Y3Mwp">
//         <h1 className="Dashboard_analyticsHeading__uT3Da">Quiz Analytics</h1>
//         <table className="Dashboard_analyticsTable__T4MBV">
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Quiz Name</th>
//               <th>Created on</th>
//               <th>Impression</th>
//               <th></th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>abc</td>
//               <td>1/16/2024</td>
//               <td>0</td>
//               <td>
//                 <img src="/static/media/edit-icon.6d02606fe75f22c4c2b803e184038aa3.svg" alt="abc" />
//                 <img src="/static/media/delete-icon.79553559426285fa2470dec136413952.svg" alt="abc" />
//                 <img src="/static/media/share-icon.27ce9cc4056d35e980b4dcbf26c4cb4b.svg" alt="abc" />
//               </td>
//               <td style={{ cursor: 'pointer', textDecoration: 'underline' }}>Question Wise Analysis</td>
//             </tr>
//             {/* Add other rows as needed */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default QuizAnalysis;

// import React from 'react';

// const QuizAnalysis = () => {
//   return (
//     <div className="Dashboard_subContainer__k+h33">
//       <div className="Dashboard_analyticsScreen__Y3Mwp">
//         <h1 className="Dashboard_analyticsHeading__uT3Da">Quiz Analytics</h1>
//         <table className="Dashboard_analyticsTable__T4MBV border border-[red] w-full">
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Quiz Name</th>
//               <th>Created on</th>
//               <th>Impression</th>
//               <th>Actions</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>abc</td>
//               <td>1/16/2024</td>
//               <td>0</td>
//               <td>
//                 <div className="action-icons flex">
//                   <img src="/static/media/edit-icon.6d02606fe75f22c4c2b803e184038aa3.svg" alt="gh" />
//                   <img src="/static/media/delete-icon.79553559426285fa2470dec136413952.svg" alt="vb" />
//                   <img src="/static/media/share-icon.27ce9cc4056d35e980b4dcbf26c4cb4b.svg" alt="vb" />
//                 </div>
//               </td>
//               <td style={{ cursor: 'pointer', textDecoration: 'underline' }}>Question Wise Analysis</td>
//             </tr>
//             {/* Add other rows as needed */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default QuizAnalysis;


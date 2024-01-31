import React from 'react'

const DeleteAnalysisModal = ({setIsDelete}) => {
    return (
        <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.7)] fixed top-0 left-0  flex justify-center items-center z-50">
            <div className="lg:w-[40%] md:w-[60%] w-[90%] h-auto bg-[white] rounded-xl font-poppins md:px-10 px-3 md:py-10 py-5 flex flex-col md:gap-10 gap-5">
                <h1 className='text-[#474444] md:text-2xl text-lg font-semibold text-center'>
                    Are you confirm you want to delete ?
                </h1>
                <div className='flex items-center justify-center md:gap-x-10 gap-2'>
                    <button className='bg-[#ff4b4b] w-[50%] py-2 rounded-lg text-white md:text-base text-sm font-semibold'>Confirm Delete</button>
                    <button onClick={()=>{setIsDelete(false)}} className='w-[50%] cancel-button py-2 rounded-lg md:text-base text-sm'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAnalysisModal
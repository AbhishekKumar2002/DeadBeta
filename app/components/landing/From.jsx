import React from 'react'



const From = () => {
  return (
    <div className='flex flex-col container items-center justify-between bg-slate-300 border-double  rounded-3xl'>
        <div className="flex items-center justify-between gap-2 md:mt-8">
          <label htmlFor="">From</label>
          <input type="text" placeholder='From' className='' />
      </div>
    </div>
  )
}

export default From

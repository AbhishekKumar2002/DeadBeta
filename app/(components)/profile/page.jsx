"use client"
import { BackgroundGradient } from '@/components/ui/background-gradient'
import Image from 'next/image'
import React from 'react'



const page = () => {
  return (
    <div className='overflow-y-scroll bg-[#fafafa] text-[#231f20] dark:bg-[#131313] dark:text-slate-100 dark:[color-scheme:dark]'>
        <div className='flex flex-col mt-28 justify justify-center items-center'>
        <BackgroundGradient className="flex flex-col rounded-2xl  w-full bg-slate-300 dark:bg-zinc-900 ">
            <Image src = "/images/itachi.jpg" width={200} height={200} className='h-[20rem] w-[20rem] rounded-2xl'/>
            </BackgroundGradient>
            <br /><br />
        </div>

        <div className='flex flex-col justify-center'>
            <h1 className='text-center font-extrabold'>
                Abhishek Kumar
            </h1>
            <br />
            

            <h1 className='text-center font-extrabold'>
                Username
            </h1>
            <br />

            <h1 className='text-center font-extrabold'>
                Date Joined
            </h1>
            <br />

            <h1 className='text-center font-extrabold'>
                
            </h1>
            <br />

        </div>

    </div>
  )
}

export default page
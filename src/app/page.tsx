import React from 'react'
import Navbar from './component/Navbar.tsx/page'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="md:container md:mx-auto md:px-20 py-20 bg-[#C2EFD4]">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-col-1 xs:grid-cols-1">
        <div>
          <h1 className="text-[64px] text-[#224F34] font-bold w-10/12 leading-normal ">
          Discover and Find Your Own Fashion!
          </h1>
          <p className='text-[#267D49] font-medium text-2xl w-11/12 leading-10 py-5'>
          Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
          </p>
          <Button variant="default" className='my-10 py-5 w-[258px] text-xl'>Explore Now</Button>
        </div>
        <div> 
          <Image 
            src="assets/img/Mask.svg"
            alt='hero-img'
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
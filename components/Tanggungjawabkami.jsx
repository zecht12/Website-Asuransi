import React from 'react'
import Image from 'next/image'
import Kesehatan from '../public/assets/um.jpg'

export default function Tanggungjawabkami () {
  return (
    <div className='h-full w-full'>
        <div className='h-auto w-auto px-12'>
            <div className='grid md:grid-cols-2 gap-4 py-28'>
                <div>
                    <Image src={Kesehatan}/>
                </div>
                <div>
                    <div>
                        <span className='text-4xl font-bold'>Tanggung jawab Kami</span>
                    </div>
                    <div className='pt-4'>
                        <span className='text-2xl'>Perusahaan kami berkomitmen dalam membangun Indonesia melalui program sosial pada bidang pendidikan, kesehatan, dan pemberdayaan masyarakat.</span>
                    </div>
                    <div className='pt-12 pb-8'>
                        <span className='text-2xl'>Prinsip kami:</span>
                    </div>
                    <div className='pt-6'>
                        <span className='text-2xl'>1. Melayani masyarakat yang membutuhkan.</span>
                    </div>
                    <div className='pt-6'>
                        <span className='text-2xl'>2. Melayani hingga tuntas.</span>
                    </div>
                    <div className='pt-6'>
                        <span className='text-2xl'>3. Melayani secara adil dan tanpa pandang apapun.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


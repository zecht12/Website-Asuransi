import React from 'react'
import Image from 'next/image'
import Kesehatan from '../public/assets/um.jpg'

export default function Kebijakankami () {
  return (
    <div className='h-full w-full'>
        <div className='h-auto w-auto px-12'>
            <div className='grid md:grid-cols-2 gap-4 py-28'>
                <div>
                    <Image src={Kesehatan}/>
                </div>
                <div>
                    <div>
                        <span className='md:text-4xl text-xl font-bold'>Kebijakan Kami</span>
                    </div>
                    <div className='pt-12'>
                        <span className='md:text-2xl text-lg'>1. Kami menolak suap dalam bentuk apapun.</span>
                    </div>
                    <div className='pt-6'>
                        <span className='md:text-2xl text-lg'>2. Reformasi bertahap secara konstan.</span>
                    </div>
                    <div className='pt-6'>
                        <span className='md:text-2xl text-lg'>3. Pengelolaan tataan perusahaan yang baik dan benar.</span>
                    </div>
                    <div className='pt-6'>
                        <span className='md:text-2xl text-lg'>4. Pemaparan hasil secara adil dan tanpa rekayasa.</span>
                    </div>
                    <div className='pt-6'>
                        <span className='md:text-2xl text-lg'>5. Tolak adanya penyiksaan dan kemerataan hak baik untuk karyawan maupun manager.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
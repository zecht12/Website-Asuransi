import React from 'react'
import Image from 'next/image'
import Keluarga from '../public/assets/uhh.jpg'

export default function Mitrabisnis () {
  return (
    <div className='h-full w-full'>
        <div className="h-auto w-auto">
            <div className='md:text-4xl text-xl text-center font-bold pt-28'>
                Mitra Bisnis Kami
            </div>
            <div className="grid md:grid-cols-2 gap-56">
                <div>
                    <div className='md:text-xl text-base text-center font-bold pt-12 pr-32'>
                        Mitra Bisnis Kami
                    </div>
                    <div className='pt-4 pl-16 px-16'>
                        <span className='text-lg'>1. BCA.</span>
                    </div>
                    <div className='pt-4 pl-16 px-16'>
                        <span className='text-lg'>2. BRI.</span>
                    </div>
                    <div className='pt-4 pl-16 px-16'>
                        <span className='text-lg'>3. HALODOC.</span>
                    </div>
                    <div className='pt-4 pl-16 px-16'>
                        <span className='text-lg'>4. PEDULI LINDUNGI.</span>
                    </div>
                </div>
                <div >
                    <div className='md:text-xl text-base text-center font-bold pt-12'>
                        Kinerja kami selama bersama mitra bisnis
                    </div>
                    <div className='pt-4 pl-16 px-16'>
                        <span className='text-lg'>1. Membantu korban bencana aceh.</span>
                    </div>
                    <div className='pt-4 pl-16 px-16'>
                        <span className='text-lg'>2. Sumbangan ke panti asuhan.</span>
                    </div>
                    <div className='pt-4 pl-16 px-16'>
                        <span className='text-lg'>3. Membantu pengungsi korban bencana merapi.</span>
                    </div>
                </div>
            </div>
            <div className='md:text-4xl text-xl text-center font-bold pt-12'>
                Potret kebersamaan kami bersama mitra bisnis
            </div>
            <div className='grid md:grid-cols-2 pt-4 pb-24 px-10'>
                <div className=' rounded-3xl justify-center items-center text-center shadow-lg shadow-gray-400 p-6'>
                    <Image src={Keluarga} height={675} width={1200}/>
                </div>
                <div className=' rounded-3xl justify-center items-center text-center shadow-lg shadow-gray-400 p-6'>
                    <Image src={Keluarga} height={675} width={1200}/>
                </div>
            </div>
        </div>
    </div>
  )
}
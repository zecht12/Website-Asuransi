import React from 'react'
import Link from 'next/link'


export default function Hubungikami () {
  return (
    <div className='h-full w-full'>
        <div className='h-auto w-auto'>
        <div className='pt-28 pb-12 text-center'>
                <span className='md:text-4xl text-xl font-bold'>Hubungi kami</span>
            </div>
            <div className='grid md:grid-cols-2 md:gap-96 gap-8 pt-12 px-12'>
                <div>
                    <div>
                        <span className='md:text-2xl text-lg font-bold'>Instagram dibawah ini</span>
                    </div>
                    <div className='pt-6'>
                        <span className='md:text-2xl text-lg'>@PT.XXXXXX.co.id/@XXXXX.indo</span>
                    </div>
                    <div className='pt-10'>
                        <span className='md:text-2xl text-lg font-bold'>Facebook</span>
                    </div>
                    <div className='pt-6'>
                        <span className='md:text-2xl text-lg'>XXXXX.indo</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className='md:text-2xl text-lg font-bold'>Whatsapp dibawah ini</span>
                    </div>
                    <div className='pt-6'>
                        <span className='md:text-2xl text-lg'>08586513022/082142156781</span>
                    </div>
                    <div className='pt-10'>
                        <span className='md:text-2xl text-lg font-bold'>YOUTUBE</span>
                    </div>
                    <div className='pt-6'>
                        <span className='md:text-2xl text-lg'>XXXXX.indo</span>
                    </div>
                </div>
            </div>
            <div className='pt-28 pb-12 text-center'>
                <span className='md:text-2xl text-lg font-bold'>Cek juga</span>
            </div>
            <div className='flex text-center justify-around px-16'>
                <div className='md:text-2xl text-lg'>
                    Produk kami
                </div>
                <div className='md:text-2xl text-lg'>
                    Klaim layanan
                </div>
                <div className='md:text-2xl text-lg'>
                    Tentang Kami
                </div>
                <div className='md:text-2xl text-lg'>
                    Hubungi kami
                </div>
            </div>
            <div className='text-center py-12 pt-10 pb-16'>
                <div className='md:text-2xl text-lg font-bold'>
                    Dengan klik di bawah ini atau masuk ke halaman pengaturan kami
                </div>
            </div>
        </div>
    </div>
  )
}
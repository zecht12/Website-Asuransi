import React from 'react'
import Link from 'next/link'


export default function Hubungikami () {
  return (
    <div className='h-full w-full'>
        <div className='h-auto w-auto'>
        <div className='pt-28 pb-12 text-center'>
                <span className='text-4xl font-bold'>Hubungi kami</span>
            </div>
            <div className='grid md:grid-cols-2 gap-96 pt-12 px-12'>
                <div>
                    <div>
                        <span className='text-2xl font-bold'>Instagram dibawah ini</span>
                    </div>
                    <div className='pt-6'>
                        <span className='text-2xl'>@PT.XXXXXX.co.id/@XXXXX.indo</span>
                    </div>
                    <div className='pt-10'>
                        <span className='text-2xl font-bold'>Facebook</span>
                    </div>
                    <div className='pt-6'>
                        <span className='text-2xl'>XXXXX.indo</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span className='text-2xl font-bold'>Whatsapp dibawah ini</span>
                    </div>
                    <div className='pt-6'>
                        <span className='text-2xl'>08586513022/082142156781</span>
                    </div>
                    <div className='pt-10'>
                        <span className='text-2xl font-bold'>YOUTUBE</span>
                    </div>
                    <div className='pt-6'>
                        <span className='text-2xl'>XXXXX.indo</span>
                    </div>
                </div>
            </div>
            <div className='pt-28 pb-12 text-center'>
                <span className='text-2xl font-bold'>Cek juga</span>
            </div>
            <div className='flex text-center justify-around px-16'>
                <div className='text-2xl'>
                    Produk kami
                </div>
                <div className='text-2xl'>
                    Klaim layanan
                </div>
                <div className='text-2xl'>
                    Tentang Kami
                </div>
                <div className='text-2xl'>
                    Hubungi kami
                </div>
            </div>
            <div className='text-center py-12 pt-10 pb-16'>
                <div className='text-2xl font-bold'>
                    Dengan klik di bawah ini atau masuk ke halaman pengaturan kami
                </div>
            </div>
        </div>
    </div>
  )
}
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Kesehatan from '../public/assets/um.jpg'
import Keluarga from '../public/assets/uhh.jpg'

export default function Homepage () {
  return (
    <div className='h-full w-full'>
        <div className='h-auto w-full'>
            <div className='grid md:grid-cols-2 py-4 gap-4 pt-32'>
                <div>
                    <Image src={Kesehatan}/>
                </div>
                <div className='grid text-6xl'>
                    Perlindungan Kesehatan yang Fleksibel dan Komprehensif
                </div>
            </div>
        </div>
        <div className='md:flex px-12 py-4 w-full items-center justify-between'>
            <ul className='flex '>
                <li className='text-2xl pr-1 font-bold'>Informasi</li>
                <li className='text-2xl'>Terkini</li>
            </ul>
            <ul className='flex items-center justify-between'>
                <li className='pr-24 text-xl font-bold'>Berita</li>
                <li className='pr-16 text-xl font-bold'>Artikel</li>
            </ul>
        </div>
        <div className=' grid md:grid-cols-2 gap-8 py-16 px-10 justify-center items-center w-full'>
            <div className=' rounded-3xl justify-center items-center text-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                <Link href='./Pageberita'><Image src={Keluarga} height={675} width={1200}/>
                    <span className='text-2xl font-bold'>Ketahui 12 Poin Indikator Keluarga Sehat di Indonesia</span>
                </Link>
            </div>
            <div className=' rounded-3xl justify-center items-center text-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                <Link href='./Pageberita'><Image src={Keluarga} height={675} width={1200}/>
                    <span className='text-2xl font-bold'>Ketahui 12 Poin Indikator Keluarga Sehat di Indonesia</span>
                </Link>
            </div>
        </div>
        <div className=' text-center pb-12 text-2xl font-bold'>
            <Link href='./Pagejendelaberita'>Baca Lagi Berita Terupdate Kami</Link>
        </div>
    </div>
  )
}
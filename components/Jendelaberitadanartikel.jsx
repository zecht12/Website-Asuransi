import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Keluarga from '../public/assets/uhh.jpg'

export default function Jendelaberitadanartikel () {
  return (
    <div className='h-full w-full'>
        <div className='h-auto w-auto'>
            <div className='text-center pt-28'>
                <span className='text-2xl font-bold'>Berita dan Artikel terkini</span>
            </div>
            <div className=' grid md:grid-cols-3 gap-8 py-16 px-10 justify-center items-center w-full'>
            <div className=' rounded-3xl justify-center items-center text-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                <Link href='./Pageberita'><Image src={Keluarga}/>
                    <span className='text-2xl font-bold'>Ketahui 12 Poin Indikator Keluarga Sehat di Indonesia</span>
                </Link>
            </div>
            <div className=' rounded-3xl justify-center items-center text-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                <Link href='./Pageberita'><Image src={Keluarga}/>
                    <span className='text-2xl font-bold'>Ketahui 12 Poin Indikator Keluarga Sehat di Indonesia</span>
                </Link>
            </div>
            <div className=' rounded-3xl justify-center items-center text-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                <Link href='./Pageberita'><Image src={Keluarga}/>
                    <span className='text-2xl font-bold'>Ketahui 12 Poin Indikator Keluarga Sehat di Indonesia</span>
                </Link>
            </div>
        </div>
        <div className=' grid md:grid-cols-3 gap-8 pb-28 py-16 px-10 justify-center items-center w-full'>
            <div className=' rounded-3xl justify-center items-center text-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                <Link href='./Pageberita'><Image src={Keluarga}/>
                    <span className='text-2xl font-bold'>Ketahui 12 Poin Indikator Keluarga Sehat di Indonesia</span>
                </Link>
            </div>
            <div className=' rounded-3xl justify-center items-center text-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                <Link href='./Pageberita'><Image src={Keluarga}/>
                    <span className='text-2xl font-bold'>Ketahui 12 Poin Indikator Keluarga Sehat di Indonesia</span>
                </Link>
            </div>
            <div className=' rounded-3xl justify-center items-center text-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                <Link href='./Pageberita'><Image src={Keluarga}/>
                    <span className='text-2xl font-bold'>Ketahui 12 Poin Indikator Keluarga Sehat di Indonesia</span>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}
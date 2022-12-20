import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Kesehatan from '../public/assets/um.jpg'

export default function Panduanklaim () {
  return (
    <div className='h-full w-full'>
        <div className='h-auto w-auto'>
            <div className='grid md:grid-cols-2 py-4 gap-4 pt-32'>
                <div>
                    <Image src={Kesehatan}/>
                </div>
                <div className='grid md:text-6xl text-2xl'>
                    Klaim Asuransi di Perusahaan Kami Yang Mudah Dan Cepat
                </div>
            </div>
            <div className='md:text-4xl text-xl text-center font-bold'>
                Ketentuan Klaim
            </div>
            <div className='pt-4 pl-16 px-16'>
                <span className='text-xl'>1. Setelah data dikirim proses membutukan paling lambat 2 jam.</span>
            </div>
            <div className='pt-4 pl-16 px-16'>
                <span className='text-xl'>2. Setelah itu konfirmasi kepada pengirim dan pelengkapan data lebih lanjut</span>
            </div>
            <div className='pt-4 pl-16 px-16'>
                <span className='text-xl'>3. Setelah itu penyortiran apakah data diterima tidak proses membutukan satu kali 24 jam.</span>
            </div>
            <div className='pt-4 pl-16 px-16'>
                <span className='text-xl'>4. Setelah itu konfirmasi bahwa data diterima atau tidak.2. Setelah itu konfirmasi kepada pengirim dan pelengkapan data lebih lanjut</span>
            </div>
            <div className='pt-4 pl-16 pb-20 px-16'>
                <span className='text-xl'>5. Dana akan cair setelah 12 jam konfirmasi.</span>
            </div>
            <div className='md:text-4xl text-xl text-center font-bold pb-10'>
                Klaim asuransi dibawah ini
            </div>
            <div className='flex justify-between items-center pt-4 px-8 pb-16'>
            <div className="py-4 text-black/90 md:text-xl text-base font-bold">
                <Link href='./Pageasuransijiwa'>Asuransi Jiwa</Link>
            </div>
            <div className="py-4 text-black/90 md:text-xl text-base font-bold">
                <Link href='./Pageasuransikesehatan'>Asuransi Kesehatan</Link>
            </div>
            <div className="py-4 text-black/90 md:text-xl text-base font-bold">
                <Link href='./Pageasuransipendidikan'>Pendidikan</Link>
            </div>
            <div className="py-4 text-black/90 md:text-xl text-base font-bold">
                <Link href='./Pageperlindunganbebaspremi'>Perlindungan Bebas Premi</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

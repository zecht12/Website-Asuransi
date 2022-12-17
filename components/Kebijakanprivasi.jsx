import React from 'react'
import Image from 'next/image'
import Kesehatan from '../public/assets/um.jpg'

export default function Kebijakanprivasi () {
  return (
    <div className='h-full w-full'>
        <div className='h-auto w-auto px-12'>
            <div className='grid md:grid-cols-2 gap-4 pt-28'>
                <div>
                    <Image src={Kesehatan}/>
                </div>
                <div>
                    <div>
                        <span className='text-4xl font-bold'>Kebijakan Privasi Kami</span>
                    </div>
                    <div className='pt-12'>
                        <span className='text-2xl'>Kami, Perusahaan kami, memperlakukan privasi dan perlindungan data pribadi Anda secara serius.</span>
                    </div>
                    <div className='pt-6'>
                        <span className='text-2xl'>Jadi, kami menetapkan ketentuan tentang pemrosesan data pribadi anda, hak-hak apa yang anda miliki, dan bagaimana anda dapat menghubungi kami apabila anda ingin mengetahui lebih banyak pada informasi di bawah ini.</span>
                    </div>
                    <div className='pt-6'>
                        <span className='text-2xl'>Ketika kami mengatakan “data pribadi”, yang kami maksudkan adalah informasi tentang anda, seperti nama,  tanggal lahir, dan detail kontak Anda.</span>
                    </div>
                </div>
            </div>
            <div className='pt-2 pb-28'>
                <span className='text-2xl'>Kami mengumpulkan data pribadi Anda yang diperlukan bagi kami untuk menyediakan produk atau layanan yang Anda minta ataupun untuk mematuhi persyaratan hukum atau kontrak.</span>
            </div>
        </div>
    </div>
  )
}
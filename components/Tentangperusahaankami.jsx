import React from 'react'
import Image from 'next/image'
import Kesehatan from '../public/assets/um.jpg'

export default function Tentangperusahaankami () {
  return (
    <div className='h-full w-full'>
        <div className='h-auto w-auto px-12'>
            <div className='grid md:grid-cols-2 pt-28 gap-8'>
                <div>
                    <Image src={Kesehatan}/>
                </div>
                <div>
                    <div>
                        <span className='grid text-4xl font-bold'>Perusahaan Kami</span>
                    </div>
                    <div className=' pt-6'>
                        <span className='text-2xl'>Didirikan pada tahun 2022, PT XXXXXX assurance adalah sebuah grup perusahaan jasa keuangan terkemuka di Indonesia. Sebagai bagian dari Grup yang berpengalaman lebih di industri asuransi jiwa, perusahaan kami memiliki komitmen untuk mengembangkan bisnisnya di Indonesia.</span>
                    </div>
                    <div className=' pt-16'>
                        <span className='text-2xl'>Sejak meluncurkan produk asuransi yang dikaitkan dengan investasi (unit link) pertamanya pada 2022 ini, Kamii telah mendirikan Unit Usaha Syariah dan dipercaya sebagai pemimpin pasar asuransi jiwa syariah di Indonesia sejak pendiriannya.</span>
                    </div>
                </div>
            </div>
            <div className=' pt-6 pb-20'>
                <span className='text-2xl'>Hingga Desember 2022, Kami memiliki kantor pusat di Jakarta dengan 6 kantor pemasaran di Bandung, Semarang, Surabaya, Denpasar, Medan, dan Batam serta 361 Kantor Pemasaran Mandiri (KPM) di seluruh Indonesia. Kami melayani 2,5 juta tertanggung yang didukung oleh lebih dari 172.000 Tenaga Pemasar berlisensi.</span>
            </div>
        </div>
    </div>
  )
}


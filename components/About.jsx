import React from 'react'
import Link from 'next/link'

const About = () => {
return (
  <div className='w-full md:h-screen bg-blue-200'>
    <div id='about' className=' w-full h-auto px-16 pt-32'>
      <div className='grid md:grid-cols-4 gap-24'>
      <div>
        <span className='text-2xl font-bold'>Produk Kami</span>
          <div className="py-4 pt-16 text-black/90 text-xl">
            <Link href='./Pageasuransijiwa'>Asuransi Jiwa</Link>
          </div>
          <div className="py-4 text-black/90 text-xl">
            <Link href='./Pageasuransikesehatan'>Asuransi Kesehatan</Link>
          </div>
          <div className="py-4 text-black/90 text-xl">
            <Link href='./Pageasuransipendidikan'>Pendidikan</Link>
          </div>
          <div className="py-4 text-black/90 text-xl">
            <Link href='./Pageperlindunganbebaspremi'>Perlindungan Bebas Premi</Link>
          </div>
      </div>
      <div>
        <span className='text-2xl font-bold'>Klaim Dan Layanan</span>
          <div className="py-4 pt-16 text-black/90 text-xl">
            <Link href='./Pagepembayaranpremi'>Pembayaran Premi</Link>
          </div>
          <div className="py-4 text-black/90 text-xl">
            <Link href='./Pagepanduanklaim'>Panduan Untuk Klaim</Link>
          </div>
          <div className="py-4 text-black/90 text-xl">
            <Link href='./Pagemitrabisnis'>Daftar Mitra Bisnis</Link>
          </div>
      </div>
      <div>
        <span className='text-2xl font-bold'>Tentang Kami</span>
          <div className="py-4 pt-16 text-black/90 text-xl">
            <Link href='./Pagetentangperusahaan'>Tentang Perusahaan Kami</Link>
          </div>
          <div className="py-4 text-black/90 text-xl">
            <Link href='./Pagekebijakankami'>Kebijakan Kami</Link>
          </div>
          <div className="py-4 text-black/90 text-xl">
            <Link href='./Pagetanggungjawab'>Tanggung Jawab Kami</Link>
          </div>
          <div className="py-4 text-black/90 text-xl">
            <Link href='./Pagekebijakanprivasi'>Kebijakan Privasi Kami</Link>
          </div>
      </div>
      <div>
        <Link href='./Pagehubungikami'>
        <span className='text-2xl font-bold'>Hubungi Kami</span></Link>
          <div className="py-4 pt-16 text-black/90 text-xl">
            <a href='https://instagram.com/gilangprimae?igshid=YmMyMTA2M2Y='>Instagram</a>
          </div>
          <div className="py-4 text-black/90 text-xl">
            <a href='https://wa.me/6285865130221'>Whatsapp</a>
          </div>
      </div>
    </div>
  </div>
  </div>
)
}

export default About
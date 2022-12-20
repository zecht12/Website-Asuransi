import React from 'react'

export default function Asuransipendidikan () {
  return (
    <>
    <div className="flex min-h-screen pt-28 px-12">
        <div className="w-full space-y-8">
        <div className=' text-center font-bold text-2xl'>
            ASURANSI PENDIDIKAN
        </div>
        <form className="mt-8 " action="#" method="POST">
        <div className=' grid md:grid-cols-2 md:gap-96 gap-8'>
        <div>
            <input type="hidden" name="remember" defaultValue="true" />
            <span className=''>Nama yang ingin diklaim asuransinya</span>
            <div className="-space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="nama-asuransi-pendidikan" className="sr-only">
                    nama-asuransi-pendidikan
                </label>
                <input
                    id="nama-asuransi-pendidikan"
                    name="nama-asuransi-pendidikan"
                    type=" name"
                    autoComplete="name"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-1 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukan Nama"
                />
            </div>
            </div>

            <input type="hidden" name="remember" defaultValue="true" />
            <span className=''>Nomor Whatsapp yang bisa dihubungi</span>
            <div className=" -space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Nomor-Telephone" className="sr-only">
                Nomor Whatsapp
                </label>
                <input
                    id="nomor-whatsapp"
                    name="nomor-whatsapp"
                    type="number"
                    autoComplete="number"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukkan Whatsapp Anda"
                />
            </div>
            </div>


            <input type="hidden" name="remember" defaultValue="true" />
            <span>Masukkan pendidikan terakhir</span>
            <div className=" -space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Pendidikan-terakhir" className="sr-only">
                Pendidikan-terakhir
                </label>
                <input
                    id="Pendidikan-terakhir"
                    name="Pendidikan-terakhir"
                    type="text"
                    autoComplete="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukan Pendidikan-terakhir"
                />
            </div>
            </div>

            </div>
            <div>
            <input type="hidden" name="remember" defaultValue="true" />
            <span>Masukkan dokumen Perincian biaya yang lengkap</span>
            <div className="-space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Perincian-biaya" className="sr-only">
                    Perincian biaya yang lengkap
                </label>
                <input
                    id="Perincian-biaya"
                    name="perincian-biaya-lengkap"
                    type="file"
                    autoComplete="perincian-biaya-lengkap"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukan perincian-biaya-lengkap"
                />
            </div>
            </div>



            <input type="hidden" name="remember" defaultValue="true" />
            <span>Masukkan dokumen semester terakhir yang ditempuh</span>
            <div className="-space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Semester-terakhir" className="sr-only">
                Masukan dokumen Semester terakhir yang ditempuh
                </label>
                <input
                    id="Semester-terakhir"
                    name="Semester-terakhir-yang-ditempuh"
                    type="file"
                    autoComplete="file"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukan dokumen Semester terakhir yang ditempuh"
                />
            </div>
            </div>


            </div>
            </div>
            <div className='text-center mt-16 md:mt-auto py-12'>
                <button type="submit"className="px-3 py-2 text-center rounded-md text-white bg-black ">
                Submit
                </button>
            </div>
            </form>
        </div>
    </div>
    </>
  )
}
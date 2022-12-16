import React from 'react'

export default function Perlindunganbebaspremi () {
  return (
    <>
    <div className="flex min-h-screen pt-28 px-12">
        <div className="w-full space-y-8">
        <div className=' text-center font-bold text-2xl'>
            PERLINDUNGAN BEBAS PREMI
        </div>
        <form className="mt-8 " action="#" method="POST">
        <div className=' grid md:grid-cols-2 gap-96'>
        <div>
            <input type="hidden" name="remember" defaultValue="true" />
            <span className=''>Nama yang ingin diklaim asuransinya</span>
            <div className="-space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="nama-asuransi-jiwa" className="sr-only">
                    nama-asuransi-jiwa
                </label>
                <input
                    id="nama-asuransi-jiwa"
                    name="nama-asuransi-jiwa"
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
            <span>Masukkan dokumen resume medis disini</span>
            <div className=" -space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Resume-medis" className="sr-only">
                Resume-medis
                </label>
                <input
                    id="Resume-medis"
                    name="dokumen-resume-medis"
                    type="file"
                    autoComplete="dokumen-resume-medis"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukan Dokumen disini"
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
            <span>Masukkan dokumen Perincian obat-obatan (opsional)</span>
            <div className=" -space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Dokumen-obat-obatan" className="sr-only">
                    Dokumen perincian-obat-obatan
                </label>
                <input
                    id="Dokumen-obat-obatan"
                    name="dokumen-perincian-obat"
                    type="file"
                    autoComplete="dokumen-perincian-obat"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukan Dokumen perincian obat-obatan"
                />
            </div>
            </div>

            <input type="hidden" name="remember" defaultValue="true" />
            <span>Masukkan dokumen pendukung (opsional)</span>
            <div className=" -space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Dokumen-lainnya" className="sr-only">
                    Dokumen lainnya
                </label>
                <input
                    id="Dokumen-lainnya"
                    name="dokumen-lainnya"
                    type="file"
                    autoComplete="dokumen-lainnya"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukan Dokumen disini"
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
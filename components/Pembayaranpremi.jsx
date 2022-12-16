import React from 'react'

export default function Pembayaranpremi () {
  return (
    <div className='h-full w-full'>
        <div className='h-auto w-auto'>
            <div className='text-center pt-28'>
                <span className='text-2xl font-bold'>Pembayaran premi</span>
            </div>
            <form className="mt-8 px-16 " action="#" method="POST">
        <div className='grid md:grid-cols-2 gap-96'>
        <div>
            <input type="hidden" name="remember" defaultValue="true" />
            <span className=''>Masukan Nama Lengkap</span>
            <div className="-space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="nama-lengkap" className="sr-only">
                    nama-lengkap
                </label>
                <input
                    id="nama-lengkap"
                    name="nama-lengkap"
                    type=" name"
                    autoComplete="name"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-1 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukan Nama Lengkap"
                />
            </div>
            </div>

            <input type="hidden" name="remember" defaultValue="true" />
            <span className=''>Masukkan nomer polis</span>
            <div className=" -space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Nomor-Polis" className="sr-only">
                Masukkan nomer polis
                </label>
                <input
                    id="Nomor-Polis"
                    name="Nomor-Polis"
                    type="number"
                    autoComplete="number"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukkan nomer polis"
                />
            </div>
            </div>


            <input type="hidden" name="remember" defaultValue="true" />
            <span>Masukkan tanggal lahir pemegang polis</span>
            <div className=" -space-y-px rounded-md shadow-sm pt-4 pb-12">
                <div>
                <label htmlFor="Tanggal-Lahir-Pemegang-Resume" className="sr-only">
                Masukkan tanggal lahir pemegang polis
                </label>
                <input
                    id="Tanggal-Lahir-Pemegang-Resume"
                    name="Tanggal-Lahir-Pemegang-Resume"
                    type="date"
                    autoComplete="date"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                    placeholder="Masukkan tanggal lahir pemegang polis"
                />
            </div>
            </div>
            </div>

            <div className=' text-center'>
            <span>Pilih pembayaran yang diinginkan</span>
                <ul class="grid gap-6 w-full md:grid-cols-3 pt-6">
                    <li>
                        <input type="checkbox" id="DANA" value="" className='hidden peer' required=""/>
                        <label for="DANA" className="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-900 dark:border-gray-300 peer-checked:border-blue-600 hover:text-gray-900 dark:peer-checked:text-gray-900 peer-checked:text-gray-900 hover:bg-gray-50 dark:text-gray-900 dark:bg-white dark:hover:bg-gray-300">                           
                            <div className="block text-center">
                                <span>DANA</span>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="QRIS" value="" className='hidden peer' required=""/>
                        <label for="QRIS" className="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-900 dark:border-gray-300 peer-checked:border-blue-600 hover:text-gray-900 dark:peer-checked:text-gray-900 peer-checked:text-gray-900 hover:bg-gray-50 dark:text-gray-900 dark:bg-white dark:hover:bg-gray-300">                           
                            <div className="block text-center">
                                <span>QRIS</span>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="GOPAY" value="" className='hidden peer' required=""/>
                        <label for="GOPAY" className="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-900 dark:border-gray-300 peer-checked:border-blue-600 hover:text-gray-900 dark:peer-checked:text-gray-900 peer-checked:text-gray-900 hover:bg-gray-50 dark:text-gray-900 dark:bg-white dark:hover:bg-gray-300">                           
                            <div className="block text-center">
                                <span>GOPAY</span>
                            </div>
                        </label>
                    </li>
                </ul>
                <ul class="grid gap-6 w-full md:grid-cols-2 px-20 pt-10">
                    <li>
                        <input type="checkbox" id="BNI" value="" className='hidden peer' required=""/>
                        <label for="BNI" className="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-900 dark:border-gray-300 peer-checked:border-blue-600 hover:text-gray-900 dark:peer-checked:text-gray-900 peer-checked:text-gray-900 hover:bg-gray-50 dark:text-gray-900 dark:bg-white dark:hover:bg-gray-300">                           
                            <div className="block text-center">
                                <span>BNI</span>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="BCA" value="" className='hidden peer' required=""/>
                        <label for="BCA" className="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-900 dark:border-gray-300 peer-checked:border-blue-600 hover:text-gray-900 dark:peer-checked:text-gray-900 peer-checked:text-gray-900 hover:bg-gray-50 dark:text-gray-900 dark:bg-white dark:hover:bg-gray-300">                           
                            <div className="block text-center">
                                <span>BCA</span>
                            </div>
                        </label>
                    </li>
                </ul>
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
  )
}
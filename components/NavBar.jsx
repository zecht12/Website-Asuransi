import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Logo from '../public/assets/logo.png'
import {GrSearch} from 'react-icons/gr'
import {AiOutlineDown} from 'react-icons/ai'


const NavBar = () => {
    const [nav, setNav] = useState(false)


    const handleNav = () => {
        setNav(!nav)
    }

    const [open, setOpen] = useState(false)

    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };

function MobileNav({open, setOpen}) {
return (
    <div className={`absolute top-0 left-0 h-screen w-1/3 bg-white transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-500 ease-in-out filter `}>
        <div className="mx-auto w-full max-w-md rounded-2xl bg-transparent p-2 pt-36">
            <Disclosure>{({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left font-medium text-black hover:bg-transparent focus:outline-none focus-visible:ring focus-visible:bg-transparent focus-visible:ring-opacity-75">
                        <span className='text-2xl font-bold'>Produk Kami</span>
                        <AiOutlineDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-black`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='/Pageasuransijiwa'>Asuransi Jiwa</Link>
                    </Disclosure.Panel>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='./Pageasuransikesehatan'>Asuransi Kesehatan</Link>
                    </Disclosure.Panel>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='./Pageasuransipendidikan'>Pendidikan</Link>
                    </Disclosure.Panel>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='./Pageperlindunganbebaspremi'>Perlindungan Bebas Premi</Link>
                    </Disclosure.Panel>
                </>
                )}
            </Disclosure>
            <Disclosure>{({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-sm font-medium text-black hover:bg-transparent focus:outline-none focus-visible:ring focus-visible:bg-transparent focus-visible:ring-opacity-75">
                        <span className='text-2xl font-bold'>Klaim Dan Layanan</span>
                        <AiOutlineDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-black`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='./Pagepembayaranpremi'>Pembayaran premi</Link>
                    </Disclosure.Panel>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='./Pagepanduanklaim'>Panduan untuk klaim</Link>
                    </Disclosure.Panel>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='./Pagemitrabisnis'>Daftar Mitra Bisnis</Link>
                    </Disclosure.Panel>
                </>
                )}
            </Disclosure>
            <Disclosure>{({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-sm font-medium text-black hover:bg-transparent focus:outline-none focus-visible:ring focus-visible:bg-transparent focus-visible:ring-opacity-75">
                        <span className='text-2xl font-bold'>Tentang Kami</span>
                        <AiOutlineDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-black`}/>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='./Pagetentangperusahaan'>Tentang Perusahaan Kami</Link>
                    </Disclosure.Panel>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='./Pagekebijakankami'>Kebijakan Kami</Link>
                    </Disclosure.Panel>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='./Pagetanggungjawab'>Tanggung Jawab Kami</Link>
                    </Disclosure.Panel>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-black/90 text-xl">
                        <Link href='./Pagekebijakanprivasi'>Kebijakan Privasi</Link>
                    </Disclosure.Panel>
                </>
                )}
            </Disclosure>
            <Disclosure>{({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transparent px-4 py-2 text-left text-sm font-medium text-black hover:bg-transparent focus:outline-none focus-visible:ring focus-visible:bg-transparent focus-visible:ring-opacity-75">
                        <span className='text-2xl font-bold'><Link href='./Pagehubungikami'>Hubungi Kami</Link></span>
                    </Disclosure.Button>
                </>
                )}
            </Disclosure>
        </div>
    </div>
)
}


    return (
    <div>
        <div className={nav ?  "fixed w-full h-20 shadow-xl z-[100] bg-transparent" : " bg-transparent fixed w-full h-20 shadow-xl z-[100]"}>
            <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
                <div>
                    <div className='pb-10'>
                        <nav>
                        <MobileNav open={open} setOpen={setOpen}/>
                            <div className="w-11/12 flex justify-end items-center">
                                <div className="group z-50 relative w-6 h-6 mt-10 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                                    setOpen(!open)
                                    }}>
                                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className=' md:pl-32'>
                    <Image src={Logo} alt="LOGO" width={30} height={30}/>
                </div>
                <div>
                <div>
                    <div className=' relative'>
                        <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                            <GrSearch/>
                        </div>
                    <input type="text"className=' block pl-7 py-2 pl-8 w-50 text-gray-900 bg-white rounded-lg border border-black focus:pl-1'
                    placeholder="Ada yang bisa dibantu?"onFocus={handleFocus}onBlur={handleBlur}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default NavBar
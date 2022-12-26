import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Header () {
    const [mobileMenuActive, setMobileMenuActive] = useState(null)
    const mobileMenu = useRef(null)
    const menuButton = useRef(null);

    useEffect(() => {
        if (!mobileMenuActive) return;
        
        function handleClick(event) {
            if (mobileMenu.current && !mobileMenu.current.contains(event.target) && !menuButton.current.contains(event.target)) {
                setMobileMenuActive(false)
            }
        }
        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
    }, [mobileMenuActive])

    return <div>
        <div className="w-full h-[81px]" />
        <header className="fixed w-full h-[81px] top-0 px-3 py-5 border-b border-gray-300 bg-white z-20">
            <div className="relative flex justify-between items-center gap-4 max-w-screen-xl mx-auto">
                <Link href="/" className="text-2xl font-semibold text-gray-900">
                    ComicFun 😂
                </Link>
                <ul className="md:flex hidden gap-8">
                    <li>
                        <Link href="/tool" className="underline-offset-2 decoration-2 hover:underline">
                            Portrait Tool
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="underline-offset-2 decoration-2 hover:underline">
                            How It Works
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="underline-offset-2 decoration-2 hover:underline">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/brandonbyr4/comicfun" target="_blank" rel="noopener noreferrer" className="underline-offset-2 decoration-2 hover:underline">
                            Github
                        </a>
                    </li>
                </ul>
                <Link href="/tool" className="md:inline-block hidden px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white rounded transition">
                    Launch Tool
                </Link>
                <button ref={menuButton} onClick={() => setMobileMenuActive(!mobileMenuActive)} className="md:hidden block focus:ring-2 ring-violet-500 my-2">
                    {!mobileMenuActive ? <svg className="w-6 h-6 text-gray-900 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg> : 
                    <svg className="w-6 h-6 text-gray-900 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>}
                </button>
                {mobileMenuActive && <div ref={mobileMenu} className="md:hidden block absolute top-9 right-0 w-44 bg-white py-2 rounded shadow">
                    <ul className="text-center">
                        <li>
                            <Link href="/tool" className="block p-3 hover:bg-gray-100">
                                Portrait Tool
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="block p-3 hover:bg-gray-100">
                                How It Works
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="block p-3 hover:bg-gray-100">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <a href="https://github.com/brandonbyr4/comicfun" target="_blank" rel="noopener noreferrer" className="block p-3 hover:bg-gray-100">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>}
            </div>
        </header>
    </div>
}
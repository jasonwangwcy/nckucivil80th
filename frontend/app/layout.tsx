'use client'
import "./globals.css";
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '.././public/logo2.png'; 
import menuicon from '.././public/menuicon.png';
import logo2 from '.././public/logo (1).png';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="zh-Hant">
      <body>
        <header className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row items-center p-4 bg-white text-black"> 
          <div className="flex items-center w-full md:w-auto">
            <Link href="/" className="mr-4">
              <Image src={logo} alt="Logo" width={300} height={50} />
            </Link>
            <button 
                    className="md:hidden ml-auto mb-2" 
                    onClick={() => setIsOpen(!isOpen)}
                 >
                <Image src={menuicon} alt="Menu" width={50} height={50} />
            </button>
          </div>
          <nav className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isOpen ? 'flex' : 'hidden' } md:flex md:ml-0 mt-2 md:items-center items-start pl-4`}>
              <Link href="/" className="hover:text-pink-200 active:text-pink-400">首頁</Link>
              <Link href="/about" className="hover:text-pink-200 active:text-pink-400">關於我們</Link>
              <Link href="/communities" className="hover:text-pink-200 active:text-pink-400">系慶活動</Link> 
              <Link href="/events" className="hover:text-pink-200 active:text-pink-400">系列活動</Link>
              <Link href="/commodity" className="hover:text-pink-200 active:text-pink-400">紀念商品</Link>
              <Link href="/donation" className="hover:text-pink-200 active:text-pink-400">捐款贊助</Link>
              <Link href="/links" className="hover:text-pink-200 active:text-pink-400">相關連結</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="text-center mt-4">
          <div className="flex justify-center"> 
            <Image src={logo2} alt="logo2"/> 
          </div>
          <p className="mt-4">© 2024 成大土木系友會</p>
          </footer>
      </body>
    </html>
  );
}
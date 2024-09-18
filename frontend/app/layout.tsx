import "./globals.css";
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '.././public/logo2.png'; 


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="flex items-center p-4 bg-white text-black">
          <Link href="/" className="mr-4">
            <Image src={logo} alt="Logo" width={300} height={50} />
          </Link>
          <nav className="flex space-x-4">
            <Link href="/" className="hover:text-pink-200 active:text-pink-400">首頁</Link>
            <Link href="/about" className="hover:text-pink-200 active:text-pink-400">關於我們</Link>
            <Link href="/events" className="hover:text-pink-200 active:text-pink-400">系列活動</Link>
            <Link href="/communities" className="hover:text-pink-200 active:text-pink-400">系慶活動</Link> 
            <Link href="/contact" className="hover:text-pink-200 active:text-pink-400">聯絡我們</Link>
            <Link href="/links" className="hover:text-pink-200 active:text-pink-400">相關連結</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 成大土木系友會</footer>
      </body>
    </html>
  );
}
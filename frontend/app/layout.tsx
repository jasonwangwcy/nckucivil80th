import "./globals.css";
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../components/logo.png'; // Import logo image

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="flex items-center p-4 bg-white text-black">
          <Link href="/" className="mr-4">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </Link>
          <nav className="flex space-x-4">
            <Link href="/">首頁</Link>
            <Link href="/events">最新活動</Link>
            <Link href="/communities">校友會社團</Link>
            <Link href="/contact">聯絡我們</Link>
            <Link href="/">test</Link>
            <Link href="/">test</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 成大土木系友會</footer>
      </body>
    </html>
  );
}
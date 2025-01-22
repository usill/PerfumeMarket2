import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import Logo from "@/components/Logo";
import { IoMdTime } from "react-icons/io";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto min-h-screen flex flex-col`}
      >
        <header className="flex justify-between py-6">
          <Logo></Logo>
          <nav className="text-sm font-bold flex gap-12 text-gray-800">
            <Link href="/" className="flex items-center hover:text-gray-500 duration-300 ease-in-out">
              ГЛАВНАЯ
            </Link>
            <Link href="/" className="flex items-center hover:text-gray-500 duration-300 ease-in-out">
              КАТАЛОГ
            </Link>
            <Link href="/" className="flex items-center hover:text-gray-500 duration-300 ease-in-out">
              БЛОГ
            </Link>
            <Link href="/" className="flex items-center hover:text-gray-500 duration-300 ease-in-out">
              О НАС
            </Link>
            <Link href="/" className="flex items-center hover:text-gray-500 duration-300 ease-in-out">
              КОНТАКТЫ
            </Link>
          </nav>
          <nav className="flex items-center gap-4">
            <div className="p-2.5">
              <FaSearch size="16" color="#fe5245"></FaSearch>
            </div>
            <div className="p-2.5">
              <FiUser size="18" color="#fe5245"></FiUser>
            </div>
            <div className="p-2.5 relative">
              <div className="w-5 h-5 absolute bg-red-600 -right-1 -top-1 rounded-full text-2xs flex justify-center items-center text-white font-bold">
                11
              </div>
              <BsCart4 size="18" color="#fe5245"></BsCart4>
            </div>
          </nav>
        </header>
        <div className="">
          {children}
        </div>
        <footer className="mt-auto pt-12">
          <div className="flex">
            <div className="w-1/3">
              <Logo></Logo>
              <div className="text-sm mt-8 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className="mt-6 flex">
                <IoMdTime
                  size="36"
                  color="#fe5245"
                  className="my-auto"
                ></IoMdTime>
                <div className="flex flex-col ml-4">
                  <span className="text-sm text-gray-500">
                    Остались вопросы? Звоните нам 24/7!
                  </span>
                  <span className="text-2xl">8 (800) 555-35-35</span>
                </div>
              </div>
            </div>
            <div className="w-2/3 px-24 flex justify-between text-gray-700">
              <ul>
                <li className="text-lg font-bold">Социальные сети</li>
                <li className="text-sm text-gray-700 mt-8">Вконтакте</li>
                <li className="text-sm text-gray-700 mt-3.5">Телеграм</li>
                <li className="text-sm text-gray-700 mt-3.5">Однокласники</li>
                <li className="text-sm text-gray-700 mt-3.5">Дзен</li>
              </ul>
              <ul>
                <li className="text-lg font-bold">Локация</li>
                <li className="text-sm text-gray-700 mt-8">Москва</li>
                <li className="text-sm text-gray-700 mt-3.5">
                  Санкт-Петербург
                </li>
                <li className="text-sm text-gray-700 mt-3.5">Орёл</li>
                <li className="text-sm text-gray-700 mt-3.5">Новосибирск</li>
                <li className="text-sm text-gray-700 mt-3.5">
                  Нижний новгород
                </li>
              </ul>
              <ul>
                <li className="text-lg font-bold">О нас</li>
                <li className="text-sm text-gray-700 mt-8">
                  Условия и положения
                </li>
                <li className="text-sm text-gray-700 mt-3.5">
                  Политика конфиденциальности
                </li>
                <li className="text-sm text-gray-700 mt-3.5">Контакты</li>
                <li className="text-sm text-gray-700 mt-3.5">FAQ</li>
              </ul>
            </div>
          </div>
          <div className="text-sm bg-gray-200 p-4 text-center text-gray-700 mt-4">
            © 2025 
            <span className="text-red-600"> Дамир Хурич. </span>
            Все права защищены.</div>
        </footer>
      </body>
    </html>
  );
}

import Link from 'next/link';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import TechACMLogo from '../assets/techacm-logo.svg';
import ThemeSwitcher from './themeswitcher';

export default function Navbar() {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  const linkClass = (path) =>
    `block py-2 px-3 rounded md:p-0 ${
      isActive(path)
        ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
        : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
    }`;

  return (
    <nav className="bg-small dark:bg-large w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 align-center">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <NextImage src={TechACMLogo} alt="TechACM Logo" width={32} height={32} />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="/contact">
            <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">Prendre contact</button>
          </Link>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex bg-large dark:bg-small items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link href="/" className={linkClass('/')}>Accueil</Link>
            </li>
            <li>
              <Link href="/about" className={linkClass('/about')}>À propos</Link>
            </li>
            <li>
              <Link href="/services" className={linkClass('/services')}>Services</Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
            </li>
            <li>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex bg-large dark:bg-small items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">A</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

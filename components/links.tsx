'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function Links() {
  const pathname = usePathname()
 
  return (
    <nav className='flex justify-between'>
        <h1 className='text-2xl font-bold font-amatic'><span className='bold text-black'></span>Soul<span className='text-green'>Amiga</span></h1>
      <ul className='flex space-x-4'>
        <li className='space-x-4'>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li className='space-x-4'>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
          >
            About
          </Link>
          </li>
          <li className='space-x-4'>
          <Link
            className={`link ${pathname === '/my-work' ? 'active' : ''}`}
            href="/my-work"
          >
            My Work
          </Link>
          </li>
          <li className='space-x-4'>
          <Link
            className={`link ${pathname === '/blog' ? 'active' : ''}`}
            href="/blog"
          >
            Blog
          </Link>

        </li>
      </ul>
      <button className='btn btn-green-900'>Contact</button>
    </nav>
  )
}
import React from 'react'; // 필요 시 추가
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <header className='border-gray-200 '>
        <nav className='bg-green-500'>
          <ul className='font-sour-gummy flex flex-row gap-5 justify-center'>
            <li>
              <Link href="/">About Me</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <h1>Devlog of Daun</h1>
        </article>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

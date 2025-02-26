import Header from './_components/Header'
import Hero from './_components/Hero'
import About from './_components/About'
import Experience from './_components/Experience'
import Skills from './_components/Skills'
import Load from './_components/sub/Load'

export default function Home() {
  return (
    <div>
      <Load />
      <main className='px-2 sm:px-12 md:px-24 lg:px-40 lg:py-10'>
       <Header/>
       <Hero/>
       <About/>
       <Experience/>
       <Skills/>
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

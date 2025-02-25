import Header from './Header'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Skills from './Skills'

export default function Home() {
  return (
    <div>
      <main className='px-2 sm:px-12 md:px-24 lg:px-40 lg:py-10'>
       <Header/>
       <Hero/>
       <About/>
       <Experience/>
       {/* <Skills/> */}
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

import Header from './Header'
import Hero from './Hero'
import About from './About'

export default function Home() {
  return (
    <div>
      <main>
       <Header/>
       <Hero/>
       <About/>
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

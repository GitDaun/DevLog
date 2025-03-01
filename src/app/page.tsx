import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <div>
      <main className='px-2 sm:px-12 md:px-24 lg:px-40 lg:py-10'>
          <Header/>
          <Hero/>
          <About/>
          <Experience/>
          <Skills/>
      </main>
    </div>
  );
}

import Header from './_components/Header'
import Hero from './_components/Hero'
import About from './_components/About'
import Experience from './_components/Experience'
import Skills from './_components/Skills'

// 인위적인 지연을 주는 함수
// async function delay(ms: number) {
//   await new Promise(resolve => setTimeout(resolve, ms));
// }

// export default async function Home() {
export default  function Home() {
  // 인위적인 지연 추가 (테스트용)
  // await delay(2000);

  return (
    <div>
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

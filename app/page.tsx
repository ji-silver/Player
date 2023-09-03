import Footer from '@/components/Footer'
import Header from '@/components/Header'
import GameList from '@/components/Home/GameList'
import Hero from '@/components/Home/Hero'
import Search from '@/components/Home/Search'

export default function Home() {
  return (
    <main>
      <Header />
      <div className='max-width'>
        <Hero />
        <Search />
        <GameList />
      </div>
      <Footer />
    </main>
  )
}

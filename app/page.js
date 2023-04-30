import Cards from '@/components/Cards'
import Hero from '@/components/Hero'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Ready from '@/components/common/Ready'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Header />
     <Hero />
     <Cards />
     <Ready />
     <Footer />
    </>
  )
}

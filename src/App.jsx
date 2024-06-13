import { Suspense, lazy, useEffect } from 'react'
import Loading from './ui/Loading'
import Aos from 'aos'
const Adoption = lazy(() => import('./sections/Adoption'))
const Community = lazy(() => import('./sections/Community'))
const Header = lazy(() => import('./sections/Header'))
const Hero = lazy(() => import('./sections/Hero'))
const Stories = lazy(() => import('./sections/Stories'))
const Footer = lazy(() => import('./sections/Footer'))
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
    })
  })
  return (
    <>
      <Suspense fallback= {<Loading />}>
      <Header />
      <Hero />
      <Community />
      <Adoption />
      <Stories />
      <Footer />
      </Suspense>
    </>
  )
}

export default App

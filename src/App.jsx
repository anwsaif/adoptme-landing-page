import { Suspense, lazy } from 'react'
const Adoption = lazy(() => import('./sections/Adoption'))
const Community = lazy(() => import('./sections/Community'))
const Header = lazy(() => import('./sections/Header'))
const Hero = lazy(() => import('./sections/Hero'))
const Stories = lazy(() => import('./sections/Stories'))
const Footer = lazy(() => import('./sections/Footer'))

function App() {
  return (
    <>
      <Suspense fallback= {<div>Loading...</div>}>
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

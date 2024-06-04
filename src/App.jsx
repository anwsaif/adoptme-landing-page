import Header from './sections/Header'
import Hero from './sections/Hero'

function App() {
  return (
    <>
      <div className='min-h-[97vh] relative'>
        <Header />
        <div className="bg-gradient-to-b from-[rgba(195,222,255,0.33)] h-[100dvh] via-[rgba(216,216,216,0)] to-[rgba(190,220,255,0.22)] absolute w-screen -z-40"></div>
        <Hero />
      </div>
    </>
  )
}

export default App

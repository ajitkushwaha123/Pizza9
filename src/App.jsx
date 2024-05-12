import './App.css'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Outlets from './components/Outlets'
import Review from './components/Review'
import Social from './components/Social'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      {/* <Footer /> */}
      <Gallery />
      <Social />
      <Menu />
      <Review />
      <Outlets />
      <Journey />
    </>
  )
}

export default App

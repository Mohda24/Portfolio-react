
import Header from './components/Header/header'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import handleScrollBtn from './functions/scrollBtn'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () =>handleScrollBtn())
  }, [])
  return (
    <div id='up' className='container'>
      <Header />
      <div className='line' />
      <Hero />
      <div className='line' />
      <Main />
      <div className='line' />
      <Contact />
      <div className='line' />
      <Footer />
      <a href="#up">
        <div className="icon-keyboard_arrow_up scroll-btn"></div>
      </a>

    </div>
  )
}

export default App

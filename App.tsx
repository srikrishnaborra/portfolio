import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './static/css/App.css'
import './static/css/index.css'
import './static/css/main.b4492d3e.css'

// Components
import Navbar from './static/js/Components/Navbar.jsx'
import Hero from './static/js/Components/Hero.jsx'
import About from './static/js/Components/About.jsx'
import Experience from './static/js/Components/Experience.jsx'
import Education from './static/js/Components/Education.jsx'
import Skills from './static/js/Components/Skills.jsx'
import Projects from './static/js/Components/Projects.jsx'
import Contact from './static/js/Components/Contact.jsx'
import Footer from './static/js/Components/Footer.jsx'

// Context
import { ThemeProvider, useTheme } from './static/js/context/ThemeContext.jsx'

// MinimalSpinner: a simple, modern spinner
function MinimalSpinner() {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1.2,
        ease: 'linear',
      }}
      style={{
        width: 56,
        height: 56,
        border: '5px solid #232b4d',
        borderTop: '5px solid #00eaff',
        borderRadius: '50%',
        marginBottom: 32,
        boxShadow: '0 0 16px #00eaff44',
      }}
    />
  )
}

// TypingText component for typing effect with glowing cursor
function TypingText({ text, glow }: { text: string; glow?: boolean }) {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    setDisplayed('')
    setShowCursor(true)
    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i))
        i++
        setTimeout(type, 40)
      } else {
        setShowCursor(true)
      }
    }
    type()
    return () => { }
  }, [text])

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 500)
    return () => clearInterval(blink)
  }, [])

  // Render newlines as <br />
  const lines = displayed.split('\n')
  return (
    <span
      style={{
        color: '#b3c7f9',
        fontWeight: 500,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'monospace',
        whiteSpace: 'pre-line',
        textShadow: glow
          ? '0 0 8px #00eaff, 0 0 16px #00eaff, 0 0 32px #00eaff'
          : undefined,
        letterSpacing: 1.2,
      }}
    >
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
      <span
        style={{
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.2s',
          fontWeight: 700,
          color: '#00eaff',
          textShadow: glow
            ? '0 0 8px #00eaff, 0 0 16px #00eaff, 0 0 32px #00eaff'
            : undefined,
        }}
      >
        |
      </span>
    </span>
  )
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)
  const { isDark } = useTheme()

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Set data-theme on wrapper when it mounts/updates
    const wrapper = document.querySelector('.portfolio7-wrapper')
    if (wrapper) {
      wrapper.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }
  }, [isDark])

  if (isLoading) {
    return (
      <div className="portfolio7-wrapper" data-theme="dark">
        <div
          className="loading-screen"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            background: 'radial-gradient(ellipse at 60% 40%, #0a192f 60%, #00111a 100%)',
          }}
        >
          <MinimalSpinner />
          <TypingText text="Engineering reliable data platforms with clarity and purpose." glow />
        </div>
      </div>
    )
  }

  return (
    <div className="portfolio7-wrapper" data-theme={isDark ? 'dark' : 'light'}>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={isDark ? 'dark' : 'light'}
        />

        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

function PortfolioApp() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default PortfolioApp


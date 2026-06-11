import React, { useEffect, useState } from 'react'
import CanvasBackground from './components/CanvasBackground'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    // 1. SCROLL REVEAL OBSERVER
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target) // Stop observing once revealed
        }
      })
    }

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.15
    })

    const elementsToReveal = document.querySelectorAll('.reveal')
    elementsToReveal.forEach(el => revealObserver.observe(el))

    // 2. ACTIVE SECTION OBSERVER (for nav highlights)
    const activeCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const activeObserver = new IntersectionObserver(activeCallback, {
      rootMargin: '-40% 0px -50% 0px' // Trigger active when section occupies center viewport
    })

    const sections = document.querySelectorAll('section')
    sections.forEach(sec => activeObserver.observe(sec))

    // 3. NAV SCROLLED BACKGROUND EFFECTS
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavScrolled(true)
      } else {
        setNavScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      revealObserver.disconnect()
      activeObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Dynamic spatial particle background */}
      <CanvasBackground />

      {/* STICKY NAVBAR */}
      <nav 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: navScrolled ? '12px 40px' : '20px 40px',
          background: navScrolled ? 'rgba(6, 8, 14, 0.85)' : 'transparent',
          backdropFilter: navScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: navScrolled ? 'blur(16px)' : 'none',
          borderBottom: navScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '22px',
          background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          Siva.XR
        </div>

        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '24px'
        }}>
          {[
            { id: 'hero', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                style={{
                  color: activeSection === item.id ? 'var(--accent)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '14.5px',
                  transition: 'color 0.25s ease',
                  position: 'relative',
                  paddingBottom: '4px'
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span style={{
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'var(--accent)',
                    borderRadius: '1px',
                    animation: 'fadeIn 0.3s ease'
                  }} />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CORE PORTFOLIO SECTIONS */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* FOOTER */}
      <footer 
        style={{
          textAlign: 'center',
          padding: '40px 24px',
          background: 'rgba(5, 7, 12, 0.9)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          color: 'var(--text-muted)',
          fontSize: '14px',
          position: 'relative',
          zIndex: 2
        }}
      >
        <p>&copy; 2026 Siva Krishna Karri &bull; Senior Unity3D XR Engineer</p>
      </footer>
    </>
  )
}

export default App

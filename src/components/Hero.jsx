import React from 'react'
import { ArrowRight, Download, Send } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="container hero-section reveal active" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Intro Tag */}
        <span style={{
          display: 'inline-block',
          background: 'rgba(56, 189, 248, 0.1)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          color: '#38bdf8',
          fontSize: '14px',
          fontWeight: 600,
          padding: '6px 16px',
          borderRadius: '999px',
          marginBottom: '24px',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          Senior Unity3D XR Architect
        </span>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(38px, 6vw, 64px)',
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #ffffff 40%, #a5f3fc 70%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-1px'
        }}>
          Siva Krishna Karri
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 19px)',
          color: 'var(--text-muted)',
          maxWidth: '680px',
          margin: '0 auto 40px',
          lineHeight: 1.6
        }}>
          Specializing in scalable architecture, performance optimization, and immersive VR/AR applications across healthcare, aviation training, and interactive simulation domains.
        </p>

        {/* Call to Actions */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '64px'
        }}>
          <a href="#projects" className="btn">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="/Siva_Krishna_Karri_Resume.pdf" download className="btn-secondary">
            Download Resume <Download size={18} />
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch <Send size={18} />
          </a>
        </div>

        {/* METRICS DASHBOARD */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '24px',
          marginTop: '20px'
        }}>
          {[
            { value: '9+', label: 'Years Experience' },
            { value: '20+', label: 'XR Apps Delivered' },
            { value: '35%', label: 'Training Cost Cut' },
            { value: '90 FPS', label: 'VR Performance Target' }
          ].map((metric, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{
                padding: '24px',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                background: 'rgba(10, 15, 30, 0.3)'
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '32px',
                fontWeight: 700,
                color: 'var(--accent)',
                marginBottom: '4px',
                background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {metric.value}
              </div>
              <div style={{
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero

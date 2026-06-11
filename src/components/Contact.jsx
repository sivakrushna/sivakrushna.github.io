import React, { useState } from 'react'
import { Copy, Mail, Phone, Linkedin, Download, Check } from 'lucide-react'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const emailAddress = 'siva.unity3d@gmail.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="container reveal" style={{ maxWidth: '640px' }}>
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
        Let's discuss XR engineering pipelines, technical architecture, or team leadership opportunities.
      </p>

      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Email Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
          padding: '20px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid var(--border-color)',
          transition: 'all 0.25s ease'
        }}>
          <div style={{
            background: 'rgba(56, 189, 248, 0.1)',
            color: 'var(--accent)',
            width: '52px',
            height: '52px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            border: '1px solid rgba(56, 189, 248, 0.2)'
          }}>
            <Mail size={22} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', overflow: 'hidden', width: '100%' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-muted)', fontWeight: 600 }}>Email Address</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <a href={`mailto:${emailAddress}`} style={{ fontSize: '16px', color: '#ffffff', textDecoration: 'none', fontWeight: 500, wordBreak: 'break-all' }}>
                {emailAddress}
              </a>
              <button 
                onClick={copyToClipboard}
                style={{
                  background: copied ? 'rgba(52, 211, 153, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  border: copied ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
                  color: copied ? '#34d399' : 'var(--text-muted)',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s ease'
                }}
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>

        {/* LinkedIn Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
          padding: '20px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid var(--border-color)',
          transition: 'all 0.25s ease'
        }}>
          <div style={{
            background: 'rgba(129, 140, 248, 0.1)',
            color: 'var(--accent-purple)',
            width: '52px',
            height: '52px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            border: '1px solid rgba(129, 140, 248, 0.2)'
          }}>
            <Linkedin size={22} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', overflow: 'hidden', width: '100%' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-muted)', fontWeight: 600 }}>LinkedIn Profile</span>
            <a 
              href="https://www.linkedin.com/in/sivakrishna-karri-1a833893" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ fontSize: '16px', color: '#ffffff', textDecoration: 'none', fontWeight: 500, wordBreak: 'break-all' }}
            >
              linkedin.com/in/sivakrishna-karri
            </a>
          </div>
        </div>

        {/* Phone Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
          padding: '20px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.01)',
          border: '1px solid var(--border-color)',
          transition: 'all 0.25s ease'
        }}>
          <div style={{
            background: 'rgba(34, 211, 238, 0.1)',
            color: '#22d3ee',
            width: '52px',
            height: '52px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            border: '1px solid rgba(34, 211, 238, 0.2)'
          }}>
            <Phone size={22} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', overflow: 'hidden', width: '100%' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-muted)', fontWeight: 600 }}>Phone Number</span>
            <a href="tel:+918639277629" style={{ fontSize: '16px', color: '#ffffff', textDecoration: 'none', fontWeight: 500 }}>
              +91 86392 77629
            </a>
          </div>
        </div>

        {/* Resume Button */}
        <div style={{ marginTop: '10px', width: '100%' }}>
          <a 
            href="/Siva_Krishna_Karri_Resume.pdf" 
            download 
            className="btn" 
            style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '8px' }}
          >
            Download Full Resume (PDF) <Download size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact

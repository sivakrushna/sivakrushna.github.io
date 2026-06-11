import React, { useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all')

  const projectList = [
    {
      id: 1,
      title: 'Aviation Cabin Crew Training VR',
      category: 'xr',
      tag: 'Aviation • Virtual Reality',
      featured: true,
      videoType: 'youtube',
      videoSrc: 'https://www.youtube.com/embed/PdxB_EFY2oM',
      desc: 'Developed realistic cabin safety and emergency simulation training modules in virtual reality.',
      bullets: [
        'Built immersive physics interactions for oxygen masks, doors, and fire extinguishers.',
        'Used by 500+ aviation professionals, reducing training overhead by 35%.'
      ]
    },
    {
      id: 2,
      title: 'XR Flight Simulator & Cockpit Training',
      category: 'xr',
      tag: 'Aviation • VR & Simulation',
      featured: true,
      videoType: 'local',
      videoSrc: 'XRFlight_Video.mp4',
      desc: 'Developed an immersive flight training simulation for interactive cockpit procedures on mobile VR headsets.',
      bullets: [
        'Programmed high-fidelity hand interactions for 100+ dashboard dials, levers, and switches.',
        'Optimized graphics pipeline to target and maintain stable 90 FPS on standalone VR hardware.'
      ]
    },
    {
      id: 3,
      title: 'Relversiv VR Therapy Platform',
      category: 'xr',
      tag: 'Healthcare • VR',
      featured: true,
      videoType: 'youtube',
      videoSrc: 'https://www.youtube.com/embed/kSXS28j_Dms',
      desc: 'Led engineering of a VR-based chronic pain relief solution featuring guided clinical exercises.',
      bullets: [
        'Clinically adopted and validated by 1,000+ users.',
        'Built modular components for comfort, calibration, and player session statistics.'
      ]
    },
    {
      id: 4,
      title: 'Knife Sling – Mobile Arcade Game',
      category: 'games',
      tag: 'Games • Mobile',
      featured: false,
      link: 'https://play.google.com/store/apps/details?id=com.KushalGames.KnifeSling&hl=en_IN',
      desc: 'Developed and published a hyper-casual throwing game focusing on precision timing and rhythmic calculations.',
      bullets: [
        'Built in Unity3D with specialized mobile swipe physics and custom feedback loops.',
        'Engineered dynamic level gen, rotating target physics, and standard ad systems.'
      ]
    },
    {
      id: 5,
      title: 'Smart EMI & SIP Calculator',
      category: 'mobile',
      tag: 'Mobile • React Native',
      featured: false,
      link: 'https://play.google.com/store/apps/details?id=com.kushalapps.smartemisipcalculator&hl=en_IN',
      desc: 'Developed and published a cross-platform finance and investment tracking application.',
      bullets: [
        'Programmed with React Native and TypeScript, managing local storage state caches.',
        'Features interactive amortization timelines and graphical projections.'
      ]
    },
    {
      id: 6,
      title: 'AR Fashion Try-On',
      category: 'xr',
      tag: 'AR • Commerce',
      featured: false,
      desc: 'Real-time retail AR try-on application for clothing, makeup, and visual accessories.',
      bullets: [
        'Integrated face and body tracking engines utilizing ARCore and XZIMG.',
        'Optimized custom shader pipelines to represent realistic fabrics and metals.'
      ]
    },
    {
      id: 7,
      title: 'Olivia VR – Clinical Training',
      category: 'xr',
      tag: 'Healthcare • VR',
      featured: false,
      desc: 'Clinical training tool simulating medical hair removal procedures and skincare settings.',
      bullets: [
        'Developed interactive medical laser simulations inside immersive 3D clinics.',
        'Programmed step-by-step training guidance overlays and safety validations.'
      ]
    },
    {
      id: 8,
      title: 'Find The Sniper – Military Training',
      category: 'games',
      tag: 'Defense • Simulation',
      featured: false,
      desc: 'Sniper detection situational simulator built for military and situational awareness training.',
      bullets: [
        'Created randomized foliage, wind vectors, and terrain-based shooting scenarios.',
        'Focused on real-time decision making under environmental stress factors.'
      ]
    },
    {
      id: 9,
      title: 'Unity3D Games & Simulations',
      category: 'games',
      tag: 'Games • Simulation',
      featured: false,
      desc: 'Developed and optimized multiple 3D games (Ultimate Bike Stunts 3D, Real Car Driving Simulator).',
      bullets: [
        'Wrote custom gameplay loop architectures, vehicular physics, and AI algorithms.',
        'Optimized memory usage, batch counts, and resource loading on low-end hardware.'
      ]
    }
  ]

  const filteredProjects = projectList.filter(proj => {
    if (activeTab === 'all') return true
    return proj.category === activeTab
  })

  return (
    <section id="projects" className="container reveal">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Projects</h2>
        
        {/* TABS HEADER */}
        <div style={{
          display: 'flex',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid var(--border-color)',
          borderRadius: '10px',
          padding: '4px',
          gap: '4px'
        }}>
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'xr', label: 'VR / AR' },
            { id: 'games', label: 'Games & Sim' },
            { id: 'mobile', label: 'Mobile Apps' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'var(--accent)' : 'transparent',
                color: activeTab === tab.id ? '#06080e' : 'var(--text-muted)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="projects-container">
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className={`project-card ${project.featured ? 'featured' : ''}`}
          >
            {project.featured ? (
              <div className="featured-grid">
                <div className="featured-video-pane">
                  <div className="video-wrapper">
                    {project.videoType === 'youtube' ? (
                      <iframe
                        src={project.videoSrc}
                        title={project.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video src={project.videoSrc} controls preload="metadata" loop muted playsInline />
                    )}
                  </div>
                </div>
                <div className="featured-info-pane">
                  <div className="project-header" style={{ marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#ffffff' }}>{project.title}</h3>
                    <span className="tag">{project.tag}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginBottom: '16px' }}>{project.desc}</p>
                  <ul className="highlight-list" style={{ marginBottom: '16px' }}>
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ fontSize: '14px', marginBottom: '6px' }}>{bullet}</li>
                    ))}
                  </ul>
                  {project.link && (
                    <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn" 
                        style={{
                          padding: '8px 16px',
                          fontSize: '13px',
                          borderRadius: '8px',
                          width: 'fit-content'
                        }}
                      >
                        Play on Store <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <div className="project-header">
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#ffffff' }}>{project.title}</h3>
                  <span className="tag">{project.tag}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{project.desc}</p>
                <ul className="highlight-list">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} style={{ fontSize: '13.5px', marginBottom: '4px' }}>{bullet}</li>
                  ))}
                </ul>
                {project.link && (
                  <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn" 
                      style={{
                        padding: '8px 16px',
                        fontSize: '13px',
                        borderRadius: '8px',
                        width: 'fit-content'
                      }}
                    >
                      Play on Store <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

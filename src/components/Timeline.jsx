import React from 'react'

const Timeline = () => {
  const experiences = [
    {
      role: 'Senior Unity3D XR Developer',
      company: 'Metaloga (Reinvision Labs Pvt Ltd)',
      period: 'Mar 2024 – Present',
      location: 'Hyderabad, India',
      bullets: [
        'Architecting and developing innovative XR therapy and chronic pain relief applications in Unity.',
        'Utilizing MRTK and OpenXR to build complex spatial interaction systems for Meta Quest headsets.'
      ]
    },
    {
      role: 'Senior Unity3D XR Developer',
      company: 'Reinvision Labs Pvt Ltd',
      period: 'Feb 2021 – Feb 2024',
      location: 'Hyderabad, India',
      bullets: [
        'Built immersive VR/MR training simulations for aviation professionals (crew safety and pilot cockpit familiarization modules).',
        'Implemented optimization pipelines that reduced training operation costs by 35%.'
      ]
    },
    {
      role: 'Senior Unity3D AR Developer',
      company: 'Kiksar Technologies Pvt Ltd',
      period: 'Dec 2018 – Dec 2020',
      location: 'Bangalore, India',
      bullets: [
        'Developed cutting-edge AR fashion try-on and beauty applications (clothing, lipsticks, liners).',
        'Integrated face and body tracking frameworks (ARCore, ARKit, ARFoundation, XZIMG).'
      ]
    },
    {
      role: 'Senior Unity3D Game Developer',
      company: 'Pixel Games Studio',
      period: 'Aug 2017 – Dec 2018',
      location: 'Hyderabad, India',
      bullets: [
        'Designed and developed popular mobile 3D action and racing games in Unity.',
        'Optimized code architectures and runtime resources to achieve steady 60 FPS on mid-range devices.'
      ]
    },
    {
      role: 'Senior Unity3D Game Developer',
      company: 'Capital Numbers Infotech Pvt. Ltd',
      period: 'Jan 2017 – Jul 2017',
      location: 'Chennai, India',
      bullets: [
        'Programmed immersive educational games and medical/healthcare simulations.',
        'Built dynamic interactive modules for cultural training and behavior modeling.'
      ]
    },
    {
      role: 'Unity3D Game Developer',
      company: 'The Red & Black',
      period: 'Sep 2014 – Jan 2017',
      location: 'Visakhapatnam, India',
      bullets: [
        'Developed core gameplay systems for multiplayer online RPGs and third-person adventure titles.',
        'Collaborated on multiplayer server syncing (Photon/Mirror) and asset database management.'
      ]
    }
  ]

  return (
    <section id="experience" className="container reveal">
      <h2 className="section-title">Career Timeline</h2>
      
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span style={{
                display: 'inline-block',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
                color: 'var(--accent)',
                fontSize: '11px',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '999px',
                marginBottom: '10px',
                textTransform: 'uppercase'
              }}>
                {exp.period}
              </span>
              
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-main)' }}>{exp.role}</h3>
              
              <div style={{ 
                fontSize: '13px', 
                color: 'var(--text-muted)', 
                marginBottom: '14px',
                fontWeight: 500
              }}>
                {exp.company} &bull; {exp.location}
              </div>
              
              <ul className="highlight-list">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ fontSize: '14px', marginBottom: '6px' }}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline

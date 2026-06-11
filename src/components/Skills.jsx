import React from 'react'
import { Code, Eye, Layers, ShieldCheck } from 'lucide-react'

const Skills = () => {
  const skillGroups = [
    {
      title: 'XR Platforms & SDKs',
      icon: <Layers size={22} />,
      accent: '#38bdf8',
      skills: ['MRTK 2/3', 'OpenXR', 'Oculus SDK', 'XR Interaction Toolkit', 'AR Foundation', 'ARCore & ARKit', 'Vuforia', 'XZIMG Face Tracking']
    },
    {
      title: 'Graphics & Rendering',
      icon: <Eye size={22} />,
      accent: '#818cf8',
      skills: ['HLSL Shaders', 'Shader Graph', 'Universal Render Pipeline (URP)', 'HDRP Pipeline', 'Particle Systems', 'Post-Processing Effects', 'Lighting & Baking']
    },
    {
      title: 'Programming & Logic',
      icon: <Code size={22} />,
      accent: '#22d3ee',
      skills: ['C# (.NET)', 'Game Loop Design', 'Custom Editor Windows', 'TypeScript', 'React Native (Mobile)', 'AI & State Machines', 'Physics & Rigidbodies']
    },
    {
      title: 'Optimization & Systems',
      icon: <ShieldCheck size={22} />,
      accent: '#34d399',
      skills: ['Unity Profiler', 'Memory Profiling', 'Draw Call Batching', 'Photon PUN2 / Mirror', 'Jenkins CI/CD', 'Git Version Control', 'Firebase & PlayFab']
    }
  ]

  return (
    <section id="skills" className="container reveal">
      <h2 className="section-title">Technical Expertise</h2>
      
      <div className="grid-2">
        {skillGroups.map((group, index) => (
          <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                background: `rgba(${group.accent === '#38bdf8' ? '56, 189, 248' : group.accent === '#818cf8' ? '129, 140, 248' : group.accent === '#22d3ee' ? '34, 211, 238' : '52, 211, 153'}, 0.1)`,
                color: group.accent,
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {group.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-main)' }}>{group.title}</h3>
            </div>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {group.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    color: 'var(--text-muted)',
                    fontSize: '13px',
                    fontWeight: 500,
                    padding: '6px 14px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = group.accent
                    e.target.style.color = '#ffffff'
                    e.target.style.background = `rgba(${group.accent === '#38bdf8' ? '56, 189, 248' : group.accent === '#818cf8' ? '129, 140, 248' : group.accent === '#22d3ee' ? '34, 211, 238' : '52, 211, 153'}, 0.05)`
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.04)'
                    e.target.style.color = 'var(--text-muted)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.02)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

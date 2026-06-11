import React from 'react'
import { Cpu, Layers, Users } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="container reveal">
      <h2 className="section-title">Executive Profile</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        
        {/* Bio Card */}
        <div className="glass-card">
          <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-main)' }}>
            I am a <b>Senior Unity3D XR Developer</b> with over <b>9 years</b> of specialized experience in architecting, developing, and deploying high-performance virtual reality (VR), augmented reality (AR), and mobile gaming products. 
            My technical focus lies at the intersection of robust design patterns, custom shader programming, and critical runtime optimizations. I have successfully led engineering efforts for over 20 enterprise XR applications across healthcare therapies, military defense simulators, and aviation safety training programs.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid-3">
          
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: 'rgba(56, 189, 248, 0.1)',
              color: '#38bdf8',
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Layers size={24} />
            </div>
            <h3>XR Architecture & Strategy</h3>
            <p style={{ fontSize: '14px' }}>
              Building highly modular, maintainable, and decoupled codebases in Unity. Expert integration of OpenXR, MRTK, and Oculus SDKs using scalable interaction frameworks.
            </p>
          </div>

          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: 'rgba(129, 140, 248, 0.1)',
              color: '#818cf8',
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Cpu size={24} />
            </div>
            <h3>Performance Tuning</h3>
            <p style={{ fontSize: '14px' }}>
              Deep profiling (Unity Profiler, GPU tools) to locate bottlenecks. Expert in memory management, draw call minimization (texture atlasing, batching), and shader optimization.
            </p>
          </div>

          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: 'rgba(34, 211, 238, 0.1)',
              color: '#22d3ee',
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={24} />
            </div>
            <h3>Team & Delivery Ownership</h3>
            <p style={{ fontSize: '14px' }}>
              Owning end-to-end delivery pipelines. Acts as primary client-facing engineer for reviews. Mentors junior developers and implements Agile scrum patterns to optimize timelines.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About

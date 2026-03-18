import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

/* Rotating text for the typewriter */
const roles = [
  'Building innovative solutions with code',
  'Passionate about AI & Machine Learning',
  'Full Stack MERN Developer',
  'Turning ideas into reality',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 60);
    } else if (!isDeleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length - 1)), 35);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden bg-grid"
    >
      {/* Background orbs */}
      <div className="gradient-orb w-[500px] h-[500px] bg-cyan-500 -top-40 -left-40" />
      <div className="gradient-orb w-[400px] h-[400px] bg-purple-600 bottom-20 right-10" />
      <div className="gradient-orb w-[300px] h-[300px] bg-blue-600 top-1/2 left-1/2" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
        {/* ---- Left: Text Content ---- */}
        <div className="flex-1 text-center lg:text-left animate-fade-in">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-glow" />
            <span className="text-accent text-sm font-medium">Available for opportunities</span>
          </div>

          <p className="text-slate-400 text-lg md:text-xl mb-2 font-light">Hello, I'm</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            <span className="text-gradient">ARPIT</span>{' '}
            <span className="text-white">SHARMA</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-300 mb-4">
            CSE AI/ML Engineer
          </h2>

          {/* Typewriter */}
          <div className="h-8 mb-8">
            <p className="text-slate-400 text-base md:text-lg font-mono">
              {text}
              <span className="text-accent animate-blink ml-0.5">|</span>
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/resume.pdf" download className="btn-primary flex items-center justify-center gap-2">
              <FiDownload size={16} />
              Download Resume
            </a>
            <a href="/contact" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center gap-2">
              <HiOutlineMail size={16} />
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 justify-center lg:justify-start">
            {[
              { value: '10+', label: 'Projects' },
              { value: '5+', label: 'Certificates' },
              { value: '1000+', label: 'DSA Problems' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Right: Code Editor Illustration ---- */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-lg animate-float">
          <div className="code-editor w-full">
            <div className="editor-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="text-xs text-slate-500 ml-3 font-mono">developer.js</span>
            </div>
            <div className="editor-body">
              <p>
                <span className="keyword">const</span>{' '}
                <span className="variable">developer</span>{' '}
                <span className="bracket">= {'{'}</span>
              </p>
              <p className="ml-6">
                <span className="property">name</span>:{' '}
                <span className="string">"Arpit Sharma"</span>,
              </p>
              <p className="ml-6">
                <span className="property">role</span>:{' '}
                <span className="string">"CSE AI/ML Engineer"</span>,
              </p>
              <p className="ml-6">
                <span className="property">skills</span>:{' '}
                <span className="bracket">[</span>
                <span className="string">"React"</span>,{' '}
                <span className="string">"Node.js"</span>,{' '}
                <span className="string">"Python"</span>
                <span className="bracket">]</span>,
              </p>
              <p className="ml-6">
                <span className="property">passion</span>:{' '}
                <span className="string">"Building the future"</span>,
              </p>
              <p className="ml-6">
                <span className="property">hireable</span>:{' '}
                <span className="keyword">true</span>,
              </p>
              <p>
                <span className="bracket">{'}'}</span>;
              </p>
              <br />
              <p className="comment">// Let's build something amazing!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-slate-500">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
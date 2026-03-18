import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';

/* Navigation link data */
const navLinks = [
  { name: 'Home', path: '/', sectionId: 'hero' },
  { name: 'About', path: '/about', sectionId: 'about' },
  { name: 'Skills', path: '/skills', sectionId: 'skills' },
  { name: 'Projects', path: '/projects', sectionId: 'projects' },
  { name: 'Certificates', path: '/certificates', sectionId: 'certificates' },
  { name: 'Contact', path: '/contact', sectionId: 'contact' },
];

const socialLinks = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/arpitsharma', label: 'GitHub' },
  { icon: <FaLinkedinIn size={18} />, href: 'https://linkedin.com/in/arpitsharma', label: 'LinkedIn' },
  { icon: <HiOutlineMail size={18} />, href: 'mailto:arpit.sharma@email.com', label: 'Email' },
  { icon: <FiPhone size={16} />, href: 'tel:+91XXXXXXXXXX', label: 'Phone' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const isHome = location.pathname === '/';

  /* Detect scroll position for navbar background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Scroll-spy: observe sections on the home page */
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  /* Determine active link */
  const isActive = (link) => {
    if (isHome) return activeSection === link.sectionId;
    return location.pathname === link.path;
  };

  /* Close mobile menu on navigation */
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-glass border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-18">
        {/* ---- Logo ---- */}
        <a
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tight text-gradient select-none"
        >
          &lt;AS /&gt;
        </a>

        {/* ---- Desktop Nav Links ---- */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                target={link.path === '/' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    isActive(link)
                      ? 'text-accent bg-accent/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
                {isActive(link) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* ---- Social Icons (desktop) ---- */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-slate-400 hover:text-accent transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* ---- Mobile Menu Button ---- */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-slate-300 hover:text-accent transition-colors p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* ---- Mobile Drawer ---- */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-primary/95 backdrop-blur-xl transition-all duration-400 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto translate-x-0'
            : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-2 pt-10">
          {navLinks.map((link) => (
            <li key={link.name} className="w-64">
              <a
                href={link.path}
                target={link.path === '/' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className={`block text-center px-6 py-3 rounded-xl text-base font-medium transition-all duration-300
                  ${
                    isActive(link)
                      ? 'text-accent bg-accent/10 glow-border'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-5 mt-10">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-slate-400 hover:text-accent transition-colors p-3 rounded-xl hover:bg-white/5"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
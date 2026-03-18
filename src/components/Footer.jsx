import { FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  'Full Stack Development',
  'AI / ML Solutions',
  'Web Application Design',
  'API Development',
  'Cloud Deployment',
];

const socials = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/arpitsharma', label: 'GitHub' },
  { icon: <FaLinkedinIn size={18} />, href: 'https://linkedin.com/in/arpitsharma', label: 'LinkedIn' },
  { icon: <FaTwitter size={18} />, href: 'https://twitter.com/arpitsharma', label: 'Twitter' },
  { icon: <HiOutlineMail size={18} />, href: 'mailto:arpit.sharma@email.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="text-2xl font-bold text-gradient mb-4 inline-block">
              &lt;AS /&gt;
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              CSE AI/ML Engineer building innovative digital solutions. Let's create something
              amazing together.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-slate-500 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Stay Connected</h4>
            <p className="text-slate-500 text-sm mb-4">
              Feel free to reach out for collaboration or just a friendly chat.
            </p>
            <a
              href="mailto:arpit.sharma@email.com"
              className="btn-outline inline-flex text-xs py-2.5 px-5"
            >
              Say Hello 👋
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs text-center">
            © {new Date().getFullYear()} Arpit Sharma. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <FaHeart className="text-red-500 text-[10px]" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
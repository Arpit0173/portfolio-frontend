import { useState } from 'react';
import axios from 'axios';
import useInView from '../hooks/useInView';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const contactInfo = [
  {
    icon: <HiOutlineMail size={22} />,
    label: 'Email',
    value: 'arpit.sharma@email.com',
    href: 'mailto:arpit.sharma@email.com',
  },
  {
    icon: <HiOutlinePhone size={22} />,
    label: 'Phone',
    value: '+91 XXXXXXXXXX',
    href: 'tel:+91XXXXXXXXXX',
  },
  {
    icon: <HiOutlineLocationMarker size={22} />,
    label: 'Location',
    value: 'India',
    href: null,
  },
];

const socials = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/arpitsharma', label: 'GitHub' },
  { icon: <FaLinkedinIn size={20} />, href: 'https://linkedin.com/in/arpitsharma', label: 'LinkedIn' },
  { icon: <FaTwitter size={20} />, href: 'https://twitter.com/arpitsharma', label: 'Twitter' },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await axios.post(`${API_URL}/api/contact`, form);
      setStatus({ type: 'success', message: res.data.message || 'Message sent successfully!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      const errMsg =
        err.response?.data?.error || 'Failed to send message. Please try again.';
      setStatus({ type: 'error', message: errMsg });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const inputClasses =
    'w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 focus:bg-white/[0.05]';

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="gradient-orb w-[400px] h-[400px] bg-cyan-600 bottom-10 right-0" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className={`scroll-hidden ${inView ? 'scroll-visible' : ''}`}>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to chat? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* ---- Contact Form ---- */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 scroll-hidden bg-card-glass rounded-2xl p-8 glow-border ${
              inView ? 'scroll-visible' : ''
            }`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className={`${inputClasses} mb-5`}
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClasses} mb-6 resize-none`}
            />

            {/* Status message */}
            {status.message && (
              <div
                className={`mb-5 px-4 py-3 rounded-xl text-sm font-medium ${
                  status.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend size={16} /> Send Message
                </>
              )}
            </button>
          </form>

          {/* ---- Contact Details ---- */}
          <div
            className={`lg:col-span-2 scroll-hidden flex flex-col gap-6 ${
              inView ? 'scroll-visible' : ''
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            {/* Info cards */}
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-card-glass rounded-2xl p-6 glow-border glow-border-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm text-white hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="bg-card-glass rounded-2xl p-6 glow-border">
              <p className="text-sm font-medium text-white mb-4">Follow me</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
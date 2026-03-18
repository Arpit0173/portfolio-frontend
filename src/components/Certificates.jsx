import useInView from '../hooks/useInView';
import { FiExternalLink } from 'react-icons/fi';

const certificates = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    color: 'from-cyan-500/20 to-blue-600/20',
    link: '#',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    color: 'from-orange-500/20 to-amber-600/20',
    link: '#',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera – Stanford',
    color: 'from-purple-500/20 to-pink-600/20',
    link: '#',
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'GeeksforGeeks',
    color: 'from-green-500/20 to-emerald-600/20',
    link: '#',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM – Coursera',
    color: 'from-blue-500/20 to-indigo-600/20',
    link: '#',
  },
  {
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    color: 'from-red-500/20 to-rose-600/20',
    link: '#',
  },
];

export default function Certificates() {
  const [ref, inView] = useInView();

  return (
    <section id="certificates" className="section-padding relative overflow-hidden bg-secondary/50">
      <div className="gradient-orb w-[350px] h-[350px] bg-pink-600 top-0 left-1/4" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className={`scroll-hidden ${inView ? 'scroll-visible' : ''}`}>
          <h2 className="section-title">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="section-subtitle">
            Credentials and certifications that validate my expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={cert.title}
              className={`scroll-hidden group bg-card-glass rounded-2xl overflow-hidden
                glow-border transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 glow-border-hover
                ${inView ? 'scroll-visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              {/* Certificate Image Placeholder */}
              <div
                className={`h-36 bg-gradient-to-br ${cert.color} flex items-center justify-center relative`}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                <svg
                  className="w-12 h-12 text-white/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-500 text-sm mb-5">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  View Certificate <FiExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import useInView from '../hooks/useInView';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Smart E-Commerce Platform',
    description:
      'Full-stack e-commerce application with AI-powered product recommendations, user authentication, payment integration, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AI'],
    github: '#',
    live: '#',
    color: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    title: 'AI Chatbot Assistant',
    description:
      'NLP-powered conversational chatbot using Python, TensorFlow, and a custom-trained language model with a React frontend.',
    tags: ['Python', 'TensorFlow', 'NLP', 'React', 'Flask'],
    github: '#',
    live: '#',
    color: 'from-purple-500/20 to-pink-600/20',
  },
  {
    title: 'DevConnect – Social Network',
    description:
      'Developer-centric social platform with profiles, posts, real-time messaging, project showcases, and GitHub integration.',
    tags: ['MERN', 'Socket.io', 'JWT', 'Cloudinary'],
    github: '#',
    live: '#',
    color: 'from-green-500/20 to-emerald-600/20',
  },
  {
    title: 'TaskFlow Pro',
    description:
      'Project management tool with Kanban boards, real-time collaboration, deadline tracking, and analytics dashboard.',
    tags: ['React', 'Express', 'MongoDB', 'WebSocket'],
    github: '#',
    live: '#',
    color: 'from-orange-500/20 to-amber-600/20',
  },
  {
    title: 'Weather Intelligence App',
    description:
      'Real-time weather forecasting dashboard with interactive maps, historical data visualization, and location-based alerts.',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'PWA'],
    github: '#',
    live: '#',
    color: 'from-blue-500/20 to-indigo-600/20',
  },
  {
    title: 'CryptoTracker Dashboard',
    description:
      'Cryptocurrency tracking app with live prices, portfolio management, trend analysis, and customizable watchlists.',
    tags: ['React', 'CoinGecko API', 'Redux', 'Tailwind'],
    github: '#',
    live: '#',
    color: 'from-yellow-500/20 to-orange-600/20',
  },
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="gradient-orb w-[400px] h-[400px] bg-blue-600 top-20 right-10" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className={`scroll-hidden ${inView ? 'scroll-visible' : ''}`}>
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects I've built — from full-stack apps to AI solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`scroll-hidden group bg-card-glass rounded-2xl overflow-hidden glow-border
                transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 glow-border-hover
                ${inView ? 'scroll-visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              {/* Gradient thumbnail placeholder */}
              <div
                className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center
                  transition-all duration-500 group-hover:opacity-90`}
              >
                <div className="text-4xl font-bold text-white/20 font-mono">
                  {project.title.charAt(0)}
                  {project.title.split(' ')[1]?.charAt(0) || ''}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/5 text-accent/80 border border-accent/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-accent transition-colors"
                  >
                    <FiGithub size={15} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-accent transition-colors"
                  >
                    <FiExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
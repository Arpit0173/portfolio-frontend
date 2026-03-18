import useInView from '../hooks/useInView';
import { FiBookOpen, FiCode, FiHeart } from 'react-icons/fi';

const cards = [
  {
    icon: <FiBookOpen size={28} />,
    title: 'Education',
    text: 'B.Tech in Computer Science Engineering (AI/ML) — currently pursuing a passion-driven degree focused on Artificial Intelligence and Machine Learning.',
  },
  {
    icon: <FiCode size={28} />,
    title: 'Experience',
    text: '10+ real-world projects built using the MERN stack, Python, and cloud technologies. Solved 1000+ DSA problems across platforms.',
  },
  {
    icon: <FiHeart size={28} />,
    title: 'Passion',
    text: 'Deeply passionate about AI/ML, full-stack development, and crafting elegant solutions that solve real-world problems.',
  },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background orb */}
      <div className="gradient-orb w-[400px] h-[400px] bg-purple-600 top-0 right-0" />

      <div ref={ref} className={`max-w-6xl mx-auto relative z-10 ${inView ? '' : ''}`}>
        {/* Title */}
        <div className={`scroll-hidden ${inView ? 'scroll-visible' : ''}`}>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know more about who I am, what I do, and what drives me.
          </p>
        </div>

        {/* Bio */}
        <div
          className={`scroll-hidden max-w-3xl mx-auto text-center mb-16 ${
            inView ? 'scroll-visible' : ''
          }`}
          style={{ transitionDelay: '0.15s' }}
        >
          <p className="text-slate-400 leading-relaxed text-base md:text-lg">
            I'm <span className="text-white font-semibold">Arpit Sharma</span>, a Computer
            Science Engineering student specializing in{' '}
            <span className="text-accent">Artificial Intelligence & Machine Learning</span>. I love
            turning complex problems into simple, beautiful, and intuitive solutions. My journey
            spans full-stack web development with the MERN stack, competitive programming, and
            exploring the frontiers of AI. I believe great software is built at the intersection of
            engineering excellence and creative thinking.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`scroll-hidden bg-card-glass rounded-2xl p-8 text-center
                glow-border glow-border-hover transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1
                ${inView ? 'scroll-visible' : ''}`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
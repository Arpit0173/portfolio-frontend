import useInView from '../hooks/useInView';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 88 },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML / CSS', level: 92 },
      { name: 'React.js', level: 82 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Next.js', level: 70 },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'MongoDB', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'AWS Cloud', level: 60 },
      { name: 'Docker', level: 55 },
      { name: 'DSA', level: 88 },
    ],
  },
];

function SkillBar({ name, level, animate, delay }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-sm font-mono text-accent">{level}%</span>
      </div>
      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 progress-bar-fill ${
            animate ? 'animate' : ''
          }`}
          style={{ '--progress': `${level}%`, transitionDelay: `${delay}s` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-secondary/50">
      <div className="gradient-orb w-[400px] h-[400px] bg-cyan-500 bottom-0 left-0" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className={`scroll-hidden ${inView ? 'scroll-visible' : ''}`}>
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I've been working with.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={cat.category}
              className={`scroll-hidden bg-card-glass rounded-2xl p-8 glow-border glow-border-hover transition-all duration-500 ${
                inView ? 'scroll-visible' : ''
              }`}
              style={{ transitionDelay: `${0.15 + catIdx * 0.12}s` }}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {cat.category}
              </h3>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  animate={inView}
                  delay={0.3 + catIdx * 0.12 + i * 0.1}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
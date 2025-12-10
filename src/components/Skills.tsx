import { Code2, Database, Wrench, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      color: '#58a6ff',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 },
      ],
    },
    {
      icon: Database,
      title: 'Backend',
      color: '#7ee787',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Express', level: 88 },
        { name: 'MongoDB', level: 82 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools',
      color: '#bc8cff',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 78 },
      ],
    },
    {
      icon: Zap,
      title: 'Other',
      color: '#ffa657',
      skills: [
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 80 },
        { name: 'Testing', level: 85 },
        { name: 'Agile', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-[#0d1117]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Code2 className="w-6 h-6 text-[#58a6ff]" />
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-[#ff7b72]">interface</span>{' '}
              <span className="text-[#7ee787]">Skills</span>{' '}
              <span className="text-[#c9d1d9]">{'{'}</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition-all"
            >
              <div className="flex items-center space-x-3 mb-6">
                <category.icon
                  className="w-6 h-6 animate-float hover:scale-125 transition-transform duration-300"
                  style={{ color: category.color, animationDelay: `${index * 0.2}s` }}
                />
                <h3 className="font-mono text-xl font-bold text-[#c9d1d9]">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-[#c9d1d9]">{skill.name}</span>
                      <span className="font-mono text-xs text-[#8b949e]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#0d1117] rounded-full overflow-hidden relative group">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out relative"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          backgroundColor: category.color,
                          boxShadow: `0 0 10px ${category.color}`,
                        }}
                      >
                        <div
                          className="absolute inset-0 animate-pulse"
                          style={{
                            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                            animation: 'shimmer 2s infinite',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#30363d]">
                <pre className="font-mono text-xs text-[#8b949e]">
                  <code>
                    <span className="text-[#ff7b72]">const</span> <span className="text-[#7ee787]">{category.title.toLowerCase()}</span>
                    <span className="text-[#ff7b72]"> = </span>
                    <span className="text-[#a5d6ff]">'expert'</span>;
                  </code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition-all">
          <div className="font-mono text-xs text-[#8b949e] mb-4">// Additional Technologies</div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Redux', color: '#7e57c2' },
              { name: 'Vue.js', color: '#42b883' },
              { name: 'Python', color: '#3776ab' },
              { name: 'Java', color: '#f89820' },
              { name: 'Kubernetes', color: '#326ce5' },
              { name: 'Redis', color: '#dc382d' },
              { name: 'Elasticsearch', color: '#005571' },
              { name: 'WebSockets', color: '#00d9ff' },
              { name: 'OAuth', color: '#eb5424' },
              { name: 'Stripe', color: '#635bff' },
              { name: 'Firebase', color: '#ffca28' },
              { name: 'Terraform', color: '#7b42bc' },
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#0d1117] border-2 border-[#30363d] rounded font-mono text-sm hover:scale-105 transition-all duration-300 cursor-default animate-float"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  borderColor: `${tech.color}40`,
                  color: tech.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tech.color;
                  e.currentTarget.style.boxShadow = `0 0 15px ${tech.color}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${tech.color}40`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="text-right mt-4">
          <span className="text-[#c9d1d9] font-mono text-3xl">{'}'}</span>
        </div>
      </div>
    </section>
  );
}

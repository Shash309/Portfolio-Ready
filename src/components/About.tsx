import { User, Code2, Rocket, Coffee } from 'lucide-react';
import profileImage from '../assets/WhatsApp Image 2025-10-10 at 13.42.14_488bf455.jpg';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '20+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
    { icon: Rocket, label: 'Years Experience', value: '3+' },
  ];

  return (
    <section id="about" ref={sectionRef} className={`py-20 px-4 bg-[#0d1117] transition-all duration-700 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-6 h-6 text-[#58a6ff]" />
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-[#ff7b72]">class</span>{' '}
              <span className="text-[#7ee787]">About</span>{' '}
              <span className="text-[#c9d1d9]">{'{'}</span>
            </h2>
          </div>
          <div className="border-l-4 border-[#58a6ff] pl-4">
            <p className="text-[#8b949e] font-mono mb-4">
              // README.md
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 flex flex-col items-center justify-center space-y-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#58a6ff] via-[#7ee787] to-[#bc8cff] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500 animate-glow"></div>
              <div className="relative bg-[#161b22] border-4 border-[#30363d] rounded-full p-1 group-hover:border-[#58a6ff] transition-all duration-300">
                <img
                  src={profileImage}
                  alt="Shashwat Sharma"
                  className="w-64 h-64 object-cover rounded-full"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
            </div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#161b22] border border-[#30363d] rounded px-4 py-2 hover:border-[#7ee787] hover:shadow-[0_0_15px_rgba(126,231,135,0.4)] transition-all duration-300 group cursor-pointer"
            >
              <span className="font-mono text-sm text-[#7ee787] group-hover:text-[#7ee787]">
                shashwat@dev:~$
              </span>
            </a>
          </div>

          <div className="md:col-span-2 grid md:grid-cols-1 gap-8">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="font-mono text-xs text-[#8b949e]">README.md</span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <h3 className="text-[#58a6ff] text-lg mb-2"># About Me</h3>
                <p className="text-[#c9d1d9] leading-relaxed">
                AI & ML developer passionate about building intelligent and impactful solutions. I specialize in developing data-driven systems and scalable applications using modern technologies and best practices.
                </p>
              </div>
              <div>
                <h3 className="text-[#58a6ff] text-lg mb-2">## What I Do</h3>
                <ul className="list-disc list-inside text-[#c9d1d9] space-y-1">
                  <li>Design and develop responsive web applications</li>
                  <li>Write clean, maintainable, and efficient code</li>
                  <li>Collaborate with teams to deliver high-quality products</li>
                  <li>Continuously learn and adapt to new technologies</li>
                </ul>
              </div>
            </div>
          </div>

            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition-all transform hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <stat.icon className="w-8 h-8 text-[#58a6ff]" />
                      <div>
                        <p className="font-mono text-xs text-[#8b949e]">{stat.label}</p>
                        <p className="font-mono text-2xl font-bold text-[#c9d1d9]">{stat.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
          <div className="font-mono text-xs text-[#8b949e] mb-4">// Current Focus</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Advancing in Artificial Intelligence & Machine Learning', 'Developing Intelligent Full-Stack Applications', 'Exploring AI-Powered Automation & Creative Tools'].map((focus, index) => (
              <div
                key={index}
                className="bg-[#0d1117] border border-[#30363d] rounded p-4 hover:border-[#7ee787] transition-colors"
              >
                <span className="text-[#7ee787]">→</span> <span className="text-[#c9d1d9] font-mono text-sm">{focus}</span>
              </div>
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

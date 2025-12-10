import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Folder, Terminal } from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
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

  const projects = [
    {
      title: 'Face Unlock System',
      description: 'A modern, robust web-based face unlock and liveness verification system using React (frontend) and FastAPI (backend). The system uses face recognition and gesture-based liveness detection for secure access control.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'FastAPI', 'Python', 'OpenCV', 'face_recognition', 'MediaPipe'],
      github: 'https://github.com/Shash309/FaceUnlockSystem__Spoof-proof',
      live: 'https://github.com/Shash309/FaceUnlockSystem__Spoof-proof',
      status: 'Beta',
    },
    {
      title: 'DrugCheck',
      description: 'DrugCheck is an AI-powered web app for identifying drug interactions and analyzing medication safety. It offers smart drug search, AI insights, and PDF reports. Built with React, TypeScript, and Mistral AI, it ensures safer medication management—always consult your healthcare provider.',
      tech: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'React Router', 'React Icons', 'jsPDF', 'Mistral AI', 'RxNorm API', 'Mistral AI API'],
      github: 'https://github.com/Shash309/DrugCheck',
      live: 'https://drug-check.vercel.app/',
      status: 'Production',
    },
    {
      title: 'NutriNion',
      description: 'A Django-based food tracking application that helps users monitor their nutritional intake and maintain a healthy diet.',
      tech: ['Django', 'Python', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'Nutritionix API', "Django Auth System"],
      github: 'https://github.com/Shash309/NutriNion',
      live: 'https://github.com/Shash309/NutriNion',
      status: 'Beta',
    },
    {
      title: 'Career Path Explorer',
      description: 'A compact, explainable career recommendation engine that maps student profiles (skills, education, interests) to ranked career suggestions. Focused on reproducible ML pipelines and an interactive frontend for exploration.',
      tech: ['React', 'Socket.io', 'Express', 'JWT'],
      github: 'https://github.com',
      live: 'https://example.com',
      status: 'Production',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className={`py-20 px-4 bg-[#010409] transition-all duration-700 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Folder className="w-6 h-6 text-[#58a6ff]" />
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-[#ff7b72]">const</span>{' '}
              <span className="text-[#7ee787]">projects</span>{' '}
              <span className="text-[#ff7b72]">=</span>{' '}
              <span className="text-[#c9d1d9]">{'['}</span>
            </h2>
          </div>
        </div>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden">
          <div className="flex items-center border-b border-[#30363d] bg-[#0d1117]">
            <div className="flex space-x-1 px-4 py-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="flex-1 flex space-x-0 overflow-x-auto">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 font-mono text-sm border-r border-[#30363d] whitespace-nowrap transition-colors ${
                    activeTab === index
                      ? 'bg-[#161b22] text-[#58a6ff] border-t-2 border-t-[#58a6ff]'
                      : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'
                  }`}
                >
                  {project.title.toLowerCase().replace(/\s+/g, '-')}.tsx
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-[#c9d1d9] mb-2">{projects[activeTab].title}</h3>
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-[#7ee787]" />
                  <span className={`font-mono text-xs px-2 py-1 rounded ${
                    projects[activeTab].status === 'Production'
                      ? 'bg-[#238636] text-[#7ee787]'
                      : 'bg-[#9e6a03] text-[#e3b341]'
                  }`}>
                    {projects[activeTab].status}
                  </span>
                </div>
              </div>
              <div className="flex space-x-3">
                <a
                  href={projects[activeTab].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#58a6ff] transition-colors"
                >
                  <Github className="w-5 h-5 text-[#8b949e] hover:text-[#58a6ff]" />
                </a>
                <a
                  href={projects[activeTab].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#0d1117] border border-[#30363d] rounded hover:border-[#58a6ff] transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-[#8b949e] hover:text-[#58a6ff]" />
                </a>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 mb-6">
              <div className="font-mono text-xs text-[#8b949e] mb-3">// Description</div>
              <p className="text-[#c9d1d9] leading-relaxed">{projects[activeTab].description}</p>
            </div>

            <div>
              <div className="font-mono text-xs text-[#8b949e] mb-3">// Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {projects[activeTab].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#0d1117] border border-[#30363d] rounded-full font-mono text-sm text-[#58a6ff] hover:border-[#58a6ff] hover:shadow-[0_0_15px_rgba(88,166,255,0.5)] hover:scale-110 transition-all duration-300 cursor-default animate-float"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-right mt-4">
          <span className="text-[#c9d1d9] font-mono text-3xl">{']'}</span>
        </div>

        <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Github className="w-5 h-5 text-[#58a6ff]" />
            <h3 className="font-mono text-lg text-[#c9d1d9]">GitHub Activity</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Repositories', value: '20+' },
              { label: 'Contributions', value: '100+' },
              { label: 'Stars Earned', value: '30+' },
              { label: 'Followers', value: '50' },
            ].map((stat, index) => (
              <div key={index} className="bg-[#0d1117] border border-[#30363d] rounded p-4 text-center">
                <p className="font-mono text-2xl font-bold text-[#58a6ff] mb-1">{stat.value}</p>
                <p className="font-mono text-xs text-[#8b949e]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

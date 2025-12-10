import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  const fullText =
    'AI & ML Engineer | Bridging Creativity and Computation';

  // Typing animation
  useEffect(() => {
    let index = 0;

    const typingInterval = window.setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setTypingDone(true);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);
  // ---------------------------------------------

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]" style={{ animationDelay: '0.1s' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-[#8b949e] font-mono text-xs">
          {'// Initialize portfolio'}
        </div>
        <div className="absolute top-40 right-20 text-[#8b949e] font-mono text-xs">
          {'/* Web Developer */'}
        </div>
        <div className="absolute bottom-40 left-20 text-[#8b949e] font-mono text-xs">
          {'const skills = [...]'}
        </div>
        <div className="absolute bottom-20 right-10 text-[#8b949e] font-mono text-xs">
          {'// Building the future'}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Import tag */}
        <div className="mb-6 inline-block">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-2 font-mono text-sm">
            <span className="text-[#ff7b72]">import</span>{' '}
            <span className="text-[#7ee787]">Developer</span>{' '}
            <span className="text-[#ff7b72]">from</span>{' '}
            <span className="text-[#a5d6ff]">'@shashwat/portfolio'</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-[#c9d1d9]">Hi, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] via-[#bc8cff] to-[#7ee787] animate-gradient">
            Shashwat Sharma
          </span>
        </h1>

        {/* Typing text + cursor */}
        <div className="mb-8 h-12 flex items-center justify-center">
          <span className="font-mono text-xl md:text-2xl text-[#8b949e]">
            {displayText}
            <span
              className={`ml-1 text-[#58a6ff] ${
                typingDone ? 'animate-pulse opacity-80' : ''
              }`}
            >
              |
            </span>
          </span>
        </div>

        {/* Terminal window */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
          <div className="flex items-center space-x-2 mb-4 border-b border-[#30363d] pb-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono text-xs text-[#8b949e] ml-4">
              developer.js
            </span>
          </div>

          <pre className="font-mono text-sm">
            <code>
              <span className="text-[#ff7b72]">const</span>{' '}
              <span className="text-[#7ee787]">developer</span>{' '}
              <span className="text-[#ff7b72]">=</span> {'{\n'}
              {'  '}
              <span className="text-[#79c0ff]">name</span>:{' '}
              <span className="text-[#a5d6ff]">
                'Shashwat Sharma'
              </span>
              ,{'\n'}
              {'  '}
              <span className="text-[#79c0ff]">skills</span>: [
              <span className="text-[#a5d6ff]">'React'</span>,{' '}
              <span className="text-[#a5d6ff]">'TypeScript'</span>,{' '}
              <span className="text-[#a5d6ff]">'Node.js'</span>],{'\n'}
              {'  '}
              <span className="text-[#79c0ff]">passion</span>:{' '}
              <span className="text-[#a5d6ff]">
                'Building innovative solutions'
              </span>
              {'\n'}
              {'};'}
            </code>
          </pre>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#238636] hover:bg-[#2ea043] text-white font-mono rounded-lg transition-all transform hover:scale-105 border border-[#2ea043]"
          >
            view_projects()
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent hover:bg-[#161b22] text-[#58a6ff] font-mono rounded-lg transition-all border border-[#58a6ff]"
          >
            get_in_touch()
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-[#8b949e]" />
      </a>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#161b22]/80 backdrop-blur-md border-b border-[#30363d]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Terminal className="w-6 h-6 text-[#58a6ff] group-hover:rotate-12 transition-transform" />
            <span className="font-mono text-lg font-bold">
              <span className="text-[#58a6ff]">shashwat</span>
              <span className="text-[#8b949e]">@dev</span>
              <span className="text-[#7ee787]">:~$</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-sm text-[#c9d1d9] hover:text-[#58a6ff] transition-colors relative group"
              >
                <span className="text-[#8b949e]">const</span> {item.toLowerCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#58a6ff] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Shash309" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-[#58a6ff] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shashwat-sharma309/" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-[#58a6ff] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:shashwatsharma309@gmail.com" className="text-[#8b949e] hover:text-[#58a6ff] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            className="md:hidden text-[#c9d1d9]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#30363d] py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-mono text-sm text-[#c9d1d9] hover:text-[#58a6ff]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-[#8b949e]">const</span> {item.toLowerCase()}
              </a>
            ))}
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-[#58a6ff]">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-[#58a6ff]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:shashwat@example.com" className="text-[#8b949e] hover:text-[#58a6ff]">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

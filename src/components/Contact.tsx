import { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, Terminal } from 'lucide-react';
import { useToast } from './ToastContainer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className={`py-20 px-4 bg-[#010409] transition-all duration-700 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Terminal className="w-6 h-6 text-[#58a6ff]" />
            <h2 className="text-3xl md:text-4xl font-bold font-mono">
              <span className="text-[#ff7b72]">function</span>{' '}
              <span className="text-[#7ee787]">getInTouch</span>
              <span className="text-[#c9d1d9]">{'() {'}</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-6">
              <div className="font-mono text-xs text-[#8b949e] mb-4">// Contact Information</div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#58a6ff] mt-1" />
                  <div>
                    <p className="font-mono text-sm text-[#8b949e] mb-1">Email</p>
                    <a
                      href="mailto:shashwatsharma309@gmail.com"
                      className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors"
                    >
                      shashwatsharma309@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#7ee787] mt-1" />
                  <div>
                    <p className="font-mono text-sm text-[#8b949e] mb-1">Location</p>
                    <p className="text-[#c9d1d9]">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <div className="font-mono text-xs text-[#8b949e] mb-4">// Quick Response Time</div>
              <pre className="font-mono text-sm">
                <code>
                  <span className="text-[#ff7b72]">const</span> <span className="text-[#7ee787]">responseTime</span> <span className="text-[#ff7b72]">=</span> {'{\n'}
                  {'  '}<span className="text-[#79c0ff]">email</span>: <span className="text-[#a5d6ff]">'24 hours'</span>,{'\n'}
                  {'  '}<span className="text-[#79c0ff]">urgent</span>: <span className="text-[#a5d6ff]">'same day'</span>{'\n'}
                  {'};'}
                </code>
              </pre>
            </div>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="font-mono text-xs text-[#8b949e]">contact-form.tsx</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-sm text-[#8b949e] mb-2">
                  <span className="text-[#ff7b72]">const</span> name <span className="text-[#ff7b72]">=</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded px-4 py-3 text-[#c9d1d9] font-mono focus:outline-none focus:border-[#58a6ff] focus:shadow-[0_0_10px_rgba(88,166,255,0.3)] transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-[#8b949e] mb-2">
                  <span className="text-[#ff7b72]">const</span> email <span className="text-[#ff7b72]">=</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded px-4 py-3 text-[#c9d1d9] font-mono focus:outline-none focus:border-[#58a6ff] focus:shadow-[0_0_10px_rgba(88,166,255,0.3)] transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block font-mono text-sm text-[#8b949e] mb-2">
                  <span className="text-[#ff7b72]">const</span> message <span className="text-[#ff7b72]">=</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded px-4 py-3 text-[#c9d1d9] font-mono focus:outline-none focus:border-[#58a6ff] focus:shadow-[0_0_10px_rgba(88,166,255,0.3)] transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full font-mono py-3 px-6 rounded flex items-center justify-center space-x-2 transition-all ${
                  submitted
                    ? 'bg-[#238636] text-[#7ee787] border border-[#2ea043]'
                    : 'bg-[#58a6ff] text-white hover:bg-[#1f6feb] border border-[#1f6feb]'
                }`}
              >
                {submitted ? (
                  <>
                    <span>✓ Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>sendMessage()</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="text-right mt-4">
          <span className="text-[#c9d1d9] font-mono text-3xl">{'}'}</span>
        </div>

        <footer className="mt-16 pt-8 border-t border-[#30363d] text-center">
          <div className="font-mono text-sm text-[#8b949e] mb-4">
            <span className="text-[#ff7b72]">console</span>.
            <span className="text-[#7ee787]">log</span>(
            <span className="text-[#a5d6ff]">'Built with passion and lots of coffee'</span>);
          </div>
          <p className="font-mono text-xs text-[#8b949e]">
            © 2025 Shashwat Sharma. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[#8b949e] mt-2">
            Made with <span className="text-[#ff7b72]">{'<3'}</span> and React
          </p>
        </footer>
      </div>
    </section>
  );
}

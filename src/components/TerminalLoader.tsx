import { useEffect, useState } from 'react';

export default function TerminalLoader() {
  const [lines, setLines] = useState<string[]>([]);

  const bootSequence = [
    'Initializing portfolio...',
    'Loading dependencies...',
    '> npm install @shashwat/portfolio',
    '> Building components...',
    '✓ Header.tsx compiled',
    '✓ Hero.tsx compiled',
    '✓ Projects.tsx compiled',
    '✓ Skills.tsx compiled',
    '✓ Contact.tsx compiled',
    'Starting development server...',
    '> Ready! Opening portfolio...',
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden">
          <div className="flex items-center space-x-2 bg-[#0d1117] px-4 py-3 border-b border-[#30363d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <span className="ml-4 font-mono text-xs text-[#8b949e]">terminal</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="mb-4 text-[#7ee787]">
              shashwat@portfolio:~$ <span className="animate-pulse">_</span>
            </div>
            <div className="space-y-2">
              {lines.map((line, index) => (
                <div
                  key={index}
                  className={`${
                    line?.startsWith('>')
                      ? 'text-[#58a6ff]'
                      : line?.startsWith('✓')
                      ? 'text-[#7ee787]'
                      : 'text-[#c9d1d9]'
                  } animate-fadeIn`}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

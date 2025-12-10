import { useEffect, useState } from 'react';

interface CodeTypingProps {
  code: string;
  delay?: number;
}

export default function CodeTyping({ code, delay = 50 }: CodeTypingProps) {
  const [displayedCode, setDisplayedCode] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= code.length) {
        setDisplayedCode(code.slice(0, index));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [code, delay]);

  return (
    <span>
      {displayedCode}
      {!isComplete && <span className="animate-pulse text-[#58a6ff]">|</span>}
    </span>
  );
}

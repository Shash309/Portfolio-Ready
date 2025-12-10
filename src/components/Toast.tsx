import { useEffect } from 'react';
import { CheckCircle, XCircle, Info, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
    warning: AlertCircle,
  };

  const colors = {
    success: 'border-[#238636] bg-[#0d1117]',
    error: 'border-[#f85149] bg-[#0d1117]',
    info: 'border-[#58a6ff] bg-[#0d1117]',
    warning: 'border-[#d29922] bg-[#0d1117]',
  };

  const textColors = {
    success: 'text-[#7ee787]',
    error: 'text-[#ff7b72]',
    info: 'text-[#58a6ff]',
    warning: 'text-[#e3b341]',
  };

  const Icon = icons[type];

  return (
    <div className={`${colors[type]} border-2 rounded-lg px-4 py-3 shadow-lg animate-slideIn flex items-center space-x-3 min-w-[300px]`}>
      <Icon className={`w-5 h-5 ${textColors[type]} flex-shrink-0`} />
      <div className="flex-1">
        <p className="font-mono text-sm text-[#c9d1d9]">
          <span className={textColors[type]}>$ </span>
          {message}
        </p>
      </div>
      <button onClick={onClose} className="text-[#8b949e] hover:text-[#c9d1d9] transition-colors">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

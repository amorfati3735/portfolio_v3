
import React, { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import { ChevronDown } from '../icons/ChevronDownIcon';

export const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const stuffInto = ["generative art", "operating systems", "urban exploration", "philosophy"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <Button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
          Stuff I'm into now
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-card-bg border border-subtle-border ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {stuffInto.map(item => (
                <a key={item} href="#" className="block px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-800" role="menuitem">{item}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

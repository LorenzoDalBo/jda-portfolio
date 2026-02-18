import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center">
  <a href="/" className="flex items-center">
    <img 
      src={logo} 
      alt="JDA Soluções em Tecnologia" 
      className="h-16 w-auto object-contain transition-transform hover:scale-105" 
    />
  </a>
</div>
          </div>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

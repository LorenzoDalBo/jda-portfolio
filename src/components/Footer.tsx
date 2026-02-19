import { Facebook, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // 1. Função para interceptar o clique e rolar suavemente
  const handleScroll = (e) => {
    e.preventDefault(); 
    
    // Pega o href do link clicado (ex: "#services") e remove o "#" (fica "services")
    const targetId = e.currentTarget.getAttribute('href').replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Coluna 1: Redes Sociais (Não alterado) */}
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="https://www.facebook.com/solucoesjda" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <Facebook size={18} />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/solucoesjda/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/jda-solu%C3%A7%C3%B5es" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Colunas 2 e 3: Diferenciais (Adicionado onClick={handleScroll}) */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4">Diferenciais</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-gray-400">
              <li><a href="#services" onClick={handleScroll} className="hover:text-primary-400 transition-colors">Suporte Especializado</a></li>
              <li><a href="#services" onClick={handleScroll} className="hover:text-primary-400 transition-colors">Rede wi-fi mesh</a></li>
              <li><a href="#services" onClick={handleScroll} className="hover:text-primary-400 transition-colors">Roteamento</a></li>
              <li><a href="#services" onClick={handleScroll} className="hover:text-primary-400 transition-colors">Equipamentos em comodato</a></li>
              <li><a href="#services" onClick={handleScroll} className="hover:text-primary-400 transition-colors">Consultoria Tecnológica</a></li>
              <li><a href="#services" onClick={handleScroll} className="hover:text-primary-400 transition-colors">Rede Estruturada</a></li>
            </ul>
          </div>

          {/* Coluna 4: Empresa (Adicionado onClick={handleScroll}) */}
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" onClick={handleScroll} className="hover:text-primary-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" onClick={handleScroll} className="hover:text-primary-400 transition-colors">Portfólio</a></li>
              <li><a href="#contact" onClick={handleScroll} className="hover:text-primary-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} JDA'soluções. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
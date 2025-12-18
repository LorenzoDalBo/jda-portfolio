import { Facebook, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent mb-4">
              JDA'soluções
            </h3>
            <p className="text-gray-400">
              Transformando ideias em soluções digitais inovadoras desde 2014.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Infraestrutura em Nuvem</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Desenvolvimento</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Segurança</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Consultoria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" className="hover:text-primary-400 transition-colors">Portfólio</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} JDA'soluções. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Termos de Serviço</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

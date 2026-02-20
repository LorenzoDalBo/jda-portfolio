import { ArrowRight } from "lucide-react";
import heroImage from '../assets/hero-img.png';

export function Hero() {
  // 1. Função para interceptar o clique e rolar suavemente
  const handleScroll = (e) => {
    e.preventDefault(); // Evita que o "#services" vá para a URL
    
    const targetElement = document.getElementById('services'); // Busca a seção pelo ID
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Rolagem suave
        block: 'start'      // Alinha ao topo
      });
    }
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-primary-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Soluções em
              <span className="block pb-4 bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                Tecnologia
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Trabalhamos com uma metodologia baseada em inovação contínua,
              excelência técnica e soluções personalizadas, sempre alinhadas às
              necessidades de cada cliente. Com uma equipe experiente e
              atualizada, entregamos projetos eficientes e orientados ao
              crescimento sustentável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* 2. Adicionado o evento onClick aqui na tag <a> */}
              <a 
                href="#services" 
                onClick={handleScroll}
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                Nossos diferenciais <ArrowRight size={20} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">10+</p>
                <p className="text-sm text-gray-600">
                  Anos Transformando Tecnologia{" "}
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">150+</p>
                <p className="text-sm text-gray-600">Contratos Ativos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">100%</p>
                <p className="text-sm text-gray-600">Suporte Humanizado</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-xl [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
              <img
                src={heroImage}
                alt="Dashboard de Tecnologia"
                className="absolute inset-0 w-full h-full object-cover object-right rounded-lg [mask-image:linear-gradient(to_right,black_90%,transparent_100%)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
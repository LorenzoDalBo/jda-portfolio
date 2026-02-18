import { Award, Users, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    name: 'João Silva',
    role: 'CEO & Fundador',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Maria Santos',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/3807446/pexels-photo-3807446.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Carlos Oliveira',
    role: 'Head de Projetos',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Ana Costa',
    role: 'Diretora de Inovação',
    image: 'https://images.pexels.com/photos/3772523/pexels-photo-3772523.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a JDA Soluções
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              A JDA Soluções atua no setor de tecnologia oferecendo serviços especializados em infraestrutura, conectividade e suporte técnico. Fundada em 2016, a empresa entrega soluções seguras, eficientes e personalizadas, ajudando negócios a manterem alta performance e estabilidade em suas operações.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nosso compromisso é transformar a tecnologia em uma aliada estratégica, garantindo segurança, continuidade e crescimento para nossos clientes.
            </p>


          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
    {/* Primeiro Quadrado (Verde) */}
    <div className="h-64 rounded-xl overflow-hidden">
      <img 
        src="./src/assets/square-img1.jpg" 
        alt="Descrição da imagem" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* Segundo Quadrado (Cinza) */}
    <div className="h-64 rounded-xl overflow-hidden mt-8">
      <img 
        src="./src/assets/square-img2.jpg" 
        alt="Descrição da imagem" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
          </div>
        </div>

  
      </div>
    </section>
  );
}

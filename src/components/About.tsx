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
              Sobre a JDA'soluções
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Com mais de uma década de experiência, a JDA'soluções é líder em transformação digital e soluções tecnológicas inovadoras. Nossa missão é ajudar empresas a alcançar seus objetivos através da tecnologia inteligente.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Trabalhamos com empresas de todos os tamanhos, desde startups até grandes corporações, entregando soluções customizadas que geram resultados mensuráveis.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Award className="text-primary-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Excelência Reconhecida</h3>
                  <p className="text-gray-600">Premiados por inovação e qualidade em soluções tecnológicas</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="text-primary-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Equipe Experiente</h3>
                  <p className="text-gray-600">Profissionais certificados e com expertise em múltiplas tecnologias</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lightbulb className="text-primary-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Inovação Contínua</h3>
                  <p className="text-gray-600">Sempre atualizados com as tecnologias e tendências mais recentes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl"></div>
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mt-8"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossa Equipe</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative mb-4 overflow-hidden rounded-lg h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                <p className="text-primary-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

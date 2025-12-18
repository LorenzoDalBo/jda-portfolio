import { Cloud, Shield, Zap, Database, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Infraestrutura em Nuvem',
    description: 'Migração e gerenciamento de infraestrutura em nuvem com segurança e escalabilidade garantidas.',
  },
  {
    icon: Shield,
    title: 'Segurança da Informação',
    description: 'Proteção completa de dados e sistemas com soluções de segurança de classe empresarial.',
  },
  {
    icon: Zap,
    title: 'Desenvolvimento de Software',
    description: 'Aplicações web e mobile customizadas para suas necessidades de negócio.',
  },
  {
    icon: Database,
    title: 'Big Data & Analytics',
    description: 'Análise avançada de dados para tomadas de decisão mais inteligentes.',
  },
  {
    icon: Users,
    title: 'Consultoria Tecnológica',
    description: 'Orientação estratégica para transformação digital da sua empresa.',
  },
  {
    icon: TrendingUp,
    title: 'Otimização de Performance',
    description: 'Melhoria contínua de sistemas e processos para máxima eficiência.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções tecnológicas completas para impulsionar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 border border-gray-200 rounded-xl hover:shadow-lg hover:border-primary-300 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <Icon className="text-primary-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

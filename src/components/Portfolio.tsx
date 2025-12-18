import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Plataforma E-commerce Escalável',
    description: 'Sistema de e-commerce com milhões de transações diárias, escalabilidade e segurança garantidas.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    image: 'https://images.pexels.com/photos/5632633/pexels-photo-5632633.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Dashboard Analítico em Tempo Real',
    description: 'Aplicação de análise de dados com visualizações em tempo real e insights acionáveis.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Firebase'],
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Sistema de Gestão Empresarial',
    description: 'ERP customizado para otimização de processos internos e integração de sistemas.',
    technologies: ['Vue.js', 'Python', 'MySQL', 'Docker'],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Aplicativo Mobile Híbrido',
    description: 'App multiplataforma com performance otimizada e excelente experiência do usuário.',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Infraestrutura em Nuvem Híbrida',
    description: 'Arquitetura cloud híbrida com alta disponibilidade e disaster recovery.',
    technologies: ['Kubernetes', 'AWS', 'Terraform', 'Jenkins'],
    image: 'https://images.pexels.com/photos/2900971/pexels-photo-2900971.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Plataforma de Aprendizado Online',
    description: 'LMS completo com cursos interativos, gamificação e análise de progresso.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/5632630/pexels-photo-5632630.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfólio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e geraram resultados reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Ver Detalhes <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

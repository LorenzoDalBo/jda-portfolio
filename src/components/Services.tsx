import { Users, TrendingUp, HeadsetIcon, RouterIcon, WifiIcon, ServerIcon, BoxIcon, CogIcon, Handshake } from 'lucide-react';

const services = [
  {
    icon: HeadsetIcon,
    title: 'Suporte Especializado',
    description: 'Nosso suporte vai além do técnico. Oferecemos atendimento remoto e presencial eficiente, profissionais especializados, comunicação clara e humanizada, com foco na resolução definitiva dos problemas.',
  },
  {
    icon: RouterIcon,
    title: 'Roteamento',
    description: 'Garantimos roteamento inteligente e seguro para manter sua empresa sempre conectada. Configuramos e gerenciamos equipamentos com foco em estabilidade, desempenho e segurança, priorizando tráfego, reduzindo falhas e evitando interrupções na operação.',
  },
  {
    icon: WifiIcon,
    title: 'Rede wi-fi mesh',
    description: 'Implantamos redes Wi-Fi Mesh de alta performance, garantindo cobertura total e sinal estável em todos os ambientes. Ideal para empresas que precisam de mobilidade, produtividade e conexão contínua, sem quedas ou pontos de sombra.',
  },
  {
    icon: Handshake,
    title: 'Equipamentos em comodato',
    description: 'Disponibilizamos equipamentos modernos e atualizados em regime de comodato, reduzindo investimento inicial e custos com manutenção. Sua empresa conta com tecnologia sempre atualizada e substituição rápida quando necessário.',
  },
  {
    icon: Users,
    title: 'Consultoria Tecnológica',
    description: 'Analisamos sua infraestrutura e processos para propor soluções estratégicas e personalizadas. Nossa consultoria é focada em eficiência, redução de custos, segurança da informação e crescimento sustentável do seu negócio.',
  },
  {
    icon: BoxIcon,
    title: 'Rede Estruturada',
    description: 'Projetamos e implementamos redes estruturadas organizadas, seguras e preparadas para expansão. Trabalhamos com cabeamento profissional, identificação técnica e padrão de qualidade que garante desempenho, estabilidade e facilidade de manutenção.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos diferenciais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções tecnológicas para sua empresa ir além do convencial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 border justify-items-center  border-gray-200 rounded-xl hover:shadow-lg hover:border-primary-300 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14  h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <Icon className="text-primary-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

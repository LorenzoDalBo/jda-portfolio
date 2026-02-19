
import squareImage1 from '../assets/square-img1.jpeg';




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
            <div className="gap-4">
    {/* Primeiro Quadrado (Verde) */}
    <div className=" rounded-xl overflow-hidden">
      <img 
        src={squareImage1} 
        alt="Descrição da imagem" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* Segundo Quadrado (Cinza) */}
 
  </div>
          </div>
        </div>

  
      </div>
    </section>
  );
}

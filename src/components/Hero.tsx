import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Transformando Ideias em
              <span className="block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                Soluções Digitais
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Somos especialistas em transformar desafios empresariais em oportunidades através de soluções tecnológicas inovadoras e personalizadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                Comece Agora <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Saiba Mais
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">10+</p>
                <p className="text-sm text-gray-600">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">150+</p>
                <p className="text-sm text-gray-600">Projetos Entregues</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">95%</p>
                <p className="text-sm text-gray-600">Taxa de Satisfação</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="h-3 w-3 rounded-full bg-white opacity-60"></div>
                  <div className="h-3 w-20 bg-white opacity-40 rounded"></div>
                  <div className="h-3 w-32 bg-white opacity-40 rounded"></div>
                  <div className="h-2 w-24 bg-white opacity-30 rounded mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

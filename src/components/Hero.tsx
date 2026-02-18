import { ArrowRight } from "lucide-react";

export function Hero() {
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
              <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                Nossas soluções <ArrowRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">10+ Anos</p>
                <p className="text-sm text-gray-600">
                  Transformando Tecnologia{" "}
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">50+</p>
                <p className="text-sm text-gray-600">Contratos Ativos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-600">100%</p>
                <p className="text-sm text-gray-600">Suporte Humanizado</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              
              <div className="relative">
                <img
                  src="hero-img.png" // Substitua pelo nome correto do arquivo
                  alt="Dashboard de Tecnologia"
                  className="rounded-lg opacity [mask-image:linear-gradient(to_right,black_90%,transparent_100%)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

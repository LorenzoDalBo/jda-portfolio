import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setMessage({ type: 'success', text: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (err) {
      setMessage({ type: 'error', text: 'Erro ao enviar mensagem. Tente novamente.' });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vamos transformar seu negócio. Fale com nossos especialistas hoje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <Mail className="text-primary-600 mb-4" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">contato@jdasolucoes.com.br</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <Phone className="text-primary-600 mb-4" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Telefone</h3>
            <p className="text-gray-600">+55 (11) 3000-0000</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <MapPin className="text-primary-600 mb-4" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Localização</h3>
            <p className="text-gray-600">São Paulo, SP - Brasil</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="+55 (11) 9999-9999"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mensagem *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                placeholder="Descreva seu projeto ou necessidade..."
              ></textarea>
            </div>

            {message && (
              <div
                className={`p-4 rounded-lg ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? 'Enviando...' : (
                <>
                  Enviar Mensagem <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

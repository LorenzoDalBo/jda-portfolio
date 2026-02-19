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
            Vamos transformar seu negócio. Fale com nossos especialistas hoje
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a 
    href="mailto:comercial@solucoesjda.com.br"
    className="bg-white p-8 rounded-xl justify-items-center shadow-md block cursor-pointer "
  >
    <Mail className="text-primary-600 mb-4 mx-auto" size={32} />
    <h3 className="text-lg font-bold text-center text-gray-900 mb-2">Email</h3>
    <p className="text-gray-600 text-center">comercial@solucoesjda.com.br</p>
  </a>

          <div className="bg-white p-8 rounded-xl justify-items-center shadow-md flex flex-col items-center">
  <Phone className="text-primary-600 mb-4" size={32} />
  <h3 className="text-lg font-bold text-gray-900 text-center mb-2">Telefone</h3>
  
  <p className="text-gray-600 text-center flex flex-wrap justify-center gap-1">
    <a 
      href="https://wa.me/5548999292499" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-primary-600 hover:underline transition-colors"
    >
      (48) 99929-2499
    </a>
    
    <span className="mx-1 text-gray-400"> </span>
    
    <a 
      href="https://wa.me/5548988441925" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-primary-600 hover:underline transition-colors"
    >
      (48) 98844-1925
    </a>
  </p>
</div>

          <div className="bg-white p-8 rounded-xl justify-items-center shadow-md ">
            <MapPin className="text-primary-600 mb-4" size={32} />
            <h3 className="text-lg font-bold text-center text-gray-900 mb-2">Localização</h3>
            <p className="text-gray-600 text-center">Cricima, SC - Brasil</p>
          </div>
        </div>

      
      </div>
    </section>
  );
}

// Configuração do EmailJS
// Para usar, você precisa criar uma conta em https://www.emailjs.com/
// e configurar um serviço de email (Gmail, Outlook, etc.)
//
// INSTRUÇÕES:
// 1. Crie uma conta em https://www.emailjs.com/
// 2. Configure um Email Service e copie o Service ID
// 3. Crie um Email Template e copie o Template ID
// 4. Copie a Public Key de Account > API Keys
// 5. Adicione as variáveis de ambiente no arquivo .env
//    OU configure diretamente abaixo para produção (não recomendado para segurança)

export const emailjsConfig = {
  // Public Key do EmailJS (encontrada em Account > API Keys)
  // Use variável de ambiente VITE_EMAILJS_PUBLIC_KEY ou configure aqui
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  
  // Service ID (encontrado em Email Services)
  // Use variável de ambiente VITE_EMAILJS_SERVICE_ID ou configure aqui
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  
  // Template ID (encontrado em Email Templates)
  // Use variável de ambiente VITE_EMAILJS_TEMPLATE_ID ou configure aqui
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  
  // Email de destino (opcional, pode ser configurado no template)
  toEmail: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'almirafo@gmail.com'
}


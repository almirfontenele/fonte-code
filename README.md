# Fonte Code - Landing Page

Landing page profissional da Fonte Code, empresa especializada em desenvolvimento de sites e aplicativos web.

## 🚀 Tecnologias

- React 18
- TypeScript
- Vite
- React Icons
- EmailJS (envio de emails)

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Copie o logo para a pasta `public`:
   - Copie o arquivo `fonte-code-logo.png` de `C:\Users\almir\Downloads\` para a pasta `public/` do projeto
   - Ou mantenha o logo no caminho original (funciona apenas localmente)

3. Configure o EmailJS (opcional):
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione as variáveis de ambiente conforme `docs/EMAILJS_SETUP.md`
   - Se não configurar, o formulário usará `mailto:` como fallback

## 🏃 Executar

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🏗️ Build

Para criar a build de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## 📋 Funcionalidades

- ✅ Hero section impactante com logo
- ✅ Seção de serviços
- ✅ Seção sobre o CEO e competências técnicas
- ✅ Formulário de contato com envio de email integrado (EmailJS)
- ✅ Integração com WhatsApp
- ✅ Design responsivo e moderno
- ✅ Animações e transições suaves

## 📧 Configuração de Email

O formulário de contato está configurado para enviar emails diretamente do aplicativo usando EmailJS. 

**Para configurar:**
1. Veja as instruções detalhadas em `docs/EMAILJS_SETUP.md`
2. Crie uma conta gratuita em https://www.emailjs.com/
3. Configure as variáveis de ambiente no arquivo `.env`

**Sem configuração:**
Se o EmailJS não estiver configurado, o formulário automaticamente usa `mailto:` como fallback, abrindo o cliente de email do usuário.

## 📧 Contato

- **Email**: almirafo@gmail.com
- **WhatsApp**: +55 11 99888-4534

## 👨‍💼 CEO

**Almir Fontenele** - Desenvolvedor com mais de 10 anos de experiência em desenvolvimento backend, focado em Java e NoSQL.


# Configuração do EmailJS

Este projeto usa EmailJS para enviar emails diretamente do formulário de contato, sem necessidade de backend.

## 📋 Passo a Passo

### 1. Criar Conta no EmailJS

1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita (200 emails/mês)
3. Faça login no dashboard

### 2. Configurar Serviço de Email

1. No menu lateral, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. **Copie o Service ID** (você precisará dele depois)

### 3. Criar Template de Email

1. No menu lateral, vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com os seguintes campos:

**Subject:**
```
Contato do Site - {{from_name}}
```

**Content:**
```
Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}

Mensagem:
{{message}}

---
Este email foi enviado através do formulário de contato do site.
```

4. **Copie o Template ID** (você precisará dele depois)

### 4. Obter Public Key

1. No menu lateral, vá em **Account** → **General**
2. Role até **API Keys**
3. **Copie a Public Key**

### 5. Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env` na raiz do projeto:
   ```bash
   cp .env.example .env
   ```

2. Abra o arquivo `.env` e preencha com suas credenciais:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
   VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
   VITE_EMAILJS_TO_EMAIL=almirafo@gmail.com
   ```

### 6. Para Produção (GitHub Pages)

Como o GitHub Pages não suporta variáveis de ambiente, você tem duas opções:

#### Opção 1: Usar valores hardcoded (não recomendado para segurança)
Edite `src/config/emailjs.ts` e adicione os valores diretamente (apenas para produção pública).

#### Opção 2: Usar EmailJS Domain Whitelist
1. No EmailJS, vá em **Account** → **Security**
2. Adicione seu domínio `almirfontenele.github.io` na whitelist
3. Isso permite usar a Public Key diretamente no código (é pública mesmo)

**Nota:** As chaves públicas do EmailJS são seguras para expor no frontend, mas é melhor usar variáveis de ambiente quando possível.

## 🔧 Fallback

Se as credenciais do EmailJS não estiverem configuradas, o formulário automaticamente usa o método `mailto:` como fallback, abrindo o cliente de email do usuário.

## ✅ Testar

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Preencha o formulário de contato
3. Envie uma mensagem de teste
4. Verifique se o email chegou na caixa de entrada configurada

## 📚 Recursos

- [Documentação do EmailJS](https://www.emailjs.com/docs/)
- [Templates de Email](https://www.emailjs.com/docs/examples/reactjs/)
- [Limites do Plano Gratuito](https://www.emailjs.com/pricing/)


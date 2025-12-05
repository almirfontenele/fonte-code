# Como Publicar no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages!

## ✅ Configuração Automática

O projeto já possui:
- ✅ Workflow de deploy configurado (`.github/workflows/deploy.yml`)
- ✅ Base path configurado no `vite.config.ts` (`/fonte-code/`)
- ✅ Caminhos de assets corrigidos para funcionar no GitHub Pages
- ✅ Build testado e funcionando

## 🚀 Passos para Publicar

### 1. Configurar GitHub Pages no Repositório

1. Acesse seu repositório no GitHub: `https://github.com/almirfontenele/fonte-code`
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione:
   - **Source**: `GitHub Actions`
4. Salve as configurações

### 2. Fazer Push do Código

O workflow será executado automaticamente quando você fizer push para a branch `main`:

```bash
git add .
git commit -m "Preparar para GitHub Pages"
git push
```

### 3. Verificar Deploy

1. Acesse a aba **Actions** no GitHub para ver o progresso do deploy
2. Aguarde alguns minutos para o build e deploy completarem
3. Seu site estará disponível em: `https://almirfontenele.github.io/fonte-code/`

## 📝 Notas Importantes

- O deploy é automático a cada push na branch `main`
- Você também pode executar o workflow manualmente na aba **Actions** → **Deploy to GitHub Pages** → **Run workflow**
- O build local pode ser testado com: `npm run build`
- Para testar localmente como ficará no GitHub Pages: `npm run preview`

## 🔧 Configurações Técnicas

- **Base Path**: `/fonte-code/` (configurado no `vite.config.ts`)
- **Build Output**: `dist/` (gerado automaticamente)
- **Node Version**: 20 (configurado no workflow)

## 🐛 Troubleshooting

Se o site não aparecer:
1. Verifique se o GitHub Pages está habilitado nas configurações do repositório
2. Verifique se o workflow foi executado com sucesso na aba **Actions**
3. Aguarde alguns minutos - o deploy pode levar até 5 minutos
4. Verifique se a URL está correta: `https://almirfontenele.github.io/fonte-code/`

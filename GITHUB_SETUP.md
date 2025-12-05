# Como Publicar no GitHub

O repositório Git já foi inicializado e o commit inicial foi feito. Agora siga estes passos:

## Opção 1: Via Interface Web do GitHub (Recomendado)

1. **Crie um novo repositório no GitHub:**
   - Acesse https://github.com/new
   - Nome do repositório: `fonte-code-landing` (ou outro nome de sua preferência)
   - Deixe como **público** ou **privado** (sua escolha)
   - **NÃO** marque "Initialize this repository with a README"
   - Clique em "Create repository"

2. **Conecte seu repositório local ao GitHub:**
   O remote já está configurado! Após criar o repositório no GitHub, execute:

```bash
git push -u origin main
```

**Nota:** O remote já está configurado para: `https://github.com/almirfontenele/fonte-code-landing.git`

## Opção 2: Via GitHub CLI (se instalar)

Se você instalar o GitHub CLI (`gh`), pode executar:

```bash
gh repo create fonte-code-landing --public --source=. --remote=origin --push
```

## Verificar Status

Para verificar se tudo está conectado corretamente:

```bash
git remote -v
```

Isso deve mostrar a URL do seu repositório GitHub.

## Próximos Commits

Para futuras atualizações:

```bash
git add .
git commit -m "Descrição das alterações"
git push
```


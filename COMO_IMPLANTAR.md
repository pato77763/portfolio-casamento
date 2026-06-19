# Guia de Publicação: GitHub, Vercel & Netlify 🚀

Seu portfólio de cinema de casamento está incrivelmente otimizado! Removemos a seção de vídeo para focar inteiramente na linda galeria de fotos de alta performance (Momentos), tornando seu site extremamente leve, rápido e fácil de hospedar em qualquer plataforma sem problemas de limite de tamanho de arquivos.

Criamos arquivos de configuração especiais para garantir o funcionamento correto de rotas SPA (Single Page Application) em ambas plataformas.

---

## 1. Enviando para o GitHub 🐙

1. **Abra o terminal** na pasta raiz do projeto em seu computador local (após descompactar o ZIP ou clonar).
2. **Inicialize o repositório do Git**:
   ```bash
   git init
   ```
3. **Adicione e registre todos os arquivos**:
   ```bash
   git add .
   git commit -m "feat: site de portfolio de fotografia de casamento otimizado"
   ```
4. **Crie um repositório vazio no seu GitHub** (por exemplo, `portfolio-casamento-moments`).
5. **Vincule e envie os arquivos**:
   ```bash
   git branch -m main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

---

## 2. Publicando Gratuitamente na Vercel ⚡

A Vercel conecta-se ao seu GitHub e publica o seu site de forma instantânea a cada alteração.

1. Acesse **[vercel.com](https://vercel.com)** e faça login com sua conta do GitHub.
2. Clique em **"Add New..."** ➔ **"Project"**.
3. Importe o repositório desejado.
4. O preset **Vite** será selecionado automaticamente.
5. Deixe todas as configurações com os valores padrão sugeridos (com o build automatizado usando `vite build`).
6. Clique no botão azul **"Deploy"**.

*Obs: Criamos o arquivo `vercel.json` na raiz para configurar o roteamento automaticamente, evitando erros 404 ao atualizar a página.*

---

## 3. Publicando Gratuitamente na Netlify 🌐

A Netlify é outra opção sensacional e de altíssima velocidade para hospedagem estática.

1. Acesse **[netlify.com](https://www.netlify.com/)** e faça login com seu GitHub.
2. No painel principal, clique em **"Add new site"** ➔ **"Import an existing project"** ➔ Escolha **GitHub**.
3. Selecione o repositório do seu projeto.
4. Defina as configurações de publicação (geralmente autodetectadas):
   - **Build command**: `vite build` (ou `npm run build`)
   - **Publish directory**: `dist`
5. Clique em **"Deploy site"**.

*Obs: Já criamos o arquivo `netlify.toml` na raiz com as regras necessárias para que o redirecionamento de rotas e atualizações de página funcionem 100% perfeitamente na Netlify.*

# Portfólio — Julia Silva

Portfólio pessoal desenvolvido com React + Vite, com layout responsivo, animações de entrada e filtros de projetos.

## Requisitos
- Node.js LTS instalado
- Git (opcional, para publicar no GitHub)

## Executar localmente
1. Extraia o ZIP.
2. Abra a pasta `portfolio-julia` no VS Code.
3. Abra o terminal nessa pasta e execute:

```bash
npm install
npm run dev
```

4. Acesse a URL exibida no terminal (normalmente `http://localhost:5173`).

## Gerar versão de produção

```bash
npm run build
npm run preview
```

Os arquivos prontos para publicação ficam na pasta `dist`.

## Publicar gratuitamente com Vercel
1. Crie um repositório no GitHub e envie os arquivos deste projeto.
2. Entre em https://vercel.com e conecte sua conta GitHub.
3. Clique em **Add New → Project** e importe o repositório.
4. A Vercel normalmente detecta o Vite automaticamente. Use:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **Deploy**.

Alternativa: Netlify (https://www.netlify.com), importando o repositório e usando os mesmos comandos.

## Personalizar
- Edite nome, resumo, habilidades e projetos em `src/App.jsx`.
- Substitua os links `#` dos projetos pelos repositórios corretos quando estiverem disponíveis.
- Atualize o e-mail de contato em `src/App.jsx`.
- Se quiser usar imagens próprias, coloque-as em `public/` e referencie como `/nome-da-imagem.png`.

## Observações
Os projetos são apresentados como estudos e experiências de portfólio. Revise descrições, tecnologias e links antes de publicar. Não há backend nem formulário que envie mensagens: o botão de contato abre um e-mail no aplicativo padrão do visitante.

# Portfólio

Site de portfólio em Astro + Tailwind CSS, em italiano e inglês, com tema claro e escuro.

## Comandos

| Comando           | O que faz                                   |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Servidor local em `http://localhost:4321`   |
| `npm run build`   | Gera o site estático em `dist/`             |
| `npm run preview` | Serve o build localmente para conferência   |

## Onde editar

| O quê                                         | Arquivo                                  |
| --------------------------------------------- | ---------------------------------------- |
| Nome, e-mail, redes, currículo, disponibilidade | `src/data/profile.ts` (objeto `profile`) |
| Cargo, textos do topo, sobre, habilidades, experiência | `src/data/profile.ts` (objeto `content`) |
| Textos fixos da interface (botões, títulos)   | `src/i18n/ui.ts`                         |
| Projetos e estudos de caso                    | `src/content/projects/it/*.md` e `en/*.md` |
| Cores do tema                                 | `src/styles/global.css` (`:root` e `.dark`) |
| Domínio do site                               | `astro.config.mjs` (`site`) e `public/robots.txt` |

## Adicionar um projeto

1. Crie `src/content/projects/it/meu-projeto.md` e `src/content/projects/en/meu-projeto.md` com o **mesmo nome de arquivo**.
2. Preencha o cabeçalho (`title`, `summary`, `cover`, `coverAlt`, `tags`, `role`, `year`, `demo`, `repo`, `order`). Use um dos projetos existentes como modelo.
3. Coloque a imagem de capa em `public/projects/` (1280×720).

O campo `order` define a posição na página inicial.

## Arquivos para substituir

- `public/foto.webp` é a sua foto (quadrada, 384×384). Para trocar, substitua o arquivo ou ajuste `photo` em `profile.ts`
- `public/cv.pdf` é o currículo baixado nos dois idiomas. Para ter um em inglês, coloque `public/resume.pdf` e ajuste `resume.en` em `profile.ts`
- `public/projects/*.svg` por screenshots reais dos projetos
- `public/og.png` pela imagem que aparece ao compartilhar o link (1200×630)
- `public/favicon.svg` com as suas iniciais

## Formulário de contato

Por padrão só aparece o botão de e-mail. Para exibir o formulário, crie um formulário gratuito no [Formspree](https://formspree.io) e coloque a URL em `formEndpoint` no `profile.ts`.

## Publicação

Conecte o repositório na [Vercel](https://vercel.com) ou na [Netlify](https://netlify.com). As duas detectam o Astro automaticamente.

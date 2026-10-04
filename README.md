# Signup Form

Uma página de cadastro responsiva, construída com React, TypeScript e Vite. O layout segue a abordagem **mobile first** e adapta o formulário para telas maiores.

## Prévia do design

### Mobile

![Referência do design para celular](./src/assets/design/mobile-design.jpg)

### Desktop

![Referência do design para desktop](./src/assets/design/desktop-design.jpg)

Os arquivos acima são referências visuais incluídas no projeto. O fundo da página usa os recursos disponíveis em `src/assets/images` e `public/images`.

## Funcionalidades

- Layout responsivo para celular e desktop.
- Formulário com nome, sobrenome, e-mail e senha.
- Validação de campos obrigatórios e formato de e-mail.
- Mensagens de erro junto aos campos inválidos, com indicador visual.
- Estados de foco e hover nos campos e no botão.
- Feedback de envio, sucesso e erro.
- Atributos de preenchimento automático apropriados para os campos.

> **Nota:** o envio é demonstrativo. Não há API ou serviço de cadastro conectado; após uma validação bem-sucedida, a interface simula o processamento e exibe uma mensagem de sucesso.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint

## Requisitos

- Node.js compatível com a versão do Vite usada pelo projeto.
- npm.

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Scripts disponíveis

| Comando           | Descrição                                                                |
| ----------------- | ------------------------------------------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento com atualização automática.         |
| `npm run build`   | Executa a verificação TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Pré-visualiza localmente a versão compilada.                             |
| `npm run lint`    | Executa o ESLint no projeto.                                             |

## Estrutura do projeto

```text
src/
├── assets/
│   ├── design/       # Referências visuais mobile, desktop e estados ativos
│   └── images/       # Imagens usadas pela interface
├── components/
│   ├── Button.tsx    # Botão reutilizável
│   ├── Error.tsx     # Alertas de erro, sucesso e informação
│   ├── Input.tsx     # Campo de formulário com estado de erro
│   └── SignUpForm.tsx
├── pages/
│   └── SignUpPage.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Validação do formulário

O formulário verifica que:

- Nome e sobrenome não estejam vazios.
- O e-mail esteja preenchido e tenha um formato válido.
- A senha não esteja vazia.

Após a edição de um campo com erro, a respectiva mensagem é removida. Com dados válidos, a aplicação mostra um indicador de carregamento e, em seguida, uma confirmação demonstrativa.

## Contato

Entre em contato ou acompanhe meu trabalho:

- **Nome:** Francisco Rosendo
- **E-mail:** [rosendc30@gmail.com](mailto:rosendc30@gmail.com)
- **GitHub:** [github.com/rosendo2015](https://github.com/rosendo2015)
- **LinkedIn:** [linkedin.com/in/francisco-rosendo-coelho](https://www.linkedin.com/in/francisco-rosendo-coelho/)

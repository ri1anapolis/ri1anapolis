# SITE DO 1º RI DE ANÁPOLIS/GO

Cartório de Registro de Imóveis da Primeira Circunscrição de Anápolis/GO

[![Netlify Status](https://api.netlify.com/api/v1/badges/b21d6f83-2824-404b-8f63-4d4ecc0ee483/deploy-status)](https://app.netlify.com/sites/ri1anapolis/deploys)

> Documentação técnica detalhada (arquitetura, fluxos, convenções e receitas de edição) está em [`AGENTS.md`](./AGENTS.md).

## Apresentação

Esse é um site estático feito em Gatsby 2 (React 16 + Material-UI v4), hospedado na Netlify. O único recurso dinâmico é a consulta de protocolos, servida por uma função da Netlify (`src/functions/db`) que consulta um banco MongoDB hospedado na VPS do cartório. A Nota Devolutiva é baixada a partir de uma URL criptografada que vem junto com os dados do protocolo e é liberada no navegador mediante o Código Verificador do recibo.

Outros conteúdos:

- **Banners** temporários são lidos do repositório [ri1anapolis-banners](https://github.com/ri1anapolis/ri1anapolis-banners) (`banners.json`), sem necessidade de novo deploy;
- **Documentos para registro** são links para arquivos no Google Drive, listados em `src/pagesContent/documentosPanel2/documentosPanelContent.js`;
- **Certidões e buscas** são solicitadas pelo portal SAEC/ONR (https://registradores.onr.org.br/), conforme art. 33 do Provimento 89/2019 do CNJ.

###### Design

A idéia é ter um site simples, de fácil acesso e navegação, sem conteúdos secundários, tais como feeds de notícias copiados de outros sites, como acontece na maioria dos sites de cartório.

###### Problemas

- Um problema herdado do design é que, como trata-se de uma SPA, todos os conteúdos e assets são carregados na primeira(única) página, o que torna mais desafiador deixar o carregamento do site rápido, todavia o fatiamento dos componentes e o carregamento dinâmico (`@loadable/component`) tem dado bons resultados.

## Desenvolvimento

Como o site é todo desenvolvido com Gatsby, recomenda-se ter amplos conhecimentos nessa ferramenta. Toda a metodologia parte dos padrões indicados pelo Gatsby.

#### Requisitos

- Node **14.17.4** (ver `.nvmrc`; o Gatsby 2 não compila em versões modernas do Node);
- Yarn 1.

Há uma configuração de **devcontainer** (`.devcontainer/`) que já instala a versão correta do Node e executa o `yarn install`.

#### Instalação

- `git clone`
- `yarn install`

#### Variáveis de Ambiente

###### [Com Gatsby](https://www.gatsbyjs.org/docs/environment-variables/):

O `gatsby-config.js` carrega o arquivo `.env.${NODE_ENV}` (ex.: `.env.development`). Os arquivos `.env*` são ignorados pelo git. Variáveis usadas no frontend devem ser prefixadas com `GATSBY_`:

- `GATSBY_CRYPTO_KEY`: Segredo/Chave para validar o Código Verificador e decriptar a URL das notas devolutivas;
- `GATSBY_LOGROCKET_APP_ID`: ID de App no LogRocket para acompanhamento de uso e erros;
- `GATSBY_LOGROCKET_LOCAL_STORAGE`: nome da chave no localStorage onde é guardada a amostragem diária do LogRocket;
- `GOOGLE_TRACKING_ID`: ID do Google Analytics;
- `SITE_URL`: endereço do site (na Netlify são usadas as variáveis `URL`/`DEPLOY_URL`).

Exemplo de `.env.development`:

```
GATSBY_CRYPTO_KEY=KbPlskdfaçsdlkfjsadksdfWnZ
GATSBY_LOGROCKET_APP_ID=asdfg/ri1anapolis
GATSBY_LOGROCKET_LOCAL_STORAGE=lr_params
GOOGLE_TRACKING_ID=G-AS7SSDF798S
SITE_URL=http://localhost:8000
```

###### Com Netlify

Para utilizar as variáveis de ambiente registradas no Netlify e executar as funções localmente, é necessário o pacote netlify-cli:

- `yarn global add netlify-cli` (ou `npx netlify-cli`)

Uma vez com o netlify-cli instalado, é necessário:

1. Fazer login no netlify: `netlify login`;
2. Linkar o projeto com o netlify: `netlify link`
3. Iniciar o servidor de desenvolvimento: `netlify dev`

O `netlify dev` sobe um proxy em `http://localhost:8888` que integra o site às funções. Em desenvolvimento, o frontend chama as funções sempre por esse endereço, portanto **a consulta de protocolos só funciona localmente via `netlify dev`**.

Variáveis que devem estar registradas no Netlify (além das citadas acima):

- `MONGODB_URI`: string de conexão com o MongoDB da VPS (usada pela função `db`);
- `MONGODB_DB`: nome do banco de dados.

Variáveis da função `mailer` (legada, não utilizada atualmente pelo site): `SMTP_FROM`, `SMTP_TO`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_USE_TLS`.

#### Execução

- `yarn develop`: para servir em desenvolvimento (http://localhost:8000);
  - `yarn develop -H 0.0.0.0 -p 8000`: para habilitar acesso pela rede.
  - `netlify dev`: para acesso local via proxy netlify, com funcionamento integrado das funções.
- `yarn build`: para gerar a build de produção (é também a principal forma de validar alterações, pois o projeto não possui testes automatizados);
- `yarn serve`: para servir a build de produção.
- `yarn clean`: limpa o cache do Gatsby.
- `yarn format`: formata o código com o Prettier.

## Infraestrutura

- **Site**: Netlify (build e deploy automáticos a partir do branch `master`).
- **Funções**: Netlify Functions em `src/functions/` (diretório configurado no painel da Netlify).
- **Banco de dados**: MongoDB hospedado na VPS do cartório, com as coleções `processes`, `steps` e `requirements_notes`.

Para que as buscas funcionem e os dados servidos estejam sempre atualizados é necessário atualizar o banco com os novos dados dos protocolos do cartório, visto que o acesso direto ao banco de dados do cartório seria uma medida muito descuidada e insegura. Para tanto existe um serviço interno no cartório que faz o levantamento dos dados no banco MySQL do register, limpa os dados e os envia ao MongoDB.

Como esse serviço não faz parte do escopo do site, sua arquitetura e funcionamento são descritos em seu próprio repositório.

## Equipe

- [André Martins](https://github.com/fmartins-andre): Encarregado da TI do cartório / Desenvolvedor

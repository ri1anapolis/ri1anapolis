# SITE DO 1º RI DE ANÁPOLIS/GO

Cartório de Registro de Imóveis da Primeira Circunscrição de Anápolis/GO

[![Netlify Status](https://api.netlify.com/api/v1/badges/b21d6f83-2824-404b-8f63-4d4ecc0ee483/deploy-status)](https://app.netlify.com/sites/ri1anapolis/deploys)

## Apresentação

Esse é um site estático feito em Gatsby (React) que usa como backend para as buscas por protocolos o serviço do MongoDB Cloud (Atlas e Realm/Stitch) e para envio de email uma função na netlify.

###### Design

A idéia é ter um site simples, de fácil acesso e navegação, sem conteúdos secundários, tais como feeds de notícias copiados de outros sites, como acontece na maioria dos sites de cartório.

###### Avisos

- Para funcionar o service worker responsável pelo PWA é necessário estar no ambiente de produção e com SSL válido. Ao que parece é um requisito desse tipo de tecnologia! É mais fácil subir para o netlify e testar por lá!

###### Problemas

- Um problema herdado do design é que, como trata-se de uma SPA, todos os conteúdos e assets são carregados na primeira(única) página, o que torna mais desafiador deixar o carregamento do site rápido, todavia o fatiamento dos componentes e o carregamento dinâmico tem dado bons resultados.

## Desenvolvimento

Como o site é todo desenvolvido com Gatsby, recomenda-se ter amplos conhecimentos nessa ferramenta. Toda a metodologia parte dos padrões indicados pelo Gatsby.

#### Instalação

- `git clone`
- `yarn install`

#### Variáveis de Ambiente

###### [Com Gatsby](https://www.gatsbyjs.org/docs/environment-variables/):

A seguir, as variáveis de ambiente necessárias para o frontend! Devem todas serem prefixadas com `GATSBY_` tal como demanda o próprio Gatsby:

- `GATSBY_MONGODB_APP_ID`: ID do App no Realm/Stich
- `GATSBY_MONGODB_APP_KEY`: Chave do App no Realm/Stich
- `GOOGLE_TRACKING_ID`: ID do Google Analytics
- `GATSBY_LOGROCKET_APP_ID`: ID de App no LogRocket para acompanhamento de uso e erros

Configuração rápida das variáveis no ambiente com Gatsby:

1. Crie o arquivo `.env.development` na raíz do projeto para configurar as variáveis de ambiente de desenvolvimento. Esse passo somente é necessário para o ambiente de desenvolvimento, caso seja necessário usar valores diferentes do ambiente de produção.
2. Grave as variáveis acima indicadas em cada um desses arquivos com seus respectivos valores. Ex.:
   ```
   GATSBY_MONGODB_APP_ID=meu-app
   GATSBY_MONGODB_APP_KEY=çlaskdfjpasidfjaskdfjaçsdkfj
   GOOGLE_TRACKING_ID=G-AS7SSDF798S
   GATSBY_LOGROCKET_APP_ID=asdfg/ri1anapolis
   ```

###### Com Netlify

Para utilizar as variáveis de ambiente registrada no Netlify, é necessário instalar o pacote netlify-cli:

- `yarn add -D netlify-cli`

Uma vez com o netlify-cli instalado, é necessário:

1. Fazer login no netlify: `netlify login`;
2. Linkar o projeto com o netlify: `netlify link`
3. Iniciar o servidor de desenvolvimento: `netlify dev`

Uma vez que o ambiente de desenvolvimento da netlify esteja rodando (após o `netlify dev`), o ambiente terá um proxy para compatibilizar as chamadas às funções (lambda).

As chamadas às funções no netlify somente funcionarão via proxy gerado pelo comando `netlify dev`!

As variáveis necessárias ao correto funcionamento do site, além das acima citadas, e que devem estar registradas no Netlify são:

- `GOOGLE_TRACKING_ID`: ID de rastreamento do google analytics;
- `SITE_URL`: para indicar ao gatsby o endereço correto do site;
- `SMTP_FROM`: o remetente das mensagens de email enviadas pelo site;
- `SMTP_TO`: destinatário dos emails enviados pelo site;
- `SMTP_HOST`: endereço do serviço de smtp;
- `SMTP_PORT`: porta do serviço de smtp;
- `SMTP_USER`: usuário de logon no serviço de smtp;
- `SMTP_PASS`: senha de acesso ao serviço de smtp.

#### Execução

- `gatsby develop`: para servir em desenvolvimento;
  - `gatsby develop -H 192.168.1.20 -p 8000`: para habilitar acesso pela rede.
  - `netlify dev`: para acesso local via proxy netlify, com funcionamento integrado das funções (lambda).
- `gatsby build`: para gerar a build de produção;
- `gatsby serve`: para servir a build e produção.
  - `gatsby serve -H 192.168.1.20 -p 9000`: para habilitar acesso pela rede.

## Infraestrutura

Como o site terá um sistema de buscas por protocolos, tais dados deverão ser servido em algum lugar. O lugar é o MongoDB Cloud, e a aplicação usa tanto o Atlas (banco de dados) quanto ao Realm/Stich (backend serverless).

Para que as buscas funcionem e os dados servidos estejam sempre atualizados é necessário atualizar o Atlas com os novos dados dos protocolos do cartório, visto que o acesso direto ao banco de dados do cartório seria uma medida muito descuidada e insegura. Para tanto é necessário um serviço interno no cartório que faça o levantamento dos dados a serem enviados à núvem, e que esse serviço seja executado constantemente.

A melhor opção no momento é criar uma aplicação que faça as buscas no banco de dados MySQL do register, no cartório, limpe os dados, e envie para o Atlas.

Como não esse serviço não faz parte do escopo do site, não será descrita aqui sua arquitetura e funcionamento, mas no seu repositório em específico.

## Equipe

- [André Martins](https://github.com/fmartins-andre): Encarregado da TI do cartório / Desenvolvedor

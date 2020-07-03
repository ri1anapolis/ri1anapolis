# SITE DO 1º RI DE ANÁPOLIS/GO

Cartório de Registro de Imóveis da Primeira Circunscrição de Anápolis/GO

## Apresentação

Esse é um site estático feito em Gatsby (React) que usa como backend para as buscas por protocolos o serviço do MongoDB Cloud (Atlas e Realm/Stitch).
O site será servido pela Netlify.

###### Design

A idéia é ter um site simples, de fácil acesso e navegação, sem conteúdos secundários, tais como feeds de notícias copiados de outros sites, como acontece na maioria dos sites de cartório.

###### Avisos

- Para funcionar o service worker responsável pelo PWA é necessário estar no ambiente de produção e com SSL válido. Ao que parece é um requisito desse tipo de tecnologia! É mais fácil subir para o netlify e testar por lá!

###### Problemas

- Um problema herdado do design é que, como trata-se de uma SPA, todos os conteúdos e assets são carregados na primeira(única) página, o que torna mais desafiador deixar o carregamento do site rápido.

## Desenvolvimento

Como o site é todo desenvolvido com Gatsby, recomenda-se ter amplos conhecimentos nessa ferramenta. Toda a metodologia parte dos padrões indicados pelo Gatsby.

#### Instalação

- `git clone`
- `yarn install`

#### Variáveis de Ambiente

###### [Com Gatsby](https://www.gatsbyjs.org/docs/environment-variables/):

Há duas variáveis de ambiente para o site. Ambas são relativas ao backend do mongodb cloud:

- `GATSBY_MONGODB_APP_ID`: ID do App no Realm/Stich
- `GATSBY_MONGODB_APP_KEY`: Chave do App no Realm/Stich

Configuração rápida das variáveis no ambente com Gatsby:

1. Crie os arquivos, na raíz do projeto:
   - `.env.development`: para ambiente de desenvolvimento;
   - `.env.production`: para ambiente de produção;
2. Grave as variáveis acima indicadas em cada um desses arquivos com seus respectivos valores. Ex.:
   ```
   GATSBY_MONGODB_APP_ID=meu-app
   GATSBY_MONGODB_APP_KEY=çlaskdfjpasidfjaskdfjaçsdkfj
   ```

###### Com Netlify

Em breve.

#### Execução

- `gatsby develop`: para servir em desenvolvimento;
  - `gatsby develop -H 192.168.1.20 -p 8000`: para habilitar acesso pela rede.
- `gatsby build`: para gerar a build de produção;
- `gatsby serve`: para servir a build e produção.
  - `gatsby serve -H 192.168.1.20 -p 9000`: para habilitar acesso pela rede.

## Infraestrutura

Como o site terá um sistema de buscas por protocolos, tais dados deverão ser servido em algum lugar. O lugar é o MongoDB Cloud, e a aplicação usa tanto o Atlas (banco de dados) quanto ao Realm/Stich (backend serverless).

Para que as buscas funcionem e os dados servidos estejam sempre atualizados é necessário atualizar o Atlas com os novos dados dos protocolos do cartório, visto que o acesso direto ao banco de dados do cartório seria uma medida muito descuidada e insegura. Para tanto é necessário um serviço interno no cartório que faça o levantamento dos dados a serem enviados à núvem, e que esse serviço seja executado constantemente.

A melhor opção no momento é criar uma aplicação que faça as buscas no banco de dados MySQL do register, no cartório, limpe os dados, e envie para o Atlas.

Como não esse serviço não faz parte do escopo do site, não será descrita aqui sua arquitetura e funcionamento, mas no seu repositório em específico.

## Time

- [André Martins](https://github.com/fmartins-andre): Encarregado da TI do cartório / Desenvolvedor

# Iniciando

Para executar este projeto é necessário ter o Node JS instalado no PC. Ele pode ser encontrado para [download aqui](https://nodejs.org/en/).

# Importante

Esse backend não depende de nenhum outro servidor para funcionar, é só iniciálo e fazer as requisições e chamadas, um arquivo chamado ````requisicoesInsomniaDesafioPenseApp.json```` está localizado na raiz do projeto, este trata-se das requisições feitas por meio do software Insomnia, ou seja, é só importar e terá acesso a todas as requisições, parâmetros e querys utilizadas no decorrer do desenvolvimento.

# Atualizando as dependências

Para baixar as dependências do projeto é necessário rodar o comando na raiz do projeto:

```sh
npm install
```
Com isso, ele vai começar a mostrar uma barrinha no terminal informando o status do download e quando terminar, uma pasta chamada ```npm_modules``` vai aparecer na raiz do mesmo, significando que as dependencias já estão baixadas.

Foi escolhido utilizar a dependencia ```knex```, a mesma possui as ```migrates``` para gerenciar a criação da base de dados e para criar a base, basta rodar o comando:
```sh
npx knex migrate:latest
```
Aparecerá um arquivo chamado ```db.sqlite``` no caminho ```src\database\db.sqlite``` pois foi escolhido utilizar a dependencia ```sqlite3``` para o banco de dados. Com isso, basta apenas dar o comando para startar a API:
```sh
npm start
```
Ela está utilizando a porta ```:3333```, então a mesma necessita estar fora de utilização pra API rodar, se der algum problema com a porta, a mesma pode ser trocada no arquivo: ```src\index.js```na linha ```12```.


# Padrões:
As chamadas da API estão seguindo os padões RESTful, sendo um dos principais deles, a estrutura das chamadas, ou seja:
- GET - Chamada de dados ao servidor;
- POST - Envio de dados ao servidoor;
- PATCH - Edição de um ou mais elementos do objeto;
- PUT - Edição do objeto inteiro;
- DELETE - Remoção dos dados do servidor.


# Funcionalidades contidas na API:
- Cadastro de Usuário;
- Cadastro de Loja;
- Cadastro de Produto;
- Listagem de Usuários;
- Listagem de Lojas;
- Listagem de Produtos;
- Edição de Usuário;
- Edição da loja;
- Edição de Produto;
- Remoção de Usuário;
- Remoção da Loja;
- Remoção do Produto;
- Verificação e validação das variáveis utilizadas pelas rotas e seus tipos;
- Persistencia de de dados utilizando um banco leve;
- Geração de token único para cada usuário (não foi feita uma logica aprofundada nela, mas está gerando tokens para cada usuário);
- Todas as requisições precisam conter uma autorização que é enviada pelo HEADERS;

# Estrutura das chamadas:
### STORE:

| URL | TYPE   | QUERY | PARAMS | BODY              | HEADERS       |
|--|--------|-------|--------|-------------------|---------------|
| /store | GET    | id    |        |                   | authorization |
| /store| POST   |       |        | name, description | authorization |
| /store/:id | PUT    |       | id     | name, description | authorization |
| /store/:id | PATCH  |       | id     | name, description | authorization |
| /store/:id| DELETE |       | id     |                   | authorization |

### PRODUCT:

|URL | TYPE   | QUERY                                           | PARAMS | BODY                                                               | HEADERS       |
|--|--------|-------------------------------------------------|--------|--------------------------------------------------------------------|---------------|
| /product| GET    | id, orderPrice, orderAlpha, search, promotional |        |                                                                    | authorization |
| /product| POST   |                                                 |        | name, description, price, promotional_price, status_flag, category | authorization |
| /product/:id| PUT    |                                                 | id     | name, description, price, promotional_price, status_flag, category | authorization |
| /product/:id| PATCH  |                                                 | id     | name, description, price, promotional_price, status_flag, category | authorization |
| /product/:id| DELETE |                                                 | id     |                                                                    | authorization |

### USER:

| URL| TYPE   | QUERY | PARAMS | BODY                  | HEADERS       |
|--|--------|-------|--------|-----------------------|---------------|
| /user| GET    | id    |        |                       | authorization |
| /user| POST   |       |        | name, email, password | authorization |
| /user/:id| PUT    |       | id     | name, email, password | authorization |
| /user/:id| PATCH  |       | id     | name, email, password | authorization |
| /user/:id| DELETE |       | id     |                       | authorization |


### AUTH

|URL| TYPE   | QUERY | PARAMS | BODY                  | HEADERS         |
|---|--------|-------|--------|-----------------------|-----------------|
|/auth| GET    |       |        |                       | email, password |

### WISHLIST

| URL| TYPE   | QUERY | PARAMS | BODY                  | HEADERS         |
|--|--------|-------|--------|-----------------------|-----------------|
|/wishlist | POST   |       |        | products              |                 |
# Dependências utilizadas
- npm install express
- npm install knex
- npm install dotenv
- npm install nodemon
- npm install sqlite3
- npm install cors
- npm install celebrate
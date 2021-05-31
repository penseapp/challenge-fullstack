
<p align="center">  
  <a href="https://github.com/VanessaSwerts/challenge-flutter-fullstack/commits/backend">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VanessaSwerts/challenge-flutter-fullstack/backend">
  </a>    
</p>

<h4 align="center"> 
	🚧 VS Store API - em desenvolvimento 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
  <a href="#-estrutura-de-arquivos">Estrutura de arquivos</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autores">Autores</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

VS Store API é um projeto desenvolvido para ao processo seletivo da PenseAPP.

VS Store API - é o backend do aplicativo VS Store, onde está toda regra de negócia da aplicação. Nesta parte, fazemos toda conexão com banco de dados, utilizando um ORM (TypeORM), processamos informações mais sigilosas e disponbilizamos em formato de API Restful utilizando o Express para manuseio das rotas.

Esta API também está hospedada no Heroku no endereço https://vs-store-api.herokuapp.com/.

Para testar a API, você pode utilzar o arquivo para o [Insomnia](https://insomnia.rest): [VS Store API Insomnia](https://github.com/VanessaSwerts/challenge-flutter-fullstack/blob/backend/VsStoreInsomnia.json)

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

#### Executando o projeto

##### 🧭 Rodando a aplicação Backend

   ```bash
    # Clone este repositório
    $ git clone https://github.com/VanessaSwerts/challenge-flutter-fullstack.git

    # Acesse a pasta do projeto no seu terminal/cmd
    $ cd challenge-flutter-fullstack
    
    # Altere para a branch do backend
    $ git checkout backend

    # Instale as dependências
    $ yarn install
    
   ```

Esta API está disponível em https://vs-store-api.herokuapp.com/, rodando com um banco dados PostgreSQL, porém para rodar localmente é necessário que você configure um arquivo de variáveis ambiente (.env) para rodar o banco de dados SQLITE localmente. Para isso sigo os passos a seguir:

- PASSO 1: Na raiz do projeto crie um arquivo com o nome .env
- PASSO 2: Cole as informações a seguir nesse arquivo.
		
	 ```bash
	TYPEORM_CONNECTION =sqlite
	TYPEORM_DATABASE=./src/database/database.sqlite
	TYPEORM_ENTITIES=./src/entities/**.ts
	TYPEORM_MIGRATIONS=./src/database/migrations/**.ts
	TYPEORM_MIGRATIONS_DIR=./src/database/migrations
	```	
- PASSO 3: Rodar comando para criar o Banco de Dados SQLITE e as tabelas (sem dados).

	```bash
	# Criando o banco de dados e as migrations (tabelas) do banco de dados:
	$ yarn typeorm migration:run
	```
- PASSO 4: Execute a aplicação

	```bash
	# Execute a aplicação
	$ yarn dev
	
	# Acesse http://localhost:5000 e veja a api em execução.
	```
---

## 📁 Estrutura de arquivos

Atualizado 31/05/2021

```
backend
├─ .gitignore
├─ LICENSE
├─ ormconfig.js
├─ package.json
├─ README.md
├─ src
│  ├─ app.ts
│  ├─ config
│  │  ├─ auth.ts
│  │  ├─ cloudinary.ts
│  │  └─ multer.ts
│  ├─ controllers
│  │  ├─ AuthController.ts
│  │  ├─ FavoriteController.ts
│  │  ├─ ProductController.ts
│  │  └─ UsersController.ts
│  ├─ database
│  │  ├─ examples
│  │  │  ├─ imgs
│  │  │  │  ├─ img_prod1.png
│  │  │  │  ├─ img_prod10.png
│  │  │  │  ├─ img_prod2.png
│  │  │  │  ├─ img_prod3.png
│  │  │  │  ├─ img_prod4.png
│  │  │  │  ├─ img_prod5.png
│  │  │  │  ├─ img_prod6.png
│  │  │  │  ├─ img_prod7.png
│  │  │  │  ├─ img_prod8.png
│  │  │  │  └─ img_prod9.png
│  │  │  └─ ProductList.json
│  │  ├─ index.ts
│  │  └─ migrations
│  │     ├─ 1621986325280-CreateUsers.ts
│  │     ├─ 1622077180343-CreateProducts.ts
│  │     └─ 1622427954201-CreateFavorites.ts
│  ├─ entities
│  │  ├─ Favorite.ts
│  │  ├─ Product.ts
│  │  └─ User.ts
│  ├─ repositories
│  │  ├─ FavoriteRepository.ts
│  │  ├─ ProductRepository.ts
│  │  └─ UserRepository.ts
│  ├─ routes.ts
│  ├─ server.ts
│  ├─ services
│  │  ├─ AuthService.ts
│  │  ├─ FavoritesService.ts
│  │  ├─ ProductsService.ts
│  │  └─ UsersService.ts
│  └─ utils
│     └─ utils.ts
├─ tmp
│  └─ uploads
│     ├─ product
│     └─ user
│        └─ default-avatar.png
├─ tsconfig.json
└─ yarn.lock

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **API**  ([Node JS](https://nodejs.org/docs/latest/api/))
- **Dependências**:
  -   **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**
  -   **[cloudinary](https://cloudinary.com/documentation/node_integration)**
  -   **[cors](https://www.npmjs.com/package/cors)**
  -   **[dotenv](https://www.npmjs.com/package/dotenv)**
  -   **[express](https://expressjs.com/)**
  -   **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
  -   **[multer](https://www.npmjs.com/package/multer)**
  -   **[multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)**
  -   **[pg](https://node-postgres.com/)**
  -   **[sqlite3](https://github.com/mapbox/node-sqlite3)**
  -   **[typeorm](https://typeorm.io/#/)**
  -   **[uuid](https://github.com/uuidjs/uuid)**
  -   **[yup](https://www.npmjs.com/package/yup)**
  
- **Dependências de Desenvolvimento**:
  -   **[cross-env](https://github.com/kentcdodds/cross-env)**
  -   **[ts-node-dev](https://github.com/wclr/ts-node-dev)**
  -   **[typescript](https://www.typescriptlang.org)** 
  
Veja o arquivo  [package.json](https://github.com/VanessaSwerts/challenge-flutter-fullstack/blob/backend/package.json)

---

## 🦸 Autora

<table>
  <tr>   
    <td align="center"><a href="https://github.com/vanessaSwerts/"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/57146734?v=4" width="100px;" alt=""/><br /><sub><b>Vanessa Swerts</b></sub></a></td>  
  </tr>
</table>

---

## 📝 Licença 

Este projeto esta sobe a licença [MIT](./LICENSE).

<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">  



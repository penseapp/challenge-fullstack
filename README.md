
<p align="center">  
  <a href="https://github.com/VanessaSwerts/challenge-flutter-fullstack/commits/frontend">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VanessaSwerts/challenge-flutter-fullstack/frontend">
  </a>    
</p>

<h4 align="center"> 
	🚧 VS Store App - em desenvolvimento 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
  <a href="#-estrutura-de-arquivos">Estrutura de arquivos</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autores">Autores</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

VS Store App é um projeto desenvolvido para ao processo seletivo da PenseAPP.

O aplicativo foi desenvolvido em Javascript utilizando o framework React Native em conjunto com o Expo. Também foi utilizado o Design Pattern Provider Pattern, para o controle de estado com os Contexts.

---

## ⚙️ Funcionalidades
  
  - App
	 - [x] Cadastrar Usuário
	 - [x] Realizar login
	 - [x] Editar dados	do usuário
	 - [x] Listar produtos
	 - [x] Pesquisar por palavra-chave
	 - [x] Filtrar lista de produtos (categoria, promoção, ordenação por nome e preço)
	 - [ ] Adicionar e remover produto aos favoritos 
	 
---

## 🎨 Layout

<p align="center">
  <img alt="VS STORE - Login Page" src="https://user-images.githubusercontent.com/57146734/120231139-24180880-c227-11eb-9e58-db8b5d7808a1.jpeg" width="30%;">
  <img alt="VS STORE - Home Page" src="https://user-images.githubusercontent.com/57146734/120231191-46118b00-c227-11eb-9a09-8f7f5bf32f8f.jpeg" width="30%;">
  <img alt="VS STORE - Home Page with serach" src="https://user-images.githubusercontent.com/57146734/120231206-4b6ed580-c227-11eb-8dc3-d921cd957f45.jpeg" width="30%;">
</p>

<p align="center">
  <img alt="VS STORE - Details Page" src="https://user-images.githubusercontent.com/57146734/120231292-75c09300-c227-11eb-872c-a00620eba3f4.jpeg" width="30%;">
  <img alt="VS STORE - Account Page" src="https://user-images.githubusercontent.com/57146734/120231290-7527fc80-c227-11eb-8f04-0f1a57300db3.jpeg" width="30%;">
  <img alt="VS STORE - Edit Account Page" src="https://user-images.githubusercontent.com/57146734/120231295-76592980-c227-11eb-8241-9e2f3ec6bf4a.jpeg" width="30%;">
</p>

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Expo](https://expo.io). 

Para o Expo é necessário realizar a instalação no seu computador e celular, caso não queira utilizar um emulador:

- Instalar expo-cli:
  ```bash
  # Basta executar este comando para instalar o expo-cli:
  $ yarn add expo-cli
  ```

- Instalar Expo App:
	 - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
	 - [IOS](https://apps.apple.com/br/app/expo-client/id982107779)


#### Executando o projeto

##### 🧭 Rodando a aplicação Frontend

   ```bash
    # Clone este repositório
    $ git clone https://github.com/VanessaSwerts/challenge-flutter-fullstack.git

    # Acesse a pasta do projeto no seu terminal/cmd
    $ cd challenge-flutter-fullstack
    
    # Altere para a branch do frontend
    $ git checkout frontend

    # Instale as dependências
    $ yarn install

    # Execute a aplicação
    $ yarn start  
    
   ```
---

## 📁 Estrutura de arquivos

Atualizado 31/05/2021

```
frontend
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.json
├─ .expo-shared
│  └─ assets.json
├─ .gitignore
├─ App.js
├─ app.json
├─ assets
│  ├─ adaptive-icon.png
│  ├─ favicon.png
│  ├─ icon.png
│  └─ splash.png
├─ babel.config.js
├─ LICENSE
├─ package.json
├─ prettier.config.js
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ avatar.png
│  │  ├─ logo-black.png
│  │  ├─ logo-dark-blue.png
│  │  ├─ logo-light-blue.png
│  │  ├─ logo-shop-black.png
│  │  ├─ logo-shop-dark-blue.png
│  │  ├─ logo-shop-ligth-blue.png
│  │  ├─ logo-shop-white.png
│  │  └─ logo-white.png
│  ├─ components
│  │  ├─ Button.js
│  │  ├─ CategoryButton.js
│  │  ├─ ImagePicker.js
│  │  ├─ index.js
│  │  ├─ Input.js
│  │  ├─ Loader.js
│  │  ├─ ProductCard.js
│  │  ├─ ProductsFilter.js
│  │  ├─ StepProgress.js
│  │  └─ Warning.js
│  ├─ contexts
│  │  ├─ auth.js
│  │  └─ loading.js
│  ├─ pages
│  │  ├─ Account.js
│  │  ├─ EditAccount.js
│  │  ├─ Favorites.js
│  │  ├─ Home.js
│  │  ├─ index.js
│  │  ├─ Login.js
│  │  ├─ ProductDetails.js
│  │  └─ SignUp.js
│  ├─ routes
│  │  ├─ index.js
│  │  ├─ stack.routes.js
│  │  └─ tab.routes.js
│  ├─ services
│  │  └─ api.js
│  └─ utils
│     ├─ constants
│     │  ├─ colors.json
│     │  └─ fonts.json
│     └─ index.js
└─ yarn.lock

```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Mobile**  ([React Native](http://www.reactnative.com/))
- **Dependências**:
  -   **[Expo](https://expo.io/)**
  -   **[React Navigation](https://reactnavigation.org/)**
  -   **[Axios](https://github.com/axios/axios)**
  -   **[Progress Steps](https://github.com/colbymillerdev/react-native-progress-steps)**
  -   **[Expo Image Picker](https://docs.expo.io/versions/latest/sdk/imagepicker/)**
  -   **[Progress](https://github.com/oblador/react-native-progress)**
  -   **[Async Storage](https://github.com/react-native-async-storage/async-storage)**
  
- **Dependências de Desenvolvimento**:
  -   **[ESlint](https://eslint.org)**
  -   **[Prettier](https://prettier.io)**

Veja o arquivo  [package.json](https://github.com/VanessaSwerts/challenge-flutter-fullstack/blob/frontend/package.json)

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



# PenseStore Back-End

## Pré-requisitos 

  + MongoDB
  + NodeJs


## Instale os pacotes necessários

```
  npm install
```

## Utilizando PenseStore Back

Antes de mais nada certifique-se de adicionar a URL do seu banco na variável ` CONNECTION_URL` no app.js.

```javascript
  const CONNECTION_URL =
  "mongodb+srv://<user>:<password>@cluster0.z8kvf.mongodb.net;

```
  
Agora basta rodar a aplicação.

```
  npm run dev
```
----------------------

## Tecnologias Utilizadas

  + Node
  + Express
  + MongoDB

-----------------------

## Falta Implementar

  + Relacionar a tabela de user com products, para que seja necessário cada usuário ter uma lista de produtos.

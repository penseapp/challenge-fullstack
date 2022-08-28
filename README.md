# Desafio-Backend

# Desafio-Backend

## Instalação


    $ npm install --force


Caso precise mudar a porta do projeto só precisa alterar a variável port dentro do arquivo main, deixei a porta padrão igual a 3005.

    # /src/main.ts
    $ const port = 3005 

## Inicializando

    $ npm run start

## Tecnologias

- NextJs

## Modelos do banco

|       Produto     |    Usuario   |    Wishlist   |
| :---------------: | :----------: |  :----------: |
|       Nome        |     id       |   idProduto   |
|     Descrição     |     nome     |   idUsuario   |
|       Preço       |     email    |               |
| Preço promocional |     senha    |               |
|  Flag de status   |     Não      |               |
|     Categoria     |     Não      |               |
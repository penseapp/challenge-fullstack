# Desafio FullStack Penseapp

## Backend

Criar um `micro-service` que aceite requisições RESTful (API) capaz de gerenciar:

<br >

- CRUD de loja

|   Nome    | Obrigatório? |
| :-------: | :----------: |
|   Nome    |     Sim      |
| Descrição |     Não      |

<br >

- Crud Produtos

|       Nome        | Obrigatório? |
| :---------------: | :----------: |
|       Nome        |     Sim      |
|     Descrição     |     Não      |
|       Preço       |     Não      |
| Preço promocional |     Não      |
|  Flag de status   |     Não      |
|     Categoria     |     Não      |

<br >

## Frontend

1. Tela de Login.
2. listar os produtos disponiveis.
3. Criar uma wishlist baseado na lista de produtos.

<br >

# Regra de Negócio

- Cada usuario deverá poder criar sua propria wishlist.
- A wishlist poderá ser salva na memoria interna do dispositivo.
- Permitir filtrar produtos por:
  - Palavra-chave
  - Produto promocional ou não
- Ordernação:
  - Preço
  - Ordem alfabética
- No login poderá optar por usar o backend ou usar um Third-party

<br >

# Requisito não funcional

Documentar no projeto como executar a aplicação.

Como esta aplicação será um sucesso mundial, ela deve estar preparada para ser acessível, responsiva, tolerante a falhas e resiliente. É altamente recomendável usar o Flutter para criar o aplicativo.

Além disso, elabore brevemente os detalhes da arquitetura de sua solução, a escolha de padrões e estruturas.

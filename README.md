# Desafio FullStack Penseapp (WORK IN PROGRESS)

Como o core da nossa empresa é o desenvolvimento de software sob medida para nossos clientes, queremos avaliar a sua capacidade técnica agora. Esse desafio é para desevolvedores flutter fullStack!

Como essa é uma vaga para fullStack, gostariamos de avaliar um pouquinho das duas partes, por isso, pensamos em um teste relativamente simples em que seja avaliado tanto front quanto backend.

## Desafio backend

Criar um `micro-service` que aceite requisições RESTful (API) capaz de gerenciar produtos de uma loja.

A loja deve conter (Pode ser mockado):
```
Nome, descrição
```

<br >

CRUD de Produtos:

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

#### Tela de Login.
Aqui você pode fazer como bem entender! Pode-se usar com email/senha

#### Tela de listagem com os produtos
#### Criar uma wishlist baseado na lista de produtos.

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

## Extras
- Cobertura de testes
- Boas práticas de codificação
- Apreço com UI
- Capacidade de usar libs prontas para gerar valor e produtividade

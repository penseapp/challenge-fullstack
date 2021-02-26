# Desafio FullStack Penseapp (WORK IN PROGRESS)

Criamos softwares sob medida para nossos clientes, assim queremos avaliar a sua capacidade técnica agora.

Essa é uma vaga para fullStack, gostariamos de avaliar um pouquinho das duas partes, por isso, pensamos em um teste simples para avaliar o desempenho nas duas stacks.

Como esta aplicação será um sucesso mundial, ela deve estar preparada para ser acessível, responsiva, tolerante a falhas e resiliente. 
É altamente recomendável usar o Flutter para criar o aplicativo.

## Desafio backend

Criar um `micro service` que aceite requisições RESTful (API) capaz de gerenciar produtos de uma loja.

A loja deve conter (Pode ser mockado):
```
Nome, descrição
```

<br >

CRUD de Produtos:
Você não precisa criar uma interface visual no flutter para implementar o CRUD, porém, a API tem que ter os métodos implementados.

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
Ta liberado! Aqui você pode fazer como bem entender! Pode-se autenticar com email/senha ou social media login, tipo Google, Facebook, etc... 

#### Tela de listagem com os produtos
Faça a listagem como bem entender, traga os produtos do backend via API

#### Criar uma wishlist baseado na lista de produtos.
Basicamente é adicionar alguns produtos nessa lista de desejos. Você tem autonomia no design, pode colocar em duas telas, numa página a parte, você é o dono da aplicação.

<br >

# Regra de Negócio

- Cada usuario deverá poder criar sua propria wishlist.
- Utilize algo para gerênciar estado, damos preferencia a utilização de BloC, MobX e Riverpod, mas você é livre para escolher qual você prefere
- A wishlist poderá ser salva na memória interna do dispositivo.
- Permitir filtrar produtos por:
  - Palavra-chave
  - Produto promocional ou não
- Ordernação:
  - Preço
  - Ordem alfabética
- No login poderá optar por usar o backend ou usar um Third-party

<br >

# Requisitos não funcionais

#### Documentar no projeto como executar a aplicação.
Precisamos avaliar o seu projeto! Também valorizamos muito um README.md bem feito. Independente de como você faça, se for local na máquina ou usando Docker, como executar a sua aplicação é fundamental para nós!

#### Extras
- Cobertura de testes
- Boas práticas de codificação
- Apreço com UI
- Não reinventar a roda, ser capaz de usar libs prontas para gerar valor e produtividade
- Elabore brevemente os detalhes da arquitetura de sua solução, a escolha de padrões e estruturas.

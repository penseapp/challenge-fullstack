#API RESTful em Node.js da aplicação de gerenciamento de produtos

Como foi explicado no desafio, esta é uma aplicação que deva estar preparada para escalar para um tamanho muito maior do que apenas uma lista de produtos. Por isso, a estrutura back end foi desenvolvida obedecendo aos princípios SOLID e com a arquitetura de micro serviços.
Para a persistência dos produtos, utilizei o banco de dados PostgreSQL em conjunto com TypeORM, utilizando decorations para definir a entidade do produto na pasta models.

Da forma que está, a API permite criar, alterar, excluir os produtos. Também é possível fazer uma busca geral, ordenada pelo nome ou pelo preço dos produtos, além de filtrar produtos por palavra chave ou os que estão com preço promocional.


Cada produto possui uma categoria específica. Ao criar um novo produto, a aplicação verifica se a categoria já existe no banco de dados. Se não houver, a nova categoria é criada. Se houver, apenas atrela ao produto criado.

Como esta aplicação será um sucesso mundial, ela deve estar preparada para ser acessível, responsiva, tolerante a falhas e resiliente. 
É altamente recomendável usar o Flutter/React native ou React para criar a aplicação.


Para fazer a autenticação da aplicação, a aplicação permite a criação de um novo usuário com nome, email e senha, e ao efetuar o login é gerado um token, que será utilizado para atrelar os produtos da wishlist.

O código da aplicação foi desenvolvido com o auxílio de ferramentas como o editorconfig, eslint e prettier que ajudam a criar um código limpo, compreensível e manutenível.

Para rodar a API, devem ser realizados os seguintes passos:

1) Iniciar o serviço de banco da dados do PostgreSQL através do docker, por exemplo
2) Criar o banco de dados "postgres", conforme o arquivo de configuração do typeorm
2) Fazer o clone do repositório na máquina
3) Executar o comando "yarn" para instalar todas as dependências do projeto
4) Executar o comando yarn typeorm migration:run para criar as tabelas no banco de dados
5) Executar o comando yarn dev:server. A aplicação irá iniciar a após alguns segundos será exibida no terminal a mensagem "Server started on port 3333!" Então é possível acessar a aplicação através do endereço http://localhost:3333/{rota}"
6) Para fazer o teste é possível utilizar um sistema como o Insomnia, acessando o endereço e passando as informações e analisando os resultados retornados.

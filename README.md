API RESTful em Node.js da aplicação de gerenciamento de produtos

Como foi explicado no desafio, esta é uma aplicação que deva estar preparada para escalar para um tamanho muito maior do que apenas uma lista de produtos. Por isso, a estrutura back end foi desenvolvida obedecendo aos princípios SOLID e com a arquitetura de micro serviços. 
Para a persistência dos produtos, utilizei o banco de dados PostgreSQL em conjunto com TypeORM, utilizando decorations para definir a entidade do produto na pasta models.

Da forma que está, a API permite criar, alterar, excluir os produtos. Também é possível fazer uma busca geral, ordenada pelo nome ou pelo preço dos produtos, além de filtrar produtos por palavra chave ou os que estão com preço promocional.
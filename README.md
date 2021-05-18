## Projeto front end da aplicação de cadastro de produtos do Pense App

A aplicação foi desenvolvida com Next.js, com a busca dos dados da API (produtos) gerados estaticamente.

Na página inicial, os produtos são disponibilizados na tela através de um grid, com a imagem, o título, o preço e a categoria, e abaixo um botão para adicionar o produto ao carrinho.

Do lado direito do header, há um campo que mostra a quantidade de produtos no carrinho, e ao clicar, é exibida a lista de itens adicionados e as respectivas quantidades, tal como o subtotal de cada um e na parte inferior, o valor total do carrinho. Nessa área também é possível aumentar ou diminuir a quantidade de cada um dos itens, sendo automaticamente atualizado o valor do subtotal e total do carrinho.

Ao lado do campo do carrinho, há um botão para fazer o login na aplicação. Ao inserir usuário e senha (cadastrados previamente no banco de dados) é feita a verificação, caso as credenciais estejam incorretas é exibida uma mensagem de erro na parte inferior da janela. Caso contrário, o login é efetuado e uma mensagem de bem-vindo com o nome do usuaŕio é exibida ao lado do botão, que agora é exibido "logout". As informações do usuário são armazenadas no Local Storage, sendo assim mesmo que a janela seja fechada, ao acessar a aplicação novamente o usuário ainda estará logado, até que o usuário clique em Logout.

Na página /admin, é possível realizar o gerenciamento dos produtos da aplicação, como alterar as informações, excluir, ou adicionar um novo produto.

Tanto na página inicial quando na página de admin, é possível ordenar os resultados pelo nome ou pelo preço, em ordem crescente ou decrescente. Também é possível filtrar os resultados por alguma palavra chave, ou então filtrar apenas os produtos que possuem preço promocional.

A estilização da aplicação foi realizada com styled components, e o design é da autoria do próprio desenvolvedor, não sendo utilizado nenhuma interface específica como referência.

Para rodar o projeto, após fazer o git clone, deve ser utilizado o comando yarn para instalar todas as dependências, e depois o comando yarn dev. Será exibida no terminal a mensagem "compiled successfully", e então a aplicação poderá ser acessada através do endereço http://localhost:3000.

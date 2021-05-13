# Iniciando

Para executar este projeto é necessário ter o Flutter instalado no PC. O Flutter pode ser encontrado para [download aqui](https://flutter.dev/docs/development/tools/sdk/releases).

# Importante

Esse frontend trabalha totalmente conectado com o backend, ambos precisam estar rodando.

# Atualizando as dependências

Para baixar/atualizar as dependências do projeto é necessário ir até o arquivo ````challenge-flutter-fullstack\pubspec.yaml````. E executar o comando para realizar a atualização/download:
```sh
flutter pub get
```

# Funcionalidades contidas na aplicação:
- Cadastro de Usuário;
- Cadastro de Loja;
- Cadastro de Produto;
- Listagem de Usuários;
- Listagem de Lojas;
- Listagem de Produtos;
- Remoção de Produtos (mas não está atualizando a tela na sequência);
- Remoção de Lojas (também não atualiza a tela após deletar);
- Persistência de dados na memória interna;
- Persistência de dados do usuário para que o mesmo mantenha-se logado;
- A estrutura foi baseada em um MVC mas utiliza o básico de gerenciamento de estados utilizando o gerenciador nativo do Flutter (setState).

# Dificuldades encontradas

A maior dificuldade nesse desenvolvimento (e o que gastou um bom pouco do tempo) foi a tentativa da implementação do BLoC. o mesmo não deu certo, então parti para o BLoC/Cubit, que também, ficou com problemas na realização da chamada POST da API, o GET estava funcionando bem mas o POST não funcionou. Nesse tempo eu parti pro React Native, comecei a desenvolver e fiz o CRUD da Loja, só que como o desafio é voltado ao Flutter, resolvi voltar e continuar no desenvolvimento, com isso utilizei meio que o padrão MVC, não é o mais recomendado para utilizar, mas visto a quantidade de tempo que ainda restavam.
# PenseApp
## Descrição
Esta é uma aplicação móvel construída com Flutter e utilizando princípios de Clean Architecture com Flutter.  
Telas desenvolvidas:

- Splash Screen
- Login
- Cadastro
- Página de produtos
- Página de wishlist

Neste projeto as pastas estão separadas em:
- Features: contemplam um grupo de funcionalidades relacionadas (autenticação, por exemplo).
- Shared: contemplam arquivos compartilhados com toda a aplicação (utils, constantes, Strings etc).
- Package: contempla uma funcionalidade específica de uma feature (login, por exemplo). Dentro do pacote ficam a página, BLoC/Cubit, e casos de uso.
## Instalação e execução
Siga os passos específicos para o sistema operacional desejado.

### Instalação
#### Windows
1. Baixe a versão [2.0.5 (stable)](https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_2.0.5-stable.zip) ou superior
2. Extraia a pasta zipada para uma localização desejada (`C:\src\flutter` é um exemplo)
3. Atualize sua variável de ambiente PATH adicionando a localização selecionada anteriormente  
    3.1. Procure por env no menu iniciar, selecione "Variáveis do usuário" e na variável `PATH` insira o caminho completo da pasta `flutter\bin` (seguindo o exemplo do segundo passo ficaria `C:\src\flutter\bin`)
4. Abra o prompt de comando ou Powershell e digite `flutter doctor`. Se o comando funcionar, então está tudo configurado certo (até agora). O comando informará que algumas dependências do Flutter ainda não foram instaladas.
5. Baixe e instale o [Android Studio](https://developer.android.com/studio).
6. Inicie o Android Studio e siga para "Android Studio Setup Wizard". Este passo consiste em instalar as versões mais recentes do SDK do Android e suas respectivas Command-line e Build-Tools.
7. Configure um dispositivo Android ou um emulador para testar sua aplicação.

#### Linux
1. Baixe a versão [2.0.5 (stable)](https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_2.0.5-stable.tar.xz) ou superior
2. Extraia a pasta zipada para uma localização desejada, por exemplo:
    ```bash
    $ cd ~/development
    $ tar xf ~/Downloads/flutter_linux_2.0.5-stable.tar.xz
    ```
3. Adicione o Flutter nas suas variáveis de ambiente:  
    3.1. Se você utiliza o Bash shell (padrão do Linux), então edite o arquivo `$HOME/.bashrc`  
    3.2. Adicione a linha a seguir, trocando [FLUTTER_DIR] pelo caminho escolhido no passo 2.
    ```bash
    $ export PATH="$PATH:[FLUTTER_DIR]/bin"
    ```  
    3.3. Recarregue o seu terminal com `source $HOME/.bashrc` ou feche e abra o terminal novamente.  
4. Por fim, no terminal digite `flutter doctor`. Se o comando funcionar, ele informará que algumas dependências do Flutter ainda não foram instaladas.
5. Baixe e instale o [Android Studio](https://developer.android.com/studio).
6. Inicie o Android Studio e siga para "Android Studio Setup Wizard". Este passo consiste em instalar as versões mais recentes do SDK do Android e suas respectivas Command-line e Build-Tools.
7. Configure um dispositivo Android ou um emulador para testar sua aplicação.

#### macOS
1. Baixe a versão [2.0.5 (stable)](https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_2.0.5-stable.zip) ou superior
2. Extraia a pasta zipada para uma localização desejada, por exemplo:
```bash
 cd ~/development
 unzip ~/Downloads/flutter_macos_2.0.5-stable.zip
```
3. Adicione o Flutter nas suas variáveis de ambiente:  
    3.1. Digite `echo $SHELL` para descobrir qual terminal está utilizando.
    3.2. Se você está utilizando o Bash então edite o arquivo `$HOME/.bash_profile` ou `$HOME/.bashrc`. Se estiver utilizando o Z shell então edite o arquivo `$HOME/.zshrc`  
    3.3. Adicione a linha a seguir, trocando [FLUTTER_DIR] pelo caminho escolhido no passo 4.
    ```bash
    $ export PATH="$PATH:[FLUTTER_DIR]/bin"
    ```  
    3.4. Recarregue o seu terminal com `source $HOME/.<rc file>` ou feche e abra o terminal novamente.
4. Para desenvolver para iOS você precisará de um Mac com o Xcode instalado. Para isso, instale a versão mais recente do Xcode através através da [Web](https://developer.apple.com/xcode/) ou [iTunes](https://itunes.apple.com/us/app/xcode/id497799835).  
    4.1. Configure as ferramentas de linha de comando do Xcode para usar a recém-instalada versão:
    ```bash
    $ sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
    $ sudo xcodebuild -runFirstLaunch
    ```
    4.2. Certifique-se que as licenças do Xcode seja assinado abrindo o Xcode uma vez e confirmando ou executando `sudo xcodebuild -license` no terminal.


### Execução
Para a correta execução deste aplicativo, siga os passos abaixo:

1. Baixe as dependências do projeto digitando no terminal `flutter pub get`
2. Abra um emulador (ou simulador iOS) ou configure um dispositivo físico.
3. Na pasta raiz do projeto mobile digite no terminal `flutter run`

## Dependências Utilizadas
- dio
- multiple_result
- equatable
- connectivity_plus
- jwt_decoder
- internet_connection_checker
- bloc_riverpod
- hooks_riverpod
- hive
- hive_flutter
- pdf
- path_provider
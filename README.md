<p align="center">
    <img src="https://raw.githubusercontent.com/fga-eps-mds/2020.1-Conecta-Ensina-Mobile/readme/github/conecta-logo.png" alt="logo">
</p>

<h1 align="center">Conecta Ensina - Frontend Mobile</h1>

Frontend mobile do projeto Conecta Ensina.

## Dependências

- git
- yarn
- react-native-cli
- Android Studio

Recomenda-se seguir o [tutorial](https://react-native.rocketseat.dev/) de configuração de ambiente da Rocketseat.

## Erros comuns

É necessário instalar o Android Studio de maneira customizada, utilizando o caminho ```JAVA_HOME```. Verifique se as variáveis ambiente estão devidamente configuradas no``` ~/.bashrc``` ou ```~/.zshrc```:
```
export JAVA_HOME=ENDEREÇO_DE_INSTALAÇÃO_DO_JDK
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Existe um [erro](https://github.com/facebook/react-native/issues/23306) de Gradlew que pode ser resolvido com:
```
chmod 755 android/gradlew
```

## Inicialização
Clone o repositório
```
git clone https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Mobile.git
```
Instale as dependências
```
yarn install
```
Inicie a aplicação
```
yarn start
```
Emule a aplicação com o Android Studio
```
yarn android
```
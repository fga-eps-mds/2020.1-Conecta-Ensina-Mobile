![logo](github/conecta-logo.png)

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![Percentage of issues still open](http://isitmaintained.com/badge/open/fga-eps-mds/2020.1-Conecta-Ensina-Mobile.svg)](http://isitmaintained.com/project/fga-eps-mds/2020.1-Conecta-Ensina-Mobile "Percentage of issues still open")

## Dependências

- [git](https://git-scm.com/)
- [yarn](https://yarnpkg.com/)
- [react-native-cli](https://reactnative.dev/docs/0.8/getting-started)
- [Android Studio](https://developer.android.com/studio)

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
Existe um [erro](https://github.com/facebook/react-native/issues/23306) de Gradlew que pode ser resolvido no Linux com:
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

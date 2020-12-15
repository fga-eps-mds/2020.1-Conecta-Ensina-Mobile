![logo](github/conecta-logo.png)

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


[![codecov](https://codecov.io/gh/fga-eps-mds/2020.1-Conecta-Ensina-Mobile/branch/master/graph/badge.svg)](https://codecov.io/gh/fga-eps-mds/2020.1-Conecta-Ensina-Mobile)

![travis](https://travis-ci.com/fga-eps-mds/2020.1-Conecta-Ensina-Mobile.svg?branch=master)


[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Mobile)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Mobile&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Mobile) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Mobile&metric=bugs)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Mobile) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Mobile&metric=code_smells)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Mobile) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Mobile&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Mobile) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Mobile&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Mobile) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Mobile&metric=security_rating)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Mobile) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=fga-eps-mds_2020.1-Conecta-Ensina-Mobile&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=fga-eps-mds_2020.1-Conecta-Ensina-Mobile)

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

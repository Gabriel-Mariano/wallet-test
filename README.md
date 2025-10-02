Este é um novo [**React Native**](https://reactnative.dev) projeto, usando bootstrapped [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

## Etapa 1: Inicie o Metro

Primeiro, você precisará executar o **Metro**, a ferramenta de construção JavaScript para React Native.

Para iniciar o servidor de desenvolvimento do Metro, execute o seguinte comando na raiz do seu projeto React Native:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Etapa 2: Crie e execute seu aplicativo

Com o Metro em execução, abra uma nova janela/painel de terminal na raiz do seu projeto React Native e use um dos seguintes comandos para criar e executar seu aplicativo para Android ou iOS:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

Para iOS, lembre-se de instalar as dependências do CocoaPods (isso só precisa ser executado no primeiro clone ou após atualizar as dependências nativas).

Na primeira vez que você criar um novo projeto, execute o Ruby Bundle para instalar o CocoaPods:

```sh
bundle install
```

Em seguida, sempre que atualizar suas dependências nativas, execute:

```sh
bundle exec pod install
```

Para mais informações, visite [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

## Configuração do backend

No arquivo `src/services/api.ts` (ou onde estiver configurado o Axios), altere a propriedade `baseURL` para o IP da sua máquina.

Exemplo:

```ts
export const api = axios.create({
  baseURL: 'http://SEU_IP_LOCAL:3000',
  timeout: 5000,
});
```

## Configuração do (JSON Server)

Para este projeto, usamos um **JSON Server** para simular a API. Para que a aplicação funcione corretamente, você precisa rodar o JSON Server localmente.

1. Certifique-se de ter o `db.json` na raiz do projeto (ou em outro caminho que você preferir).

2. No terminal, execute:

```sh
npx json-server --watch db.json --port 3000


Se tudo estiver configurado corretamente, você verá seu novo aplicativo em execução no emulador Android, no simulador iOS ou no seu dispositivo conectado.

Esta é uma maneira de executar seu aplicativo — você também pode compilá-lo diretamente do Android Studio ou do Xcode.
```

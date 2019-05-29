# SuHero App

Criado para Consumir a API https://superheroapi.com/

## Criado com
- React Native 0.59
- Gerenciador de Pacotes Yarn

## Requisitos
 - pacote `react-native cli` instalado
 - npm
 - Yarn
 - Xcode ou Android studio com emulador configurado
## Para executar o código
 - Entrar em `src/Server.js` e inserir seu token gerado na [api](https://superheroapi.com/)
 - Ir na pasta raiz e executar `yarn install` para instalar as dependencias
 - executar `react-native run-ios` (ou run-android, mas este deve ter um emulador ativo e configurado)

### Elaboração da solução
- A idéia foi criar um app que apresentasse os herois como figurinhas de um 'Card Game'
- foi escolhido uma fonte diferenciada para os nomes dos herois
e um background que lembrasse Quadrinhos
### Itens técnicos
- Neste app foi utilizado o maximo possivel de componentes funcionais para minimizar potenciais problemas com estados inconsistentes.
- Componentes complexos foram separados na pasta `componentes`
- Todo o componente exibido pelo `Navigator.js` foi inserido na pasta `screens`
- as imagens e fonte personalizada estão na pasta `assets`
- O `navigator.js` gerencia toda a navegação do app
- O `Server.js` armazena todos os endpoints da aplicação

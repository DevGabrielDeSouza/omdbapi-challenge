# Desafio 2
## OMDb API

### Descrição do desafio
Criar um projeto de automação para API utilizando framework de sua preferência os cenários para as duas funcionalidades abaixo:

EndPoint http://www.omdbapi.com/?i=[ID_DO_FILME]&apikey=[API_KEY]

Parametros ID_DO_FILME: tt1285016 API_KEY= 52ec71bf

**ID_DO_FILME e API_KEY deverão ser passados por variaveis GLOBAIS**

1. No endpoint validar o response para:
   - Título do Filme
   - Ano do Filme
   - Idioma do filme

 <br/>

2. No endpoint validar o response para:
   - Busca filme inexistente

### Instruções para execução
1. Baixe o projeto na sua máquina local.
2. Através de um terminal, navegue até o diretório do projeto e instale as dependências npm com o comando:
```
npm install
```
3. Execute os testes com Cypress utilizando um dos comandos personalizados
   - Executar testes com navegador interno (Electron sem interface)
     - ```npm run test```
   - Executar testes com navegador interno (Electron sem interface) e enviar resultados para Cypress Dashboard/GitHub
     - ```npm run test-ci```
   - Executar testes com Google Chrome
     - ```npm run test-chrome```
   - Executar testes com Google Chrome e enviar resultados para Cypress Dashboard/GitHub 
     - ```npm run test-chrome-ci```
   - Executar testes com Microsoft Edge
     - ```npm run test-edge```
   - Executar testes com Microsoft Edge e enviar resultados para Cypress Dashboard/GitHub 
     - ```npm run test-edge-ci```
   - Executar testes com Mozilla Firefox
     - ```npm run test-firefox```
   - Executar testes com Mozilla Firefox e enviar resultados para Cypress Dashboard/GitHub 
     - ```npm run test-firefox-ci```
   - Abrir Cypress IDE (Contém mais opções padrões de teste, porém não gera artefatos, como vídeos)
     - ```npm run cypress-ide```
4. O Cypress irá gerar gravações de vídeo dos testes como artefatos na pasta ```cypress\videos```
5. No caso dos testes com CI, os relatórios, resultados, vídeos e artefatos podem ser acessados no link: [Cypress Dashboard: omdbapi-challenge](https://dashboard.cypress.io/projects/vrqr4u/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D)
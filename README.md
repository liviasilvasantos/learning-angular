# learning-angular

Execuções e testes realizados durante o curso de angular da Loiane Groner (loiane.training).

## Instalações

- **NodeJS**: https://nodejs.org/en/  
 Para atualizar a versão caso já esteja instalado: 
```
$sudo npm install -g n  
$sudo n latest  
```    
- **Typescript**  
```
$sudo npm install -g typescript  
```
- **Typings**:  
```
$sudo npm install typings --global  
```
- **Visual Studio Code**:  
- **AngularCLI**:  
```
$sudo npm install -g @angular/cli  
```  

```
$ng -v  
```

## Primeira app (HelloWorld)

```
$ng new PROJECT_NAME  
$cd PROJECT_NAME  
$ng serve  
```

> http://localhost:4200/

### Gerando o componente manualmente

### Gerando o componente via angular-cli

```
$ng g c nome-componente
```

## Primeiro typescript

Criar arquivo main.ts e compilar:

```
$tsc main.ts
```

Será gerado o arquivo js pelo transpiler do typescript.

## Trabalhando com módulos (module)

```
$ng g m nome-modulo
```

## Trabalhando com serviços (services)

```
$ng g s nome-servico
```

## Bootstrap

Para adicionar bootstrap no seu projeto Angular, usar as instruções em https://valor-software.com/ngx-bootstrap/#/documentation#getting-started.

## Angular/Cli

Para dicas de instalação e documentação, ver https://github.com/angular/angular-cli.

Para criar um projeto em um diretório que já existe:

```
$mkdir projeto_novo
$cd projeto_novo
$ng init 
```

Para criar um novo projeto, e deixar o angular/cli criar o diretório:

```
$ng new projeto_novo
$cd projeto_novo
```

## Criando arquivos

**Component**: ng generate component meu-componente ou ng g c meu-componente  
**Service**: ng generate service meu-servico ou ng g s meu-servico  
**Directive**: ng generate directive minha-diretiva ou ng g d minha-diretiva  
**Pipe**: ng generate pipe meu-pipe ou ng g p meu-pipe  
**Class**: ng generate class minha-classe ou ng g class minha-classe  
**Interface**: ng generate interface minha-interface ou ng g interface minha-interface  
**Enum**: ng generate enum meu-enum ou ng g enum meu-enum   


## ng lint

Faz um scan no projeto e verifica por boas práticas do style guide. No Windows, precisei instalar o lint:

```
$cd projeto
$npm install -g tslint
$npm update
$ng lint
```

## ng test

Executa os testes unitários com Jasmine (arquivos com extensão .spec.ts, que não gerados automaticamente ao usar ng g).

## ng e2e

Executa os testes end-to-end com Protector.

### Angular CLI

1. Cria toda a estrutura do projeto
2. Gera página HTML inicial, arquivos Typescript iniciais, arquivos CSS e arquivos de testes unitários
3. Cria arquivo package.json com todas as dependências do Angular

    Projetos Angular são baseados do npm, ou seja, são projetos na estrutura node.js. 

4. Instala todas as dependências do node (npm install)
5. Configura o Karma para executar os testes unitários com Jasmine
6. Configura Protractor para executar os testes end-to-end (e2e)
7. Inicializa um repositório git no projeto e faz commit inicial
8. Cria todos os arquivos necessários para fazer o build da aplicação para a produção

O Angular usa o EmberCLI por baixo (cria os diretórios, build, etc)

## Configurações

### karma.conf.js

Configurações específicas do Karma para a execução dos testes unitários.

### e2e/protractor.conf.js

Configurações específicas do Protractor para a execução dos testes end-to-end.

### src/environments/environment.ts

Configurações do ambiente de desenvolvimento/produção.

### dist/

Onde são gerados os artefatos de build da aplicação.

### node_modules/

Onde ficam todos os pacotes (bibliotecas e dependências do projeto) do npm instalados para a aplicação. Usa-se *npm install* para instalar as dependências ou *npm install --save* para instalar no node_modules e também atualizar o arquivo package.json. Por padrâo, é ignorado pelo git. 

### src/

Diretório do código-fonte da aplicação. Contém código typescript (*.ts), javascript (*.js), css, imagens e template html.

### angular.json

Contém informações sobre o projeto e build de produção, como nome do projeto.

### tsconfig.json

Contém configurações de onde encontrar os arquivos fontes do app, config de testes, etc. 

### tslint.json

Contém configurações para fazer lint do app.

### package.json

- dependencies: dependências necessárias para executar a aplicação.
- devDependencies: dependências necessárias para desenvolver a aplicação (não necessários após do build de aplicação).

**@angular/core**: pacote principal do Angular. Contém decorators e metadados, Component, Directive, injeção de dependência e os hooks de ciclo de vida do Component.  
**@angular/common**: serviços, pipes e diretivas comuns fornecidas pelo time de dev do Angular.  
**@angular/compiler**: template de compilação do angular. Entende o código dos templates e converte em código que faz a app ser executada e renderizada. Desenvolvedores não integragem com esse pacote diretamente.  
**@angular/forms**: contém todo o códiog para a construção de formulários com Angular.  
**@angular/platform-browser**: contém todo o código relacionado ao DOM e ao browser, especialmente as partes que ajudam a renderizar o DOM. Esse pacote também contém o método para fazer o bootstrap da aplicação para builds de produção que pré-compila os templates.  
**@angular/platform-browser-dynamic**: contém as providers e o método para iniciar as aplicações que compilam templates no lado do cliente. Não usa compilação offline. Usada para fazer bootstrap durante desenvolvimento e exemplos plunker.  
**@angular/http**: fornece o cliente Http.  
**@angular/router**: classes de roteamento.  

## Gerando build 

**Desenvolvimento**

```
$cd projeto
$ng build --target=development --environment=dev
$ng build --dev --e=dev
$ng build --dev
$ng build
```

**Produção**

Obfusca e minifica o código JS da aplicação. CSS e templates HTML já minificados e incluídos em main.bundle.js.

```
$cd projeto
$ng build --target=production --environment=prod
$ng build --prod --e=prod
$ng build --prod
```

Para executar em um servidor web do node, instalar o http-server:

```
$ npm install http-server -g
```

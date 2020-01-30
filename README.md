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


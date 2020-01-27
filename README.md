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
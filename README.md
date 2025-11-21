# 🚀 Desafio Cypress QA

Este projeto é uma estrutura de automação de testes **Híbrida (E2E & API)**, desenvolvida utilizando **Cypress 13+**, **Cucumber (Gherkin)** e **TypeScript**.

O objetivo é demonstrar uma arquitetura escalável que permite validar interfaces web (UI) e APIs RESTful no mesmo ecossistema, com relatórios visuais detalhados.

---

## 🛠 Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/):** Framework principal de testes.
* **[Cucumber (Badeball)](https://github.com/badeball/cypress-cucumber-preprocessor):** Preprocessor moderno para escrever testes em BDD (Gherkin).
* **[TypeScript](https://www.typescriptlang.org/):** Superset do JS para tipagem estática e segurança de código.
* **[Esbuild](https://esbuild.github.io/):** Bundler extremamente rápido para transpilação do TypeScript.
* **[Multiple Cucumber HTML Reporter](https://github.com/wswebcreation/multiple-cucumber-html-reporter):** Geração de relatórios gráficos pós-execução.

---

## 📂 Estrutura do Projeto

A arquitetura foi desenhada para separar responsabilidades, facilitando a manutenção:

```bash
/
├── config/                 # Scripts de configuração (ex: gerador de relatório HTML)
├── cypress/                
│   └── reports/            # Artefatos gerados (JSONs e HTML do relatório)
├── helper/                 # Utilitários globais e Hooks
│   ├── auth.ts             # Lógica de autenticação (API Login -> Token)
│   └── hooks.ts            # Hooks do Cucumber (Before, After)
├── pages/                  # Page Objects (Ações exclusivas de UI)
│   └── HomePage.ts        
├── utils/                  # API Clients e DTOs
│   └── apiClient.ts        # Wrapper para chamadas cy.request (GET, POST, etc.)
├── src/
│   └── tests/              # Camada de Teste (BDD)
│       ├── features/       # Arquivos .feature (Gherkin)
│       └── steps/          # Definição dos passos (Step Definitions)
├── .cypress-cucumber-preprocessorrc.json  # Configuração do Cucumber
├── cypress.config.ts       # Configuração principal do Cypress
├── tsconfig.json           # Configuração do TypeScript (Mode: Bundler)
└── package.json            # Scripts e dependências
```

## ⚙️ Pré-requisitos

- 🟢 **Node.js**
- 🥒 **Cucumber (Gherkin)**

## 💻 IDE Recomendado

- **Visual Studio Code (VSCode)**

## 🚀 1. Instalação

Antes de tudo, é necessário ter o **Node.js** instalado.

Em seguida, faça a **clonagem do projeto**:

```bash
git clone https://github.com/joaopretto/desafio-cypress-QA.git
```
Acesse a pasta do projeto e instale as dependências:

```bash
npm install
npm install --save-dev cypress typescript ts-node
npm install --save-dev @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor esbuild
```
Para executar os cenários de teste:

```bash
npm run cucumber
```
**Caso queira rodar os testes de modo interativo com a interface do Cypress**
```bash
npm run cypress:open
```
Após a execução do teste é gerado um relátorio na pasta **"Cypress/report/html/index.html"**

## Observações

A automação ela é composta por apenas 1 cenário de API utilizando o Cypress, mas para dizer que é possivel sim fazer testes e preparações de cenários utilizando a API como **POST, DELETE, PUT e GET**.
E também possuí alguns cenários ao site https://www.saucedemo.com/ focado no **E2e** dos cenários.
Por que utilizei o Sauce para automatizar, por algum motivo o site passado para o desafio estava fora e não deu para fazer a cobertura do mesmo segue o link do site passado: https://lojaebac.ebaconline.art.br/


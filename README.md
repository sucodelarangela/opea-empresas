<div id='top'>

# Opea Empresas

</div>

_[Read it in English](#English)_

O **Opea Empresas** é uma página web que lista empresas fictícias e seus detalhes (nome, cnpj e email) em formato de uma tabela responsiva. Esta página foi desenvolvida para um teste técnico de **desenvolvedor Front End** na [**Opea Capital**](https://www.opeacapital.com/pt/) - uma plataforma que facilita e agiliza operações de crédito.

Para este teste técnico foram utilizadas as seguintes tecnologias:

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/axios-ffffff?style=for-the-badge&logo=axios&logoColor=5A29E4">
  <img src="https://img.shields.io/badge/react hook form / yup-081229?style=for-the-badge&logo=reacthookform&logoColor=EC5990">
</div>

<!-- prettier-ignore -->
| 🪧 Dados do projeto |     |
| -------------- | --- |
| ✨ Nome        | **Opea Empresas** |
| 🏷️ Tecnologias | React, TypeScript, Sass, Axios, Vite, React-Hook-Form, Yup |
| 🎨 Design      | [**https://www.figma.com/**](https://www.figma.com/file/Hf7NUmMtjL2iWpPy7SMgKf/TesteFront?type=design&node-id=1-144&t=WkC4n0Sx0v9TGkny-0) |
<!--| 🚀 URL         | **https://opea-empresas.vercel.app/** |-->

![](./public/ogimage.png#vitrinedev)

## ✅ Plano de desenvolvimento

- [x] Setup inicial do projeto
- [x] Implementação de GET request da API para listagem em tela
- [x] Desenvolvimento da interface:
  - [x] Componente Header
  - [x] Componente barra de busca
  - [x] Componente de tabela para listagem das empresas
  - [x] Componente Botão Adicionar Empresa
  - [x] Componente Modal para gerenciamento das empresas (Adicionar, Editar ou Deletar empresa do banco de dados)
- [x] Funcionalidades:
  - [x] Criação das demais requests do CRUD (POST, PUT e DELETE)
  - [x] Validação do formulário com react-hook-form e yup
  - [x] Implementação de POST de empresas
  - [x] Vínculo da Modal à edição de empresas
  - [x] Implementação do PUT de empresas
  - [x] Implementação do DELETE de empresas
  - [x] Re-renderização automática de componentes após requests
  - [x] Implementação da busca com o endpoint fornecido pela API
- [x] Verificação de responsividade
- [x] Acessibilidade para leitores de tela e navegação via Tab
- [x] Tags meta para SEO

## 📝 Comentários

Minha meta de desenvolvimento foi manter o design da aplicação fiel ao design proposto pela **Opea**, seguindo o conceito de desenvolvimento `pixel-perfect`. No entanto, considerando que não havia _style-guide_ no Figma e visando uma melhor experiência ao usuário, modifiquei o mínimo possível os seguintes pontos:

- Adição de efeitos de `:hover` e `:focus` aos elementos que possuem interação;
- Estilização do ícone de lupa na barra de pesquisa para uso como botão do tipo `submit` para a busca;
- Adição do botão `Editar` para cada linha da tabela, para acessibilidade visual e facilidade de uso;
- Uso de `tabIndex` e atributos `WAI-ARIA` para melhor acessibilidade;
- Pequeno rodapé apenas para indicação de autoria de desenvolvimento.

Para não destoar do design proposto, mantive as fontes do tamanho previsto, porém sugiro não utilizar tanto as fontes de tamanho `12px` para conteúdos textuais em tela, a não ser em casos pontuais. A fonte `12px` pode prejudicar a acessibilidade visual. No entanto, a página mantém ativa a possibilidade de zoom para uma melhor experiência do usuário nesse quesito.

Outro ponto que eu particularmente teria feito diferente foi o filtro de busca. Normalmente, eu faço o filtro diretamente nos dados já carregados no front-end da aplicação para não aumentar a quantidade de requisições ao banco de dados. Porém, visto que na documentação do teste foi indicado um endpoint específico, optei por implementar utilizando o endpoint para respeitar aos requisitos do teste.

Uma sugestão de implementação futura para melhoria de conforto visual é a implementação de um `dark mode`.

<a href='#top'>🔼 Voltar ao topo</a>

---

<div id="English">

_English version_

</div>

## 🔎 Overview

**Opea Empresas** is a web page for listing fictitious companies/clients and their details (name, registration number and email) in a responsive table. This page was developed as a code test for a **Frontend Developer** position at [**Opea Capital**](https://www.opeacapital.com/pt/) - a platform which makes credit operations easier and faster.

I have used the following technologies in this code test:

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/axios-ffffff?style=for-the-badge&logo=axios&logoColor=5A29E4">
  <img src="https://img.shields.io/badge/react hook form / yup-081229?style=for-the-badge&logo=reacthookform&logoColor=EC5990">
</div>

## ✅ Development Plan

- [x] Initial setup of the project
- [x] GET request from the API for listing clients
- [x] UI development:
  - [x] Header component
  - [x] Search bar component
  - [x] Table component for listing the clients
  - [x] Add Company Button component
  - [x] Dialog component for managing the companies (add, update and/or delete from database)
- [x] Features and functionalities:
  - [x] Creation of other CRUD requests (POST, PUT and DELETE)
  - [x] Form validation with react-hook-form e yup
  - [x] POST company implementation
  - [x] Link Dialog to company edition
  - [x] PUT company implementation
  - [x] DELETE company implementation
  - [x] Automatic re-render of components after requests
  - [x] Search implementation using the API endpoint given
- [x] Check responsivity
- [x] Screen readers and tab navigation accessibility
- [x] Meta tags for SEO

## 📝 Comments

My goal was to keep the page design the more faithful to the Figma design sent by **Opea**, following the `pixel-perfect` development concept.However, since there was no _style-guide_ on Figma and aiming to a better user experience, I have slightly changed the following points:

- Add `:hover` and `:focus` effects on interactive elements;
- Search icon styling for using it as `submit` button for the search bar;
- Add an `Edit` button for each row in the table for better visual accessibility and user experience;
- Use of `tabIndex` and `WAI-ARIA` attributes for better accessibility;
- A small footer to indicate development authorship.

I have kept the font-size the same as indicated on Figma, but I suggest not using the `12px` size so much on text content, unless in specific points. The `12px` font-size may turn visual accessibility worse, but the page allows zooming for better user experience.

Particularly, I would have done the Search funcionality by filtering the data that is already loaded in the Frontend, without making so many requests to the database. But since the test documentation had a specific endpoint for search requests, I have chosen to implement the filter by using this endpoint, respecting the test requirements.

Another suggestion is implementing a `dark mode` for better sight comfort.

<a href='#top'>🔼 Back to top</a>

---

Developed with 🧡 by [@sucodelarangela 🍊](https://angelacaldas.vercel.app)

# Github Stars
This project serves as a backend designed to function as a public API to demonstrate the use of the GitHub API. Its purpose is to search for developer repositories, where you can search for repositories with or without stars, add filters via a tag to view only what has been filtered.

The server was implemented in NodeJS with the JavaScript language, express framework and non-relational database MongoDB. We have left the documentation for all dependencies in a link against the dependency in the Dependencies section.

![logo_transparent](https://user-images.githubusercontent.com/56320849/117412467-34b8b580-aeeb-11eb-9448-624322ccc704.png)
<em>Logo created in: https://hatchful.shopify.com/pt-BR/</em>

<h2>Integração com a API do GitHub <h2>
  This backend connects to the GitHub API for the purpose of sending and receiving requests. You can read more about the API <a href="https://docs.github.com/en/rest">here.</a>



Package Manager
----------------------
 * Yarn 
-----------

 Dependencies
 ---------------------
* mongoose - https://www.npmjs.com/package/mongoose
* express - https://www.npmjs.com/package/express
* axios - https://www.npmjs.com/package/axios
* dotenv - https://www.npmjs.com/package/dotenv

-----------

Dev Dependencies
 ---------------------
* eslint
* eslint-config-airbnb-base
* eslint-config-prettier
* eslint-plugin-import
* eslint-plugin-prettier
* nodemon
* prettier
* sucrase
-----------


# Starting application
  1) Install Yarn
 > https://classic.yarnpkg.com/en/docs/install/#windows-stable

  2) Generating node_modules
 > $ yarn
  
  3) Start server
 > $ yarn dev

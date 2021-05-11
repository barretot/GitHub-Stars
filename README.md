# Github Stars
This project serves as a backend designed to function as a public API to demonstrate the use of the GitHub API. Its purpose is to search for developer repositories, where you can search for repositories with or without stars, add filters via a tag to view only what has been filtered.

The server was implemented in <a href="https://nodejs.org/en/docs/">NodeJS</a> with the <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript</a> language, <a href="https://expressjs.com/en/starter/installing.html"> express framework</a> and non-relational database <a href="https://docs.mongodb.com/">MongoDB</a>. We have left the documentation for all dependencies in a link against the dependency in the Dependencies section.


## Integration with the GitHub API 
This backend connects to the GitHub API for the purpose of sending and receiving requests. You can read more about the API <a href="https://docs.github.com/en/rest">here.</a>


![logo](https://user-images.githubusercontent.com/56320849/117805402-51c4ef80-b22f-11eb-8c4d-caea71aed396.png)
<em>Logo created in: https://hatchful.shopify.com/pt-BR/</em>


## Running the server
The first step in running the server is to check if you have NodeJS installed on your machine, if not, download it <a href="https://nodejs.org/en/download/">here</a>

After installation, <a href="https://github.com/brainnco-exs/challenge-barretot">clone</a> this project to a location of your choice and open the terminal in the project folder and run the following command according to your package manager, the project used the <a href="https://classic.yarnpkg.com/lang/en/">Yarn.</a> package manager. If you prefer to use it, download it <a href="https://classic.yarnpkg.com/en/docs/install#debian-stable">here.</a> 


### Installing dependencies:

#### Yarn
```
$ yarn 
```

#### NPM

```
$ npm install
```

### Configuring Database
The default database used by the project is <a href="https://docs.mongodb.com/">MongoDB</a>, using a service called <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> where clusters are created where all the data is saved in the cloud.

The database configuration was created with environment variables, so you need to quote all these variables to the server

#### Creating Environment Variables

Create a file in the project root that points to the environment variables with the name <a href="https://www.npmjs.com/package/dotenv">.env</a> and write the following information for the database connection:
```
MONGO_USERNAME=brain
MONGO_PASSWORD=brain2021
MONGO_NAME_DB=GithubStars
```
### Starting the server
After completing all the above configuration the server is ready to run. Run the following command to start the server:
#### Yarn
```
$ yarn dev
```

#### NPM

```
$ npm start dev
```
### The terminal should return these results to the user: 
If you have followed all the above configuration then the terminal should return the following results without error, if it returns an error, review all the above configuration.
```
warning ../../../package.json: No license field
$ nodemon src/server.js --ignore __tests__
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/server.js`
```

### To use the API correctly, follow the documentation
The documentation was written in the <a href="https://www.notion.so/">Notion</a> one application and note service, <a href="https://www.notion.so/GitHub-Stars-API-486c1a77be7340df90ddb19e832a15fd">Github Stars API Doc</a>


## Project information

### Code Linter
In this project the developer used a code linter called <a href="https://www.npmjs.com/package/eslint">Eslint</a> configured with the <a href="https://www.npmjs.com/package/eslint-config-airbnb-base">Airnbnb linteres.</a> The linter settings can be found in the <a href="https://github.com/brainnco-exs/challenge-barretot/blob/master/.eslintrc.js">.eslintrc.js</a> and <a href="https://github.com/brainnco-exs/challenge-barretot/blob/master/.prettierrc">.prettierrc </a>file. The <a href="https://github.com/brainnco-exs/challenge-barretot/blob/master/.editorconfig">.editorconfig</a> file configures the project linter for use in other IDES. To better understand this read the <a href="https://editorconfig.org/"> EditorConfig documentation</a>

#### Package Manager

 * <a href="https://classic.yarnpkg.com/lang/en/">Yarn</a>  

#### Dependencies

* <a href="https://www.npmjs.com/package/mongoose">Mongoose</a>
* <a href="https://www.npmjs.com/package/express">Express</a>  
* <a href="https://www.npmjs.com/package/axios">Axios</a>  
* <a href="https://www.npmjs.com/package/dotenv">Dotenv</a> 
* <a href="https://www.npmjs.com/package/yup">Yup</a> 


#### Dev Dependencies
* <a href="https://www.npmjs.com/package/eslint">Eslint</a>
* <a href="https://www.npmjs.com/package/eslint-config-airbnb-base">Eslint-config-airbnb-base</a>
* <a href="https://www.npmjs.com/package/eslint-config-prettier">Eslint-config-prettier</a>
* <a href="https://www.npmjs.com/package/eslint-plugin-prettier">Eslint-plugin-prettier</a>
* <a href="https://www.npmjs.com/package/nodemon">Nodemon</a>
* <a href="https://www.npmjs.com/package/prettier">Prettier</a>




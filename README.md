# Github Stars
This project serves as a backend designed to function as a public API to demonstrate the use of the GitHub API. Its purpose is to search for developer repositories, where you can search for repositories with or without stars, add filters via a tag to view only what has been filtered.

The server was implemented in <a href="https://nodejs.org/en/docs/">NodeJS</a> with the <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript</a> language, <a href="https://expressjs.com/en/starter/installing.html"> express framework</a> and non-relational database <a href="https://docs.mongodb.com/">MongoDB</a>. We have left the documentation for all dependencies in a link against the dependency in the Dependencies section.


## Integration with the GitHub API 
This backend connects to the GitHub API for the purpose of sending and receiving requests. You can read more about the API <a href="https://docs.github.com/en/rest">here.</a>


![logo](https://user-images.githubusercontent.com/56320849/117805402-51c4ef80-b22f-11eb-8c4d-caea71aed396.png)
<em>Logo created in: https://hatchful.shopify.com/pt-BR/</em>


## Running the server
The first step in running the server is to check if you have NodeJS installed on your machine, if not, download it <a href="https://nodejs.org/en/download/">here</a>

After installation, <a href="https://github.com/brainnco-exs/challenge-barretot">clone</a> this project to a location of your choice and open the terminal in the project folder and run the following command according to your package manager, the project used the <a href="https://classic.yarnpkg.com/lang/en/">Yarn</a> package manager. If you prefer to use it, download it <a href="https://classic.yarnpkg.com/en/docs/install#debian-stable">here.</a> 


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
The default database used by the project is <a href="https://docs.mongodb.com/">MongoDB</a>, using a service called <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> where clusters are created and all the data is saved in the cloud.

The database configuration was created with environment variables, so you need to quote all these variables to the server

#### Creating Environment Variables

Create a file in the project root that points to the environment variables with the name **`.env`** and write the following information for the database connection:
```
MONGO_USERNAME=brainnco
MONGO_PASSWORD=brainn2021
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
### Viewing Collections in the Database
If you want to see in real time the data being inserted into the database you need to download <a href="https://www.mongodb.com/try/download/compass">MongoDB Compass</a>, this software is responsible for showing the user the collections that have been created in the <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> clusters.

After starting the MongoDB compass application, you will see the text field written "Paste your connection string" is where you will put the following information:

```
mongodb+srv://brainnco:brainn2021@ecommerce.ustac.mongodb.net/test
```
![image](https://user-images.githubusercontent.com/56320849/118343385-0fd1cd00-b4ff-11eb-8443-007070eeeebb.png)

Click Connect and you're all set!


### To use the API correctly, follow the documentation
The documentation was written in the <a href="https://www.notion.so/">Notion</a> one application and note service, <a href="https://www.notion.so/GitHub-Stars-API-486c1a77be7340df90ddb19e832a15fd">Github Stars API Doc</a>

### Running the tests
The tests of this project were developed using the  <a href="https://jestjs.io/">jest</a> library. The tests use environment variables so before they are run create a file at the root of your project called **`.env.test`** and enter the following information: 
```
MONGO_USERNAME=brainnco
MONGO_PASSWORD=brainn2021
MONGO_NAME_DB=tests
```
After creating the environment variables the tests are ready to be executed, remembering that the last test deletes the user that was inserted, so if you want to see the collection of tests in the database, delete the test that does the deletion "Delete Repositories." in the <a href="https://github.com/brainnco-exs/challenge-barretot/blob/master/__tests__/integration/user_repositories.test.js">tests file</a> 

Block of code that must be deleted in **`user_repositories.test.js`** <a href="https://github.com/brainnco-exs/challenge-barretot/blob/master/__tests__/integration/user_repositories.test.js">tests file</a> 
```
it('Delete Repositories.', async () => {
    const response = await request(app).delete('/api/users/repositories/:id');

    expect(response.status).toBe(200);
  });
```

#### Running tests

#### Yarn
```
$ yarn test
```

#### NPM

```
$ npm run test
```
The database will create a collection called "tests" to store the tests created.

If the tests were successful, the terminal should return the following information:
```
PASS  __tests__/integration/user_repositories.test.js (6.772 s)
 Insert a github user and their repositories with or without stars and filter by tags.
  ✓ Insert user and their repositories. (1337 ms)
  ✓ Get repositories by tags. (428 ms)
  ✓ Get user repositories. (409 ms)
  ✓ Get starred repositories. (318 ms)
  ✓ Get starred repositories by tags. (344 ms)
  ✓ Repositories of all users. (169 ms)
  ✓ Delete Repositories. (156 ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        6.864 s, estimated 7 s
Ran all test suites.
```


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
* <a href="https://www.npmjs.com/package/jest">Jest</a>
* <a href=https://www.npmjs.com/package/@shelf/jest-mongodb>@shelf/jest-mongodb</a>
* <a href="https://www.npmjs.com/package/supertest">Supertest</a>




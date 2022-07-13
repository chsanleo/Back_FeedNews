# Back_FeedNews

![badge](https://img.shields.io/badge/working-active-brig)

Backend develop to test the knowledge with express, nodejs. Is propose a solution for a scrapping tool using cheerio and axios.
For the database is used MongoDB as a requirement.

We wanted to go further and we installed different libraries, adding some extra features to the applications like the creation of logs or the possibility to test directly from the web with Swagger UI. 


## How to Start 🚀

+ If you only want to use our Api/Backend, just clone this repository 
```
 git clone https://github.com/chsanleo/Back_FeedNews
```

+ and install the packages,

```
$ npm install
```
+ create the .env file following the example in the code. 

+ and... try it!.
 
## Project status

> It is not finished. This development is a test and I want to show the management and use of different tools and features, as a first approximation to it. In the future, this development will be improved and complete the different features, add some more and fix some small details.  ;)

### Current Features 📄

+ MongoDB model.
+ Controller CRUD for the model.
+ Controller for healthcheck.
+ Scraping of some newspapers.
+ Controller to return all the feed of today.
+ Swagger UI. 


### Roadmap 📋

**About the back**
+ Add swagger to all methods.
+ Add testing to all methods.
+ Add more pages to scraping.
+ Add docker.

**About the documentation**
+ Is supported in part by the swagger UI.

**About features**
+ Add topic to the model and return by it.


## Test the application ⚙️

Turn on the server.
```
$ npm start
```

You can use the swagger API to test each back feature.
```
localhost:[PORT]/api-docs
```

Or you can use Postman instead.


Use the browser of your choice and with the developer tools test. 


![devtools](https://www.formacionprofesional.info/wp-content/uploads/2015/09/herramientas_desarrollo_iexplorer11.png)


## Used Libraries 🛠️

* [axios](https://www.npmjs.com/package/axios) - HTTP client
* [cheerio](https://www.npmjs.com/package/cheerio) - Parse markup tool
* [cors](https://www.npmjs.com/package/cors) - CORS
* [dotenv](https://www.npmjs.com/package/dotenv) - Loads .env files
* [express](https://www.npmjs.com/package/express) - Web framework for node
* [log4js](https://www.npmjs.com/package/log4js) - Logs
* [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB ORM
* [nodemon](https://www.npmjs.com/package/nodemon) - Auto Restart
* [Swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) - API docs
* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - API docs


## Contributors ✒️

* **Christian Sanchez Leon** - [chsanleo](https://github.com/chsanleo)


## License 📄
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

Ask us before use and ask us for another features or documentation we didn't include.


## How to say 'thanks' to us  🎁

* Tell others about this project 📢
* Pay a beer 🍺 or coffee ☕ to us (or two, or... some ;) ). 
* Comments about always welcome!.
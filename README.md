#ExpressJs Server Boilerplate
 **[express docs](https://expressjs.com/)**

This is a simple express setup to be used when building a multi-page, server side render website.
Its setup with:
- webpack (write your code in the node environment and modularize your code) **[webpack docs](https://webpack.js.org/)**
- babel (write the latest javascript possible) **[babel docs](https://babeljs.io/)**
- eslint (ensure code quality and convection) **[eslint docs](https://eslint.org/)**
- sass (css does not have to be so complicated) **[sass docs](https://sass-lang.com/)**
- jade (build you html site in pieces) **[jade docs](http://jade-lang.com/)**
- api setup (a basic api setup to allow for a easy api construction)

## To start run:

``
npm install
``
: to install all the packages


## For Local development run:

``
npm run compile
``
: to compile all javascript to be used in the browser using webpack and babel in **WATCH** mode

``
npm run local
``
: to serve the site in your browser


## For Production run:

``
npm run build
``
: to build all javascript ready for production (Will remove console-logs, minify and split your code per page)

``
npm run start
``
: to run your server (Will minify stylesheets)

.


#### To create a page

1. Add your .sass style to ./sass folder
2. Add your .js script file to ./src folder
3. Add a new **entry** point in ./webpack.config.js
4. Add a new .jade view file to ./server/views
5. Add a new ***route*** to ./server/routes/main-site.js (Set title and pass the name of you *.jade view file)

#### To create a new api endpoint set

1. Add a new .js file to ./server/routes/api-endpoints (export a function that receives a router)
2. Import in in ./server/routes/api.js and call it before export passing it the **"router"**

.

## Important to know

* This setup will automatically handle 404 and other site errors;
* You don't have to touch Public folder unless to put public files in the assets folder
* Stylesheets will be automatically added to the **stylesheets** folder as you visit pages
* Webpack will compile and add your javascript file from ./src to ./public/javascript
* **DONT want to use SASS?** Put your .css files inside ./public/stylesheets




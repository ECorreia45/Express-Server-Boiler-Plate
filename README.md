#ExpressJs Server Boilerplate

This is a simple express setup to be used when building a multi-page, server side render website.
It setup with:
- webpack (write your code in the node environment and modularize your code)
- babel (write the latest javascript possible)
- eslint (ensure code quality and convection)
- sass (css does not have to be so complicated)
- jade (build you html site in pieces)
- api setup (a basic api setup to allow for a easy api construction)

##To start run:
```
npm install
```
to install all the packages
```
npm run compile
```
to compile all javascript to be used in the browser using webpack and babel
```
npm run compile:prod
```
to compile ou javascript for production (will minify)
```
npm run serve
```
to serve your site in the browser


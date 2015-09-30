#Adding "start" Task to `package.json` File

* Open your newly created `package.json` file.
* under the "scripts" key word add:
```
"start": "browser-sync start --server --directory --files='index.html'"
```
* in your terminal type `npm start'
* profit

Ex. How your `package.json` file might look after:
```
{
  "name": "tiy-github",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha --bail",
    "start": "browser-sync start --server --directory --files='index.html'",
    "sass": "node-sass --output-style expanded --output src/css/ src/scss/main.scss"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ericksonk/TIY-GitHub.git"
  },
  "author": "Kristine Erickson",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ericksonk/TIY-GitHub/issues"
  },
  "homepage": "https://github.com/ericksonk/TIY-GitHub#readme",
  "devDependencies": {
    "browser-sync": "^2.9.6",
    "chai": "^3.3.0",
    "mocha": "^2.3.3",
    "node-sass": "^3.3.3"
  }
}
```

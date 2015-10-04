# Adding "start" Task to `package.json` File
You can set up command line shortcuts for various dependencies. In this particular tutorial, I will be explaining how to set up a shortcut for `browser-sync`.

### Step 1: Open your newly created `package.json` file in Atom.
  * In the command line, `cd` to the correct directory.
  * Create a `package.json` (use `npm init` and follow the instructions)
  * When completed, open your new `package.json` file in Atom.

### Step 2: Under the "scripts" key word add:
```
"start": "browser-sync start --server --directory --files='FILENAME'"
```
  * After `--files='` type to name of the file you want `browser-sync` to open everytime you run the task.
  * Example: `index.html` will open each time I run this task.
```
"start": "browser-sync start --server --directory --files='index.html'"
```

### Step 3: In your terminal type `npm start'
  * Type `npm start` on the command line and press 'enter'
  * Your file will open up in your browser via `browser-sync`

### Step 4: See the browser update automatically as you save changes to your files.

Ex. How your `package.json` file might look when complete (note the "scripts" section):
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

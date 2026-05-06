/**
 * npm install -g typescript
 * -g global- no need to install per project
 * -D dev
 * tsc - type script compiler
 * tsc --init - to create tsconfig.json file
 * tsc -w - to watch the changes in ts file and compile it in js file
 * npm install -g ts-node - to run ts file without compiling it in js file
 * npm install -g nodemon - to watch the changes in ts file and run it without compiling it 
 * in js file
 */

import chalk = require("chalk");
console.log("Hello World");
console.log(chalk.blue("Hello World"));
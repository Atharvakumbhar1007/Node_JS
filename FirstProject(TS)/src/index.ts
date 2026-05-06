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
 * npm root -g - to check the global node modules path
 * npm install -g chalk - to install chalk module globally
 * npm install chalk - to install chalk module locally
 * npm list -g --depth=0 - to check the global node modules
 * npm list --depth=0 - to check the local node modules
 * npm uninstall -g chalk - to uninstall chalk module globally
 * npm uninstall chalk - to uninstall chalk module locally
 * npm init -y - to create package.json file with default values    
 * npm outdated - to check the outdated packages
 * npm update - to update the outdated packages
 * npm update --dry run - to check the packages that will be updated without actually 
 * updating them
 * npm audit - to check the vulnerabilities in the packages
 * npm audit fix - to fix the vulnerabilities in the packages
 */

import chalk = require("chalk");
console.log("Hello World");
console.log(chalk.blue("Hello World"));
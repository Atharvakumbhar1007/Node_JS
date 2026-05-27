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
 * 
 * "nodemon":"^3.1.14",
 * Here 3 is major version:
 * 1 is minor 
 * 14 is patch version
 * 
 * 14 -> 15: you fixed an error in the  app w/o chamges the functionlities
 * 1->2 new feasture added in the app w/o breaking the existing functionalities
 * 3->4 you have made some changes in the app that may break the existing functionalities
 * 
 * "nodemon":"3.1.14" - this app only works with this exact version (it won't work with other versions(3.1.15)) *
 * "nodemon":~"3.1.14" - this app works with this version and all the patch versions (3.1.15, 3.1.16) 
 * this app only work in the range 3.1.0 to 3.1.xx
 * "nodemon":"^3.1.14" - (minor level flexibility) this app works with this version and all the minor and patch versions (3.2.0, 3.3.0, 3.1.15, 3.1.16)
 * this app only work in the range 3.0.0 to 3.x.x
 * "nodemon":"*" - this app works with all the versions of nodemon
 * 
 * npm update, nom audit fix - obey these rules
 * 
 * to force an update -> npm audit fix --force
 * 
 */

const chalk = require("chalk");
console.log("Hello World");
console.log(chalk.blue("Hello World"));
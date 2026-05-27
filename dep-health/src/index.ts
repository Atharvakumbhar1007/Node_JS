import _ from 'lodash';
import dayjs from 'dayjs';
import chalk from 'chalk';
import axios from 'axios';
import lodashPkg from 'lodash/package.json' with { type: 'json' };
console.log('lodash:', lodashPkg.version);

console.log('dayjs current time:', dayjs().format());

console.log(chalk.blue('Hello from Chalk'));

console.log('axios type:', typeof axios);

console.log(_.capitalize('hello world'));
#!/usr/bin/env node

import program from 'commander';
import { version } from '../../package.json';
import calculate from '..';

program
  .version(version)
  .arguments('<expression>')
  .description('calculate math expression.')
  .action((expression) => (
    console.log(calculate(expression))
  ))
  .parse(process.argv);

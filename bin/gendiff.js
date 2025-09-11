#!/usr/bin/env node
import { Command } from 'commander';
import { parseFile } from '../src/parser.js';
import { genDiff } from '../src/gendiff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'display help for command')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    try {
      const data1 = parseFile(filepath1);
      const data2 = parseFile(filepath2);
      const diff = genDiff(data1, data2);
      console.log(diff);
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);

#!/usr/bin/env node

const { Command } = require('commander');

const program = new Command();

program
  .version('1.0.0')
  .description('A CLI for various operations')

program
  .command('create')
  .description('Create something new')
  .action(() => {
    console.log('Create command executed');
  });

program
  .command('ai')
  .description('Run AI operations')
  .action(() => {
    console.log('AI command executed');
  });

program
  .command('deploy')
  .description('Deploy the application')
  .action(() => {
    console.log('Deploy command executed');
  });

program.parse(process.argv);
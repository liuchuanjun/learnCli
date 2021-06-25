#!/usr/bin/env node

const program = require('commander')

const helpOptions = require('./lib/core/help')
const creatCommands = require('./lib/core/create')

program.version(require('./package.json').version)

// 帮助文档
helpOptions()

// 执行指令
creatCommands()

program.parse(process.argv)

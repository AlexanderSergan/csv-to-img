#!/usr/bin/env node

const csvToImg = require('./csvToImg')
const config = require('./config.json')
const commander = require('commander')
const fs = require('fs')

commander
.option('-i, --input [input]', 'Input *.csv file')
.option('-o, --out [out]', 'Output folder')
.option('-d, --debug', 'output extra debugging')
.parse(process.argv)

if (commander.debug) console.log(commander.opts());
const { input, out = 'out' } = commander

const path = `${input}`

if (!fs.existsSync(out)) {
	fs.mkdirSync(out);
}



csvToImg(path, out)
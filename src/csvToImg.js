const cliProgress = require('cli-progress');
const chef = require('cyberchef')
const csv = require('csvtojson')
const fs = require('fs')

const main = async (path, outputPath )=> {

	console.log(`Processing ${path}:`)
	let out = []
	try {
		out = await csv().fromFile(path)
	} catch (error) { console.error(error)}


	const count = out.length
	console.log(`${count} entries found.`)

	const bar1 = new cliProgress.SingleBar({stopOnComplete: true}, cliProgress.Presets.shades_classic);
	bar1.start(count, 0)
	
	try {
		out.map( 
			({Content, ResourceBodyID}) => save( ResourceBodyID, 
				convert( Content), outputPath, bar1 )
		)
	} catch (error) { console.error(error)	}
	
}

const save = (name, data, out, progressBar) => 
	fs.writeFile(`./${out}/${name}.jpeg`, data, {encoding: 'base64'}, cb => {
		if (cb) {
			console.error(cb)
			progressBar.stop()
		}
		progressBar.increment()
	})

const convert = input => {
	const t1 = chef.fromHex(input, { delimiter: '0x' })
	const t2 = chef.toBase64(t1, { alphabet: 'A-Za-z0-9+/='})	
	return t2.toString()
}

module.exports = main
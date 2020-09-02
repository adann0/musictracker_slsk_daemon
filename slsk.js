#!/usr/bin/env node

const slsk = require('slsk-client')

function search(id, password, request) {
	slsk.connect({
		user: id,
		pass: password,
		host: 'server.slsknet.org',
		port: 2242,
		incomingPort: 2234
	}, (err, client) => { 
		client.search({
			req: request,
			timeout: 10000 // 10 secondes timeout
		}, (err, res) => {
			// Keep only free slots
			res = res.filter(r => r.slots === true && r.speed > 0);
			// Sort by speed
			res.sort((a, b) => b.speed - a.speed);
			console.log(JSON.stringify(res));
			process.exit()
		})
	})
};


function download(id, password, request, file, user, size, outpath) {

	slsk.connect({
		user: id,
		pass: password,
		host: 'server.slsknet.org',
		port: 2242,
		incomingPort: 2234
	}, (err, client) => {
		client.search({
				req: request,
				timeout: 10000
			}, (err, res) => {
				dico = [{
					user: user,
					file: file,
					size: size,
				}]
				client.download({
					file: dico[0],
					path: outpath
			    }, (err, down) => {
					console.log(outpath)
					process.exit()
				}
			)
		}
)})};

if (process.argv[2] == "search") search(process.argv[3], process.argv[4], process.argv[5])
if (process.argv[2] == "download") download(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9]) 

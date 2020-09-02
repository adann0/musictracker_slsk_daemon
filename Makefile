all:
	pkg slsk.js --targets macos

dep:
	npm i slsk-client

clean:
	rm -rf package-lock.json slsk node_modules

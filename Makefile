install:
	npm install

start:
	npm start

test:
	CI=true npm test

ship_it:
	./scripts/ship-it.sh
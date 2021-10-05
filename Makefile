install:
	yarn install

start:
	yarn start

build:
	yarn build --if-present

test:
	CI=true yarn test

ship_it:
	./scripts/ship-it.sh

deploy: install test build

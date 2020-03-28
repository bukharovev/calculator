install:
		npm install
start:
		npx babel-node  -- src/bin/calculator.js
publish:
		npm publish
lint:
		npx eslint .
test: 
		npx jest
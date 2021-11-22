setup-dev:
	@echo "==> Installing dependencies..."
	npm i
	npx ts-node src/index.ts
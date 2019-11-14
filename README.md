# CITiplate Node
CITi's Node.js projects boilerplate.

# Development Environment
This project uses [Docker-compose pattern](https://hackernoon.com/a-better-way-to-develop-node-js-with-docker-cd29d3a0093). You only need to run the scripts on `Makefile`:

1 - Create the `node_modules` volume
```sh
make setup
```

2 - Install application dependencies
```sh
make install
```

3 - Create the database instance
```sh
make create_db
```

4 - Apply the migrations
```sh
make migrate_db 
```

# Testing
Write tests using `jest` on folders with the name `__test__`. You can run the tests using the `test` script:
```sh
make test
```

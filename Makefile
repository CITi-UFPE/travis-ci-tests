install:
	docker-compose -f docker-compose.builder.yml run --rm install

setup:
	docker volume create nodemodules

dev:
	docker-compose up

pretest:
	make create_test_db && make migrate_test_db

posttest:
	make drop_test_db

test:
	make pretest ; docker-compose run --rm dev bash -c "NODE_ENV=test yarn jest" ; make posttest

# Test database
create_test_db:
	docker-compose run --rm dev bash -c "NODE_ENV=test yarn sequelize db:create"

migrate_test_db:
	docker-compose run --rm dev bash -c "NODE_ENV=test yarn sequelize db:migrate"

drop_test_db:
	docker-compose run --rm dev bash -c "NODE_ENV=test yarn sequelize db:drop"

# Database
migrate_db:
	docker-compose run --rm dev bash -c "yarn sequelize db:migrate"

create_db:
	docker-compose run --rm dev bash -c "yarn sequelize db:create"

drop_db:
	docker-compose run --rm dev bash -c "yarn sequelize db:drop"

PIP=`. venv/bin/activate; which pip`
PYTHON=`. venv/bin/activate; which python`
NPM=`which npm`
N=`which n`

frontend_deps:
	$(NPM) cache clean -f
	$(NPM) install -g npm
	$(NPM) install -g n
	$(N) stable

.ONESHELL:
frontend:
	cd site
	$(NPM) install
	$(NPM) install bower
	$(NPM) install gulp
	./node_modules/bower/bin/bower install --allow-root

frontend_build:
	cd site && rm -rf dist && ./node_modules/gulp/bin/gulp.js build:prod

frontend_build_test:
	cd site && rm -rf dist && ./node_modules/gulp/bin/gulp.js build:test

deploy_test: frontend_build_test
	cd site && cp -R dist/* /var/www/test.universaljudgment.com && cp src/googleef800ef69f9e4bef.html src/robots.txt /var/www/test.universaljudgment.com

deploy: frontend_build
	cd site && cp -R dist/* /var/www/universaljudgment.com && cp src/googleef800ef69f9e4bef.html src/robots.txt /var/www/universaljudgment.com

frontend_clean:
	rm -rf site/node_modules
	rm -rf site/bower_components

virtualenv:
	test -d venv || pyvenv venv
	$(PIP) install -U pip 
	$(PIP) install -r etc/freeze.txt

restoredb:
	mkdir -p src/db
	$(PYTHON) src/manage.py loaddata `ls -t src/db/db.backup-* | head -1`
	$(PYTHON) src/manage.py loaddata `ls -t src/db/auth-db.backup-* | head -1`

backupdb:
	mkdir -p src/db
	$(PYTHON) src/manage.py dumpdata api > src/db/db.backup-`date +%s`.json
	$(PYTHON) src/manage.py dumpdata auth > src/db/auth-db.backup-`date +%s`.json

resetdb: backupdb
	rm -f src/api/migrations/0001_initial.py
	$(PYTHON) src/manage.py makemigrations
	./src/bin/clean_db
	$(PYTHON) src/manage.py migrate
	make restoredb

initialdb: backupdb
	$(PYTHON) src/manage.py loaddata src/api/fixtures/initial_data.json
	$(PYTHON) src/manage.py createsuperuser

clean:
	find src -name *.pyc -delete
	find src -name __pycache__ -delete
	find src -name .*.swp -delete

test: clean
	$(PYTHON) src/manage.py test api

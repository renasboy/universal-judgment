PIP=`. venv/bin/activate; which pip`
PYTHON=`. venv/bin/activate; which python`
NPM=`which npm`
N=`which n`

deps:
	$(NPM) cache clean -f
	$(NPM) install -g npm
	$(NPM) install -g n
	$(N) stable

.ONESHELL:
frontend:
	cd angular
	$(NPM) install
	$(NPM) install bower
	$(NPM) install gulp
	./node_modules/bower/bin/bower install --allow-root
	./node_modules/gulp/bin/gulp.js build

virtualenv:
	test -d venv || pyvenv venv
	$(PIP) install -U pip 
	$(PIP) install -r etc/freeze.txt

resetdb:
	@rm -f src/api/migrations/0001_initial.py src/db/db.sqlite3
	$(PYTHON) src/manage.py makemigrations
	$(PYTHON) src/manage.py migrate
	@chmod 666 src/db/db.sqlite3

clean:
	@find src -name *.pyc -delete
	@find src -name __pycache__ -delete

test: clean
	$(PYTHON) src/manage.py test api

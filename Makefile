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
	cd angular2
	$(NPM) install
	$(NPM) install bower
	$(NPM) install gulp
	./node_modules/bower/bin/bower install --allow-root

frontend_build:
	cd angular2
	./node_modules/gulp/bin/gulp.js build

frontend_clean:
	@rm -rf angular2/node_modules
	@rm -rf angular2/bower_components

virtualenv:
	test -d venv || pyvenv venv
	$(PIP) install -U pip 
	$(PIP) install -r etc/freeze.txt

resetdb:
	@mkdir -p src/db
	@rm -f src/api/migrations/0001_initial.py src/db/db.sqlite3
	$(PYTHON) src/manage.py makemigrations
	$(PYTHON) src/manage.py migrate
	$(PYTHON) src/manage.py loaddata src/api/fixtures/initial_data.json
	$(PYTHON) src/manage.py createsuperuser
	@chown -R www-data src/db

clean:
	@find src -name *.pyc -delete
	@find src -name __pycache__ -delete
	@find src -name .*.swp -delete

test: clean
	$(PYTHON) src/manage.py test api

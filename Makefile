PIP=`. venv/bin/activate; which pip`

virtualenv:
	test -d venv || pyvenv venv
	$(PIP) install -U pip 
	$(PIP) install -r etc/freeze.txt

clean:
	@find src -name *.pyc -delete
	@find src -name __pycache__ -delete

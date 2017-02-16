import os
import logging, sys
logging.basicConfig(stream=sys.stderr)

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "universaljudgement.settings")

def application(env, start):
    os.environ['SECRET_KEY'] = env['SECRET_KEY']
    os.environ['DB_HOST'] = env['DB_HOST']
    os.environ['DB_PORT'] = env['DB_PORT']
    os.environ['DB_NAME'] = env['DB_NAME']
    os.environ['DB_USER'] = env['DB_USER']
    os.environ['DB_PASS'] = env['DB_PASS']
    
    app = get_wsgi_application()
    return app(env, start)

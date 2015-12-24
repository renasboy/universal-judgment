import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "universaljudgement.settings")

def application(env, start):
    os.environ['SECRET_KEY'] = env['SECRET_KEY']
    app = get_wsgi_application()
    return app(env, start)

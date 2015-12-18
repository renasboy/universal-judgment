from api import models

class Quality():

    input = None

    def __init__(self):
        qualities = models.Quality.objects.all()

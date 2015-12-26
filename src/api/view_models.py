from api import models

class Quality(object):

    def __init__(self, input=None, many=False):
        if many:
            self.data = models.Quality.objects.all()

    def get_data(self):
        return self.data


class Person(object):

    def __init__(self, input=None, many=False):
        if many:
            if input.get('search'):
                self.data = models.Person.filter(name__icontains=input.get('search'))
            else:
                self.data = models.Person.objects.all()

    def get_data(self):
        return self.data


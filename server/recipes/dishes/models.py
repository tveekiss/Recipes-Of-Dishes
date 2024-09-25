from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='Images/', default='Images/none.jpg')

    def __str__(self):
        return self.name


class Dishes(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    ingredients = models.TextField(null=True)
    recipe = models.TextField()
    image = models.ImageField(upload_to='Images/', default='Images/none.jpg')
    category = models.ForeignKey('Category', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name

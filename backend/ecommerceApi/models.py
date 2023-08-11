from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    ammount = models.IntegerField()
    price = models.FloatField()

    def __str__(self):
        return self.name


class User(models.Model):
    email = models.EmailField()
    cellphone = models.CharField(max_length=10)
    name = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    address = models.TextField(default="Some direction")

    def __str__(self) -> str:
        return self.name

from django.db import models
from django import forms

# Create your models here.


def upload_to(instance, filename):
    return f'images/{filename}'


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    ammount = models.IntegerField()
    price = models.FloatField()
    applyVariants = models.BooleanField(blank=True, null=True)
    variants = models.CharField(max_length=200, blank=True, null=True)
    img = models.ImageField(upload_to=upload_to, blank=True, null=True)

    def __str__(self):
        return self.name


class User(models.Model):
    id = models.CharField(max_length=12, primary_key=True)
    email = models.EmailField()
    phone = models.CharField(max_length=10, default="Some phone")
    name = models.CharField(max_length=200, default="Some name")
    gender = models.CharField(max_length=10, default="Dome")
    department = models.CharField(max_length=200, default="Some department")
    city = models.CharField(max_length=200, default="Some city")
    address = models.TextField(default="Some direction")
    username = models.CharField(max_length=200, default="Some username")
    password = models.CharField(max_length=200, default='passwordDefault')

    def __str__(self) -> str:
        return self.name

    def getPassword(self):
        return {"password": self.password}

    def getData(self):
        return {"username": self.username, "email": self.email, "phone": self.phone, "name": self.name, "gender": self.gender, "department": self.department, "city": self.city, "address": self.address, "username": self.username, "password": self.password}


class User_forms(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'
        widgets = {'password': forms.PasswordInput}

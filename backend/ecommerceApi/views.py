from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Product, User
from .serializer import ProductSerializer, UserSerializer
import json


# Create your views here.

class Test(APIView):
    def get(self, request):
        data = "recibido"
        return Response(data)


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class PasswordByUsernameView(APIView):

    def get(self, request, username):
        user = User.objects.filter(username=username).first()
        if user:
            return Response(user.getPassword())
        return Response("username not found")

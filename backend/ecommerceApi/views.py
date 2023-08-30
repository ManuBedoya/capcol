from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Product, User
from .serializer import ProductSerializer, UserSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from ecommerceApi import methods
import json


# Create your views here.

class Test(APIView):
    def get(self, request):
        data = "recibido"
        return Response(data)


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    parser_classes = (MultiPartParser, FormParser)


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class PasswordByUsernameView(APIView):

    def get(self, request, username):
        user = User.objects.filter(username=username).first()
        if user:
            return Response(user.getPassword())
        return Response("username not found")


class BuyWithOutLoginView(APIView):

    def get(self, request):
        return Response("im get method")

    def post(self, request):
        if request.method == 'POST':
            body = request.body
            body_str = body.decode('utf-8')
            body_json = json.loads(body_str)
            methods.sendEmailBuy(body_json)
            return Response(body_json)

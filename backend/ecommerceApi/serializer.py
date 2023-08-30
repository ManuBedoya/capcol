from rest_framework import serializers
from .models import User, Product


class ProductSerializer(serializers.ModelSerializer):

    img = serializers.ImageField(required=False)

    class Meta:
        model = Product
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

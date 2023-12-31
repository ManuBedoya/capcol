from django.urls import path, include
from .views import Test
from rest_framework import routers
from ecommerceApi import views

router = routers.DefaultRouter()
router.register(r'products', views.ProductView, "products")
router.register(r'users', views.UserView, "users")

urlpatterns = [
    path("test/", Test.as_view(), name="test"),
    path("v1/getUser/<str:username>",
         views.PasswordByUsernameView.as_view(), name="getUserByUsername"),
    path("v1/buyWithOutLogin/", views.BuyWithOutLoginView.as_view(),
         name="buyWithOutLogin"),
    path("v1/", include(router.urls))
]

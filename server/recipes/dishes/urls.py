from django.urls import path

from .views import DishAPIView, CategoriesAPIView, DishesByCategoryView


urlpatterns = [
    path('api/v1/dishes/<int:pk>', DishAPIView.as_view()),
    path('api/v1/category', CategoriesAPIView.as_view()),
    path('api/v1/category/<int:pk>', DishesByCategoryView.as_view()),
]

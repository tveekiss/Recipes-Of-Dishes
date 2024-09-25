from rest_framework import generics, mixins
from django.shortcuts import render

from .models import Dishes, Category
from .serializers import DishSerializer, CategoriesSerializer, DishesByCategorySerializer


class DishAPIView(generics.RetrieveAPIView):
    queryset = Dishes.objects.all()
    serializer_class = DishSerializer


class CategoriesAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer


class DishesByCategoryView(generics.ListAPIView):
    serializer_class = DishesByCategorySerializer

    def get_queryset(self):
            category_id = self.kwargs['pk']
            return Dishes.objects.filter(category_id=category_id)

from rest_framework import serializers

from .models import Dishes, Category


class CategoriesSerializer(serializers.ModelSerializer):
    
    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = Category
        fields = ('name', 'image', 'id')


class DishSerializer(serializers.ModelSerializer):

    image = serializers.ImageField(max_length=None, use_url=True)
    category = CategoriesSerializer(read_only=True)

    class Meta:
        model = Dishes
        fields = ('name', 'description', 'ingredients', 'recipe', 'category', 'image')


class DishesByCategorySerializer(serializers.ModelSerializer):

    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = Dishes
        fields = ('name', 'description', 'image', 'id')

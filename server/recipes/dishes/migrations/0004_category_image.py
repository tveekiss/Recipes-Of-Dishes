# Generated by Django 5.1.1 on 2024-09-24 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dishes', '0003_dishes_ingredients'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.ImageField(default='Images/none.jpg', upload_to='Images/'),
        ),
    ]

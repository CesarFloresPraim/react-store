# Generated by Django 3.2.13 on 2022-05-09 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inpackApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sale',
            name='cart',
            field=models.TextField(blank=True, null=True),
        ),
    ]

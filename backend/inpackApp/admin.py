from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Sale)

User._meta.get_field('email')._unique = True
User._meta.get_field('email').blank = False
User._meta.get_field('email').null = False
User._meta.get_field('username')._unique = False
User._meta.get_field('username').validators = []
User.REQUIRED_FIELDS.append("username")
User.REQUIRED_FIELDS.remove("email")
User.USERNAME_FIELD = "email"
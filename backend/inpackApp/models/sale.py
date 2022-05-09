from django.db import models
from django.contrib.auth.models import User


class Sale(models.Model):
    #customer = models.ForeignKey(User, on_delete=models.RESTRICT)
    cart = models.TextField(blank=True, null=True)
    total = models.FloatField(blank=True, null=True, default=0)
    purchase_date = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=20, blank=True, null=True)
    state = models.CharField(max_length=20, blank=True, null=True)
    zip_code = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return f"<{self.id}> <Customer:{self.email}>"

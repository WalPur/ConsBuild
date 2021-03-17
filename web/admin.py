from django.contrib import admin

from .models import Category, Exporter, Lot, Profile

# Register your models here.
admin.site.register(Category)
admin.site.register(Exporter)
admin.site.register(Lot)
admin.site.register(Profile)
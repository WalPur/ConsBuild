from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name="Категория товаров")

    def __str__(self):
        return "Категория " + self.name
    

class Exporter(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название продавца")
    address = models.CharField(max_length=255, verbose_name="Адрес продавца")
    tel = models.CharField(max_length=255, verbose_name="Телефон продавца")

    def __str__(self):
        return "Продавец" + self.name

class Lot(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название товара")
    material = models.CharField(max_length=255, verbose_name="Материал товара")
    purpose = models.CharField(max_length=255, verbose_name="Назначение товара")
    shop = models.ForeignKey("Exporter", verbose_name="Поставщик товара", on_delete=models.CASCADE)
    category = models.ForeignKey("Category", verbose_name="Категория товара", on_delete=models.CASCADE)

    def __str__(self):
        return "Товар " + self.name

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)

    surname = models.CharField(max_length=500, verbose_name="Фамилия")
    name = models.CharField(max_length=500, verbose_name="Имя")
    patronymic = models.CharField(max_length=500, verbose_name="Отчество")

    person_type = models.CharField(max_length=255, verbose_name="Лицо")

    cart = models.ManyToManyField("Lot", verbose_name="Корзина", related_name="cart")
    favorite = models.ManyToManyField("Lot", verbose_name="Избранное", related_name="favorite")

    def __str__(self):
        return "Пользователь" + self.name
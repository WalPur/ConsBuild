# Generated by Django 3.1.1 on 2021-03-17 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='cart',
            field=models.ManyToManyField(related_name='cart', to='web.Lot', verbose_name='Корзина'),
        ),
        migrations.AddField(
            model_name='profile',
            name='favorite',
            field=models.ManyToManyField(related_name='favorite', to='web.Lot', verbose_name='Избранное'),
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.TextField(max_length=255, verbose_name='Категория товаров'),
        ),
        migrations.AlterField(
            model_name='exporter',
            name='address',
            field=models.TextField(max_length=255, verbose_name='Адрес продавца'),
        ),
        migrations.AlterField(
            model_name='exporter',
            name='name',
            field=models.TextField(max_length=255, verbose_name='Название продавца'),
        ),
        migrations.AlterField(
            model_name='exporter',
            name='tel',
            field=models.TextField(max_length=255, verbose_name='Телефон продавца'),
        ),
        migrations.AlterField(
            model_name='lot',
            name='material',
            field=models.TextField(max_length=255, verbose_name='Материал товара'),
        ),
        migrations.AlterField(
            model_name='lot',
            name='name',
            field=models.TextField(max_length=255, verbose_name='Название товара'),
        ),
        migrations.AlterField(
            model_name='lot',
            name='purpose',
            field=models.TextField(max_length=255, verbose_name='Назначение товара'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='name',
            field=models.CharField(max_length=500, verbose_name='Имя'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='patronymic',
            field=models.CharField(max_length=500, verbose_name='Отчество'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='person_type',
            field=models.TextField(max_length=255, verbose_name='Лицо'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='surname',
            field=models.CharField(max_length=500, verbose_name='Фамилия'),
        ),
    ]
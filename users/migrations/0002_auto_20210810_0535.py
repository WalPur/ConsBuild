# Generated by Django 3.2.5 on 2021-08-09 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=500, verbose_name='Имя'),
        ),
        migrations.AlterField(
            model_name='user',
            name='patronymic',
            field=models.CharField(max_length=500, verbose_name='Отчество'),
        ),
        migrations.AlterField(
            model_name='user',
            name='surname',
            field=models.CharField(max_length=500, verbose_name='Фамилия'),
        ),
    ]

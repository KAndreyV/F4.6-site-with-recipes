# Generated by Django 3.2.18 on 2023-03-13 16:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dish',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('photo', models.ImageField(default=None, upload_to='images/')),
                ('category', models.CharField(choices=[('SO', 'Супы'), ('SD', 'Гарниры'), ('MC', 'Главное блюдо'), ('DR', 'Напитки'), ('SN', 'Закуски')], default='SO', max_length=2)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Step',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('photo', models.ImageField(default=None, upload_to='images/')),
                ('dish', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='recipes_app.dish')),
            ],
        ),
    ]

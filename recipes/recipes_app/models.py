from django.db import models
from django.urls import reverse


soups = "Супы"
side_dishes = "Гарниры"
main_course = "Главное блюдо"
drinks = "Напитки"
snacks = "Закуски"
salads = "Салаты"

CATEGORIES = (
        (soups, "Супы"),
        (side_dishes, "Гарниры"),
        (main_course, "Главное блюдо"),
        (drinks, "Напитки"),
        (snacks, "Закуски"),
        (salads, "Салаты")
)


class Dish(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='images/', default=None)
    category = models.CharField(max_length=14, choices=CATEGORIES, default=soups)
    description = models.TextField()

    def __str__(self):
        return f'{self.name}'

    #def get_absolute_url(self):
    #return reverse('user_detail', args=[str(self.id)])


class Step(models.Model):
    description = models.TextField()
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='images/', default=None)
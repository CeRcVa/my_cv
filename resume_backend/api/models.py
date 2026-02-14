from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=100)
    profession = models.CharField(max_length=100)
    about = models.TextField(blank=True)
    photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)

    def __str__(self):
        return self.name


class Certificate(models.Model):
    title = models.CharField(max_length=100)
    issued_by = models.CharField(max_length=100)
    year = models.CharField(max_length=10)
    image = models.ImageField(upload_to='certificates/', blank=True, null=True)

    def __str__(self):
        return self.title


class Course(models.Model):
    name = models.CharField(max_length=100)
    platform = models.CharField(max_length=100)
    year = models.CharField(max_length=10)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class SkillCategory(models.Model):
    name = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.name


class Skill(models.Model):
    category = models.ForeignKey(
        SkillCategory,
        on_delete=models.CASCADE,
        related_name="skills"
    )
    name = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name


class Contact(models.Model):
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)

    def __str__(self):
        return self.email

from django.contrib import admin
from .models import Profile, Certificate, Course, Skill, Project, SkillCategory, Contact


class SkillInline(admin.TabularInline):
    model = Skill
    extra = 0
    fields = ("name", "order")
    ordering = ("order",)


@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "order")
    list_editable = ("order",)
    ordering = ("order",)
    inlines = [SkillInline]


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "order")
    list_filter = ("category",)
    list_editable = ("order",)
    ordering = ("category", "order")


admin.site.register(Profile)
admin.site.register(Certificate)
admin.site.register(Course)
admin.site.register(Project)
admin.site.register(Contact)

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, CertificateViewSet, CourseViewSet, SkillViewSet, ProjectViewSet, SkillCategoryViewSet, ContactViewSet

router = DefaultRouter()
router.register(r'profile', ProfileViewSet)
router.register(r'certificates', CertificateViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'skill-categories', SkillCategoryViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'contacts', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

import os
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

ADMIN_URL = os.getenv("ADMIN_URL", "admin/")

urlpatterns = [
    path("api/", include("api.urls")),
    path(ADMIN_URL, admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

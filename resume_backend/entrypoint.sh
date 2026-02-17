#!/bin/sh
set -e

# DB path (bind-mounted) - only if you still use sqlite locally/docker
# export SQLITE_PATH=/app/data/db.sqlite3

# Make sure folders exist
mkdir -p /app/data /app/media

# Migrate + collectstatic
python manage.py migrate --noinput
python manage.py collectstatic --noinput

# Create superuser if env vars are set and user doesn't exist
echo "Creating superuser if not exists..."
python manage.py shell <<'EOF'
from django.contrib.auth import get_user_model
import os

User = get_user_model()
username = os.getenv("DJANGO_SUPERUSER_USERNAME")
email = os.getenv("DJANGO_SUPERUSER_EMAIL", "") or ""
password = os.getenv("DJANGO_SUPERUSER_PASSWORD")

if username and password and not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username, email, password)
    print("Superuser created")
else:
    print("Superuser exists or env vars missing")
EOF

# Start gunicorn (LAST)
exec gunicorn resume_backend.wsgi:application \
  --bind 0.0.0.0:8000 \
  --workers 2 \
  --timeout 60

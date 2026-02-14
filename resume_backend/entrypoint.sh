#!/bin/sh
set -e

# DB path (bind-mounted)
export SQLITE_PATH=/app/data/db.sqlite3

# Make sure folders exist
mkdir -p /app/data /app/media

# Migrate + collectstatic
python manage.py migrate --noinput
python manage.py collectstatic --noinput

# Start gunicorn
gunicorn resume_backend.wsgi:application \
  --bind 0.0.0.0:8000 \
  --workers 2 \
  --timeout 60

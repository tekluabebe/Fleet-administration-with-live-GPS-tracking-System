# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'fleet',  # Your database name
        'USER': 'admin',  # Your database username
        'PASSWORD': 'admin123',  # Your database password
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

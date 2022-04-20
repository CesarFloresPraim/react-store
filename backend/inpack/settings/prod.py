from .base import *

#
# DEBUG FLAG
#
DEBUG = False

#
# ALLOWED HOSTS
#
ALLOWED_HOSTS = ['kawi-reciclados.com']

#
# DATABASES
#
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': config("DB_NAME"),
        'USER': config("DB_USERNAME"),
        'PASSWORD': config("DB_PASSWORD"),
    }
}

#
# STATIC FILES
#
import os

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
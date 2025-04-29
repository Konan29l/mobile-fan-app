#URLS DEL ADMINISTRADOR
from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('ingresar', views.registro_log, name='ingresar'),
    path('index', views.index, name='index'),
    path('adminis', views.adminis, name='adminis'),
    path('nosotros', views.acercade, name='nosotros'),
    path('contacto', views.contacto, name='contacto'),
]


from django.urls import path
from .views import ApiPersona

urlpatterns = [
    path('persona/', ApiPersona.as_view(), name='lista-personas'),
]


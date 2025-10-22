from django.shortcuts import render

# Create your views here.
import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class ApiPersona(APIView):

    def get(self, request, format=None):
        try:
            #guardamos la url de la api externa
            url = "https://randomuser.me/api/?results=10&inc=name,gender,location,email,dob,picture"
            response = requests.get(url)
            response.raise_for_status()

            #obtenemos la respuesta en formato json
            data = response.json()
            results = data.get("results", [])

            #formatear para devolver solo los campos en los formatos requeridos
            # logica propia
            personas = []
            for user in results:
                personas.append({
                    "Nombre": f"{user['name']['first']} {user['name']['last']}",
                    "Género": user['gender'],
                    "Ubicación": f"{user['location']['city']}, {user['location']['country']}",
                    "Correo electrónico": user['email'],
                    "Fecha de nacimiento": user['dob']['date'],
                    "Fotografía": user['picture']['large']
                })

            return Response(personas, status=status.HTTP_200_OK)
        
        #manejo de errores
        except requests.exceptions.RequestException as e:
            return Response(
                {"error": "Error al obtener los datos de la API externa."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )
# Reto Técnico Full-Stack (NTT DATA) Brayan Loayza Leiva

Este repositorio contiene la solución completa para el reto técnico, implementada con una arquitectura cliente-servidor. El proyecto consiste en un back-end (API RESTful) desarrollado con Django y un front-end (Single Page Application) desarrollado con Angular.

## 🚀 Arquitectura del Proyecto

* `/reto-tecnico-backend-django`: Contiene la API RESTful. Su función es actuar como un proxy, consumir la API externa de `randomuser.me` y servir los datos procesados al front-end.
* `/reto-tecnico-frontend-angular`: Contiene la aplicación de Angular. Consume la API del back-end y muestra la lista de 10 personas en una interfaz de usuario limpia.

---

## 🛠️ Tecnologías Utilizadas

| Área | Tecnología |
| :--- | :--- |
| **Back-End** | Python, Django, Django Rest Framework, Requests |
| **Front-End** | TypeScript, Angular 19 (Standalone), HTML5, CSS3 |


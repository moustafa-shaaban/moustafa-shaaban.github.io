# Django Portfolio
---------------

This section of the website contains my Django projects.

Currently it has some projects under the name of:

* [Advanced Django Blog](https://github.com/moustafa-shaaban/Advanced_Django_Blog)

* [Django Todo App with Authentication and Authorization with REST API](https://github.com/moustafa-shaaban/Django_Todo_App_with_Authentication_and_Authorization)

* [Django and folium](https://github.com/moustafa-shaaban/Django_and_Folium)


## Django Geoapp + Vue.js 3

### Project Goals

* Use Django admin site to import data from different sources (CSV, JSON, ...) into the database.

* Use the power of Folium to visualize data generated from Django Database on a Leaflet JS map.

* Visualize data using Folium's Simple Markers.

* Users can register for an account, login, and update their information (handled by Cookiecutter Django)

* Authenticated users can add, import, or export data using django forms.

* Use Vue.js 3 (using Vite ) and axios to fetch the data from the backend and display it in a Bootstrap Table.


### Project Files

* [Github](https://github.com/moustafa-shaaban/Django-Geoapp)

### Project Preview

* [Youtube](https://www.youtube.com/watch?v=dqDSYeppbGI)



### Libraries and Packages used

* [Django Web Framework](https://www.djangoproject.com/)

* [django-import-export](https://django-import-export.readthedocs.io/en/latest/) package

* [Folium](https://python-visualization.github.io/folium/)

* [Cookiecutter Django](https://cookiecutter-django.readthedocs.io/en/latest/index.html)

-------------------------------------

## Advanced Django Blog

A project built with Django web framework and Bootstrap.

###  Project Goals

* Authenticated users can:

  * Access a GraphQL endpoint and run several Quries and CRUD Mutations.

  * Access a Rest API endpoint and run CRUD operations.

  * Create, Read, Update and Delete (CRUD) blog posts on the website.

  * Add comments on blog posts, but the comments will not be visiable until the website admin approves it.

  * Like Blog posts and Add them to their favorite list (using HTMX).

  * Access their profile which lists all their blog posts and their favorite posts.


* All users can read or search for the posts on the blog.

* Users can access separate frontend project built using Vue.js 3, Tanstack-Vue-Query, Vue-Apollo and Quasar Framework which connects with django through Django Rest Framework using Session Authentication.

* The frontend vue.js app also allows users to perform CRUD operations through connecting to a REST API and a GraphQL endpoints.

Currently in Vue frontend users can:

* Register for an account and log in to their account (users will be authenticated using Django Rest Framework Session Authentication).

* Add tags to blog using a Rest API endpoint and GraphQL endpoint.

* Perform CRUD operations to blog posts using both REST API and GraphQL.

* Perform CRUD operations to add comments to blog posts using both REST API and GraphQL.

* Add and remove posts to and form their favorite posts list.

* Access pages that show their added blog posts and their favorite posts.

* Search for blog posts by title and limiting the results using both REST API and GraphQL

### Project preview

* [Youtube](https://www.youtube.com/watch?v=mxe6Ca5yLOo)

* [Article](https://moustafashaaban.github.io/project-reviews/django/Django-Blog/Django-Blog/)


###  Project Description:

This project is a Django project called `blog_backend` and it has four registered apps and one third-party app.

  * The `blog` app which contains an app-level templates and urls, used for most of the functionalities of our app, like, models, forms, views, urls, and custom template tags.

  * The `api` app which contains the Django Rest Framework integration used to build a REST API.

  * The `graphql_app` which contains the Graphene Django integration used to build a GraphQL endpoint.
    
  * The `users` app which uses `django.contrib.auth.urls` to allow users register and login to their accounts.

  * `crispy forms` third-party app which beautify django forms design.


### What could you learn from this project?

* Create Django models and define relationships between the database fields.

* Use both Django Class-based and Function-based views.

* Create custom Django template tags, (In this project I created a simple custom template tag that return the number of comments on each blog post).

* How to use page pagination on your website.

* How to associate each blog post to its author.

* How to protect your post so that only you who can modify or delete it.

* Throw a 403 forbidden page to any user who try to guess the URL to change something they are not authorized to change.

* Create a search form on your website.

* And many more.


### Libraries and Packages used:

* [Django Web Framework](https://www.djangoproject.com/)

* [Django REST Framework](https://www.django-rest-framework.org)

* [Graphene Django](https://docs.graphene-python.org/projects/django/en/latest/)

* [Cookiecutter Django](https://github.com/cookiecutter/cookiecutter-django)

* [django-crispy-forms](https://django-crispy-forms.readthedocs.io/en/latest/) package

* [HTMX](https://htmx.org/)

* [Vue.js 3](https://vuejs.org/)

* [Quasar Framework](https://quasar.dev/)

* [Tanstack Vue Query](https://tanstack.com/query/latest/docs/vue/overview)

* [Vue Apollo](https://apollo.vuejs.org/)

* [Vue-multiselect](https://vue-multiselect.js.org/)

* UI components from the official [Bootstrap 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/) website documentation.

-------------------------------------------------------------

## Django Todo App

A project built with Django web framework and Bootstrap

### Project Goals

* Users can register to our website to create todos.

* Users can Create, Read, Update and Delete the todos form the website.

* Once logged in, Users can access a REST API of the our website, which also allows them to use CRUD (Create, Read, Update and Delete) operations.

### Project Functionalities:

* Only logged in users can add todos from the website or the API.

* The list todo page of the website and the API will show only the todos which the logged in user created. Meaning, Only the author of the todo who can perform CRUD operations.

* If one user tried to test URLs to reach another user's todo a 403 Forbidden page is displayed.

* Once logged in Users can access a REST API which has a filtering framework built with django-filter package, which allows the user to filter the todos by their state (completed or not completed).

### Project Files

* [Github](https://github.com/moustafa-shaaban/Django_Todo_App_with_Authentication_and_Authorization)


### Project Preview

* [Youtube](https://www.youtube.com/watch?v=Ux8aDtOjBOY)


### Libraries and Packages used

* [Django Web Framework](https://www.djangoproject.com/)

* [Django Rest Framework](https://www.django-rest-framework.org/) package

* [django-filter](https://github.com/carltongibson/django-filter/tree/main)

* UI components from the official Bootstrap 4.6 website documentation.

----------------------------------------------------------------
## Django and folium

### Project Goals

* Use the power of Folium package to visualize data generated from Django Database on a Leaflet JS map.

* Use Django Admin Site to Import and Export data into and from the database.

* Visualize data using Folium's Simple Markers and Marker Cluster.


### Project Files

* [Github](https://github.com/moustafa-shaaban/Django_and_Folium)

### Project Preview

* [Version 1 on Youtube](https://www.youtube.com/watch?v=r08MujfgjoM)

* [Version 2 on Youtube](https://www.youtube.com/watch?v=eU8r5l9-6JE)


### Libraries and Packages used

* [Django Web Framework](https://www.djangoproject.com/)

* [django-import-export](https://django-import-export.readthedocs.io/en/latest/) package

* [Folium](https://python-visualization.github.io/folium/)
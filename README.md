tapestry5-angular-light integration
==================================

In this demo, a Tapestry page is used to "provision" the Angular application.
The Tapestry web application is also used hsot the REST API used by the Angular Application.


the REST-ful API is managed by RESTEasy thanks to Tapestry-RESTEasy (see http://tynamo.org/tapestry-resteasy+guide for more details).

Persistence is managed by Tapestry-Hibernate

For Security, this application uses JAX-RS Interceptor (see SecurityInterceptor.java) and Apache Shiro thanks to [tapestry-security](http://tynamo.org/tapestry-security+guide).


This project contains two folders

- `tapestry5-app` folder : the Tapestry web application 

use mvn jetty:run and hit [http://localhost:8080/](http://localhost:8080/)

- `angular-app` folder : the Angular Web App 

to build the Angular application available as resources in the tapestry5-app/src/main/webapp/angular, 
have a look at the /angular-app/README

# Changelog 
* 0.1 : first version

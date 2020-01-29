# Angular App for Tapestry 5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.
This Angular app application will use data provided by REST Api & Java Objects hosted in a Tapestry Web Application.
To setup this application run `npm install` first.

## Development server

Run `mvn jetty:run` on your Tapestry the Web Application called tapestry5-angular-sample on localhost:8080 .
Run `npm run start ` for a dev server. 
Navigate to `http://localhost:4200/angular/`. The app will automatically reload if you change any of the source files. 


## Build for production

Run `ng build --prod` to build the project for production. The build artifacts will be stored in the `dist/` directory. 
In order to use the Angular Application inside the tapestry Web Application just replace the folder called  `/tapestry5-angular-sample/src/main/webapp` by the content of the `dist/` folder. 



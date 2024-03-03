# cs465-fullstack
A web application for one of my final classes at SNHU!


Architecture


The project started with a template that was transformed into a handlebars template, then made to use the MEAN stack. With this stack, the logic for each component is determined by a typescript file while the front end is handled by HTML which calls the Typescript. We used a NoSQL MongoDB database because the data was not all relational and we wanted to be able to add new categories of the data or exclude sections of the data for a trip.


Functionality


JSON is essentially Javascript, but written in a format to simply store data. JSON files store information that is used in both the front-end and the back-end of the website. In this program, I refactored the code in authentication.ts to have functions that are useful for logging in, getting and saving a token, and registering an account. Reusable UI components are great because they reduce the number of things you need to import or write.


Testing


Testin an application is important to verify that edge cases work and to uncover bugs. Methods are like the different actions the app can perform. An endpoint is the URL or the address of the site that uncovers a new part of the apps functions. A web app also needs security in the form of authorization, encrypting/hashing and salting user info, sanitizing inputs to prevent SQL injection, and notifying admins of potential issues.


Reflection

I have learned a bit about how API calls work and how websites work under the hood. The course has given me a little more undeerstanding of how the internet works and how content is updated and displayed and kept secure.

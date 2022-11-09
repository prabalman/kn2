# CS6210-Capstone



## Getting started

You will need to install NodeJS and npm (node package manager, used for importing and managing various libraries and plugins). Please use the latest versions, as this project is currently using version 18.x.x of NodeJS. Installation instructions will vary based on your machine, so google this. You'll also be using ExpressJS for the front-end templates.

## Adding a new dependency
You can use this command to install a new dependency:
`npm install <dependencyname> --save`
Make sure you include the `--save` portion of the command as this is what will add it to the package.json file and allow others on the team to immediately install the same dependencies you've added.

## Starting the server
Run `npm start` which is defined in package.json under scrips. This will start the server on `http://localhost:8000`. 
To quit the server, use `Ctrl + C`.

## Viewing the web app in browser
Ensure the server is running by starting it as described above.
Then, go in your browser to http://localhost:8000.
If you want to access a specific page as defined in the Routes/ files, just add a route to the url. For instance:
http://localhost:8000/login
http://localhost:8000/register
http://localhost:8000/recipes

## Contributing to this repository
PLEASE, use branches. Do not commit directly into the main develop branch. Let's make use of pull requests (add others on the team as reviewers) before merging any new code so that we do not end up merging in duplicated or breaking code.

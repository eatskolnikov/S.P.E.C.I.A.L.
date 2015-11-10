# S.P.E.C.I.A.L.
About
==============
I'm trying to get more practice with angularjs so I made this thing. I really liked the fallout series since fallout 3 and given that fallout 4 is coming out pretty soon I made this, hope people like it.

If you don't know what the S.P.E.C.I.A.L. thing is you can check it out [here](http://fallout.wikia.com/wiki/SPECIAL)

Feel free to open tickets, fork, star or make pull requests.

Setup and installation
==============

Install nodejs
--------------
[Here](https://goo.gl/YcOsZP) you can check how to do so. There's an issue when installing Node in Ubuntu, check it out how to solve it [here](https://goo.gl/uSfZXo)

Open the command line and update npm
--------------
	npm install npm -g

Install bower
--------------
	npm install -g bower

**Before proceeding make sure you are in the project's root folder within the terminal**

Install npm packages
--------------
	npm install

Install bower packages
--------------
	bower install

Building
--------------
	grunt build

You can run the build task with this. It will validate js files and create a build folder where it will copy all the css, js, images and html minified.

Watching
--------------
	grunt watch

Watches any changes made to code files inside the src/ folder. If the watcher sees a change it starts the building procces

Running
--------------
	npm start

Executes the "node server.js"  command and serve the content of the ./build directory via the port 8000 , accesible via http://localhost:8000

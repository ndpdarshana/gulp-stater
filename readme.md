This tutorial set inspired by Joel Longie tutorial set on youtube

Playlist:
https://www.youtube.com/playlist?list=PLv1YUP7gO_viROuRcGsDCNM-FUVgMYb_G

Blog:
http://joellongie.com/gulp-build-system-part-2-setup/

Summery

----- Project file structure ------
.
├── project
│   └── app
│       └── css
        └── js
        └── images
        └── index.html
    └── .gitignore
    └── readme.md

----- bower package manager ------

install bower on nodejs
npm install -g bower

------ bower on project -------

bower init
? name [hit enter]
This command will generate bower.json and bower_components folder in our project

bowe install/uninstall packages:

bower install PACKAGE --save
bower uninstall PACKAGE --save

Existing bower project initialize:
bower install

example:

bower install angular --save

see paths for packages:

bower list --paths

------- Nodejs on project ---------

npn init
[hit enter]
This command will generate package.json and node_modules on our project

------ Gulp installation -----------

-- Global gulp installation
npm install -g gulp

-- local gulp installation on the project
npm install gulp --save-dev

touch gulpfile.js --> To generate gulpfile.js on the project

This tutorial set inspired by Joel Longie tutorial set on youtube

Playlist:
https://www.youtube.com/playlist?list=PLv1YUP7gO_viROuRcGsDCNM-FUVgMYb_G

Blog:
http://joellongie.com/gulp-build-system-part-2-setup/

Summery

----- Project file structure ------
<pre>
.
├── project
│   └── app
│       └── css
        └── js
        └── images
        └── index.html
    └── .gitignore
    └── readme.md
</pre>
----- bower package manager ------
<pre>
<code>install bower on nodejs</code>
<code>npm install -g bower </code>
</pre>
------ bower on project -------
<pre>
<code>bower init</code>
? name [hit enter]
</pre>
This command will generate bower.json and bower_components folder in our project

bowe install/uninstall packages:
<pre>
<code>bower install PACKAGE --save</code>
<code>bower uninstall PACKAGE --save</code>
</pre>

example:
<pre>
<code>bower install angular --save</code>
</pre>

Existing bower project initialize:
<code>bower install</code>

see paths for packages:

<code>bower list --paths</code>

------- Nodejs on project ---------
<pre>
<code>npn init</code>
[hit enter]
</pre>
This command will generate package.json and node_modules on our project

------ Gulp installation -----------

-- Global gulp installation
<code>npm install -g gulp</code>

-- local gulp installation on the project
<code>npm install gulp --save-dev</code>

<code>touch gulpfile.js</code> --> To generate gulpfile.js on the project

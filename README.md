## Steps Taken to Optimize this portfolio website:

1. Clone the [orginal repo.](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)
2. Initizle the repo for node.js and the install gulp. This assumes npm and gulp are already installed globally.

  ```bash
  sudo npm init
  sudo npm install --save-dev gulp
  ```
3. Setup minification for images, javascript, and html files.  I 
will not setup minification for css files, as I am going to inline
the largest one. 

4. Changes to the index html
  - a. move the google analytics script to just just before end of body tag
  - b. inline the style.css file
  - c. add media tag to print.css files
  - d. added async tag to analytics.js
  - e. optimize pizzera.jpg.  In the design the image never seems to get bigger
  than 360x270, so resized to that.
  - f. google fonts disabled, to get 90 PSI we need to use user's fonts

4. Git branch "gh-pages" added so project can be served by git-hub. In 
this example the build/ directory is part of the repo, this is not a good
practice but is done so that the example can be hosted from github.

5. Optimze main.js file.
  - three changes made to the loop that moves the pizzas, comments in the main.js file near line 501
  - I can get approx 58fps, based on the comments in the forums I believe this is enough. I can't see any other major improvements that can be done when scrolling.
  
## To Run this project

1. [Link to minified final work](http://eqpolar.github.io/frontend-nanodegree-mobile-portfolio/build/)
2. [Link to dev version](http://eqpolar.github.io/frontend-nanodegree-mobile-portfolio/)

## To Build this project
1. You will need to have node, npm, and gulp installed globally. This [guide](http://travismaynard.com/writing/getting-started-with-gulp) can help.
2. You will need to install all the project dependancies:
```bash
npm install
````
3. Now you can build the project using the following commands:
```bash
gulp clean
gulp
```

The built version of the project will appear in the build sub-directory.


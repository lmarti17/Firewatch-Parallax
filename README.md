# Parallax using Firewatch layer artworks

I do not own any of the layer I used in this experiment !
Check their website at [firewatchgame.com](http://www.firewatchgame.com/).


### Informations
The directories:
* __sass/__
    * views/ (Each part of your sass)  
    * app.scss (Import each file in the views directory)
    * reset.scss
* __js/__
    * app/ (The js files directoy)
    * dist/ (The compiled js directory in *app.js*)
    * vendor/ (The libraries you include)
* __stylesheets/__ (The compiled scss in *app.css*)


### How to install

1. Download the repo

2. Install the dependencies: `npm install`

3. Build & Watch the app: `gulp`

### Development | Gulp scripts:

* Run `gulp` to watch any changes and auto-compile (It also `gulp build` one time the project before)

* Run `gulp build` to compile one time the project

* Run `gulp sass` to compile scss

* Run `gulp js_app` to compile js files from js/app in js/dist/app.js

* Run `gulp js_libs` to compile js/vendor libs in js/dist/vendor.js





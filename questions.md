# Questions

1\.  What is hot-reloading?

```
Hot reloading  refreshes the files that were changed without losing the state of the app so without restarting the app 
```

2\.  Why did you need you to set up a server for your production build but not when running your app in development?

```
I needed to install express and create a new js file were I configured the server and used express_static to point the server to my production server files and changed scripts in package.json so I can start my development server usong yarn dev and yarn start for my production server both on different ports
```

3\. After you ran `yarn eject`, you should have seen two new directories created, `config` and `scripts`. Choose 3 files from these directories and describe what they do. You aren't expected to understand everything that's going on in these files, but do make sure you understand in general why they are needed.

File 1:FileTransform.js

```
Basicaly creates a template for all relevant files that needs to require React and to export a component I guess 

```

File 2:paths.js

```
It creates relevant methods for different paths used when it bundels everything togeter.
```

File 3:webpackDevServer.config.js

```
It creates a start point an output and loaders for our app 
```

4\.  What does Webpack do? Explain, using specific examples from this activity.

```
In this activity we installed a scaffolding app called create react app that already had 
the webpack configured to a general use . It collects all our files and dependencies transforms everything to something that it can understand, adds hot-reloaders for the development server and bundles everything together.

```

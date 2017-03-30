# ContactMap - Built in React/Redux

This is a sample migration of the 5calls app to react/redux

This is started with the react-create-app cli

We then used the eject functionality to modify the build.

#Modifications to WebPack build

1)  We tried source maps by setting:
"devtools: "eval-source-map"

However, like the facebook team notes, it is easier to just debug the transpiled code.  The "eval" setting
"devtools: "eval"

breaks apart the webpack build into the respective files and this works perfectly.

2) To accomodate the use of the react-controllables library, we used the babel plugin:
plugins: ['transform-decorators-legacy']

babel 6 has disabled decorators and these are required for this library.  The react-google-maps component uses
react-controllables for communication with components that contain it.


## Deploying

Build minified js and css

```
npm run build
```

Push `build/` directory to static page hosting.
Wer're using recommends [Surge](https://www.surge.sh)

### Surge

With Surge CLI deploy app:

```sh
npm install -g surge
surge
```

To deploy just go to the Build directory after running "npm run build"
and type "surge"

`cd build`
`surge`

it will use "schraj@gmail.com" for the user.  call me for password.

This app is currently running at
http://ablaze-truck.surge.sh







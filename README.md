# 5Calls - Built in React/Redux

This is a sample migration of the 5calls app to react/redux

This is started with the react-create-app cli

I then used the eject functionality to modify the build.

#Modifications to WebPack build

1)  I tried source maps by setting:
"devtools: "eval-source-map"

However, like the facebook team notes, it is easier to just debug the transpiled code.  The "eval" setting
"devtools: "eval"

breaks apart the webpack build into the respective files and this works perfectly.

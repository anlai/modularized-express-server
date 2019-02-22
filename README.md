# modularized-express-server

This is a sample demo app for a pattern to develop a platform that loads content through the usage of npm packages.

Highlights the capability to delegate out content to packages with multi-versioned endpoints, as well as maintain ability to have global context specific middleware.

# usage

Use the following commands to startup the server

```
cd server
npm i
node index
```

# endpoints

- http://localhost:3000/helloworld?version=2019-01-01
- http://localhost:3000/helloworld?version=2019-02-01
- http://localhost:3000/goodbyeworld?version=2019-01-01
- http://localhost:3000/goodbyeworld?version=2019-02-01
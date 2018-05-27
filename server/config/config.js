var env = process.env.NODE_ENV || 'development';

// For heroku env use, in package.json - scripts > "test": "export NODE_ENV=test || SET NODE_ENV=test && mocha server/**/*.test.js",
console.log("Enviroment: ", env);

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}

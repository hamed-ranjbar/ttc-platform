const mongoose = require('mongoose');
const dbServer = (process.env.NOED_ENV == 'production') ? process.env.MONGODB_URL : 'mongodb://localhost:27017/ttc-platform';

console.log(`connecting to ${dbServer}`);
mongoose.connect(dbServer, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
},1000);

const db = mongoose.connection;
process.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

db.once('open', function () {
  console.log("connected to DB successfully");
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

require('./users');
require('./Programs');
require('./Institutions');
require('./Instructors');
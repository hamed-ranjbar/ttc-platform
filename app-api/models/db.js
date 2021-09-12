const mongoose = require('mongoose');
const dbServer = (process.env.state == 'production') ? `mongodb+srv://${process.env.db_username}:${process.env.db_password}@ttc-cluster.lomgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` : 'mongodb://localhost:27017/ttc-platform';

console.log(`connecting to ${dbServer}`);
mongoose.connect(dbServer, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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
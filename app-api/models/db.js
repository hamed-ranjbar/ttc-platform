const mongoose = require('mongoose');
const dbServer = (process.env.state == 'production') ? 'mongodb+srv://hmd_rnj_98:kalpase2000@ttc-cluster.lomgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' : 'mongodb://localhost:27017/test';

console.log(`connecting to ${dbServer}`);
mongoose.connect(dbServer, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
process.on('error', console.error.bind(console, 'connection error:'));

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

db.once('open', function () {
  console.log("connected to DB successfully");
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

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};
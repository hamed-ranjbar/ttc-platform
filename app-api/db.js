const mongoose = require('mongoose');
const dbServer = (process.env.state == 'production')?'hmd_rnj_98:kalpase2000@ttc-cluster.lomgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority':'mongodb://localhost:27017/test';

mongoose.connect(dbServer, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to DB successfully");
});
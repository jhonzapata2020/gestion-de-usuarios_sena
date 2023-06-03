const mongoose = require('mongoose'); 
 const URI = 'mongodb+srv://ferrepluss:root@clusterferrepluss.kv6gibu.mongodb.net/login?retryWrites=true&w=majority'; 
 mongoose.connect(URI)
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose; 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let UserData = new Schema({

    UserName : String,
    Password : String
})

module.exports = mongoose.model('UserData', UserData);



// module.exports = mongoose => {
//     const sampleCollections = mongoose.model(
     
//       mongoose.Schema(
//         {
//           UserName: String,
//           Password: String,
//         },
        
//       )
//     );
  
//     return sampleCollections;
//   };
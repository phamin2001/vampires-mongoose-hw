// 1. Require your node modules

// 2. Require your model (and possibly your extra data source);

// 3. Connect your database and collection name

// 4. Open your mongoose connection

const mongoose = require('mongoose');
const uri = 'mongodb://localhost/vampire';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${uri}`);
});
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connect error ${uri}`);
});
mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${uri}`);
});

require('./app');
const Vampire = require('./models/vampire');

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
const vampireData = require('./populateVampires');

Vampire.collection.insertMany(vampireData,(err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
  });

// ### Add some new vampire data
// Vampire.create([
//     {
//         name: 'Yogi',
//         hair_color: 'yellow',
//         eye_color: 'green',
//         gender: 'm'
//     },
//     {
//         name: 'Douggy',
//         hair_color: 'black',
//         eye_color: 'green',
//         lovers:['grass'],
//         gender: 'm'
//     },
//     {
//         name: 'zamsti',
//         hair_color: 'white',
//         eye_color: 'red',
//         dob: new Date(2000, 2, 17, 18, 45),
//         gender: 'f'
//     },
//     {
//         name: 'chungoee',
//         hair_color: 'pink',
//         eye_color: 'purple',
//         gender: 'f',
//         victims: 4,
//     }], (err, createVampire) => {
//         if(err) {
//             return console.log(err);
//         } else {
//             console.log(createVampire);
//         }
//         mongoose.connection.close();
// });
/////////////////////////////////////////////////
// ## QUERYING
// Vampire.find({gender:'f'}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({victims: {$gt: 500}}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({victims: {$lte: 150}}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({victims: {$gt: 150, $lt: 500}}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({title: {$exists:true}}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({victims: {$exists: false}}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({title: {$exists: true}, victims: {$exists: false}}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({victims: {$exists: true}, victims: {$gt: 1000}}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });
/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find({$or: [{location: 'New York, New York, US'} , {location: 'New Orleans, Louisiana, US'}]},
//             (err, vampire) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log(vampire);
//             }
// });

// Vampire.find({$or: [{loves: {$in: 'brooding'}}, {loves: {$in: 'being tragic'}}]}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({$or: [ {victims: {$gt: 1000}}, {loves: {$in: 'marshmallows'}} ]}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]}, (err, vampire) =>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

/////////////////////////////////////////////////
//### Select objects that match one of several values
// Vampire.find({$or: [{loves: {$in: 'frilly shirtsleeves'}}, {loves: {$in: 'frilly collars'}}]}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({loves: {$in: 'brooding'}}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({$or: [
//     {loves: {$in: 'appearing innocent'}}, {loves: {$in: 'trickery'}}, 
//     {loves: {$in: 'lurking in rotting mansions'}}, {loves: {$in: 'R&B music'}}
//     ]}, (err, vampire) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(vampire);
//         }
// });

// Vampire.find(
//             { 
//                 loves: {$in: 'fancy cloaks', $nin: ['top hats', 'virgin blood']}
//             },
//             (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });
/////////////////////////////////////////////////
//### Negative Selection
// Vampire.find(
//             {
//                 loves: {$in: 'ribbons'},
//                 eye_color: {$nin: ['brown']}
//             }, (err, vampire) => {
//     if(err) {
//         console.log('err');
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({location: {$nin: ['Rome, Italy']}}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

// Vampire.find({loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}},
//                 (err, vampire) =>{
//                     if(err) {
//                         console.log(err);
//                     } else {
//                         console.log(vampire);
//                     }
// });

// Vampire.find({victims: {$lt: 200}}, (err, vampire) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampire);
//     }
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
// let change = {$set: {name: 'Eve', portrayed_by: 'Tilda Swinton'}};
// Vampire.findOneAndUpdate(
//     {name: 'Claudia'}, change,
//     {new: true, strict: false},
//     (err, vampire) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(vampire);
//         }
// });

// Vampire.findOneAndUpdate(
//     {gender: 'm'},
//     {$set: {name: 'Guy Man', is_actually: 'were-lizard'}},
//     {new: true, strict: false},
//     (err, vampire) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(vampire);
//         }
//     }
// );

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////

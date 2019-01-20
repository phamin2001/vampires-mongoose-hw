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
// ### Select by comparison
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

Vampire.find({victims: {$exists: true}, victims: {$gt: 1000}}, (err, vampire) => {
    if(err) {
        console.log(err);
    } else {
        console.log(vampire);
    }
});

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

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

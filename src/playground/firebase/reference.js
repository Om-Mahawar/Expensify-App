import firebase from 'firebase/app';
// import 'firebase/database';

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyAkuMfEzmx2m7NLG1_qn2OhU9hIEb49Lfk',
//   authDomain: 'expensify-dfcca.firebaseapp.com',
//   databaseURL: 'https://expensify-dfcca-default-rtdb.firebaseio.com',
//   projectId: 'expensify-dfcca',
//   storageBucket: 'expensify-dfcca.appspot.com',
//   messagingSenderId: '995455883197',
//   appId: '1:995455883197:web:7572d006532b2d41bde4d4',
//   measurementId: 'G-5K479E5R4K',
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database
// //   .ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').on(
// //   'value',
// //   (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });
// //     console.log(expenses);
// //   },
// //   (e) => {
// //     console.log(e);
// //   }
// // );

// // database.ref('expenses').push({
// //   description: 'Gum',
// //   note: '',
// //   amount: 195,
// //   createdAt: 0,
// // });

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native , angular',
// // });

// // database.ref('notes').set(notes);

// // const onValueChange = database.ref().on(
// //   'value',
// //   (snapshot) => {
// //     const value = snapshot.val();
// //     const message = `${value.name} is a ${value.job.title} at ${value.job.company}`;
// //     console.log(message);
// //   },
// //   (e) => {
// //     console.log(e);
// //   }
// // );

// // database
// //   .ref()
// //   .once('value')
// //   .then((snapshot) => {
// //     console.log(snapshot.val());
// //   })
// //   .catch((e) => {
// //     console.log(e);
// //   });

// // database
// //   .ref()
// //   .set({
// //     name: 'Om Mahawar',
// //     age: 20,
// //     stress: 6,
// //     job: {
// //       title: 'Software Developer',
// //       company: 'Google',
// //     },
// //     location: {
// //       city: 'Sitapur',
// //       country: 'India',
// //     },
// //   })
// //   .then(() => {
// //     console.log('Data is saved');
// //   })
// //   .catch((e) => {
// //     console.log('This failed: ', e);
// //   });

// // database.ref().update({
// //   stress: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Hyderabad',
// // });

// // database
// //   .ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Removed Successfully');
// //   })
// //   .catch((e) => {
// //     console.log('Error:', e);
// //   });

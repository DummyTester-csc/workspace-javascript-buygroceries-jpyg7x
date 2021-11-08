// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
const firebaseConfig = {

  apiKey: "AIzaSyAjUVWVz0YjxpYDKzgAp_2pOOa8LXiDERo",

  authDomain: "mygrocerieslist-6850e.firebaseapp.com",

  projectId: "mygrocerieslist-6850e",

  storageBucket: "mygrocerieslist-6850e.appspot.com",

  messagingSenderId: "185318220934",

  appId: "1:185318220934:web:de116ec292246f74f11d07",

  measurementId: "G-8DS1MBDGVN"

};


firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value//?
    });


  });

});

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQWmtyWxuEYgnUHdZejvH0TVPlRoWHs6w",
    authDomain: "acil-ac093.firebaseapp.com",
    databaseURL: "https://acil-ac093.firebaseio.com",
    projectId: "acil-ac093",
    storageBucket: "acil-ac093.appspot.com",
    messagingSenderId: "285911163637"
  };
  firebase.initializeApp(config);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('gform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var comment = getInputVal('comment');
  var prod = getInputVal('prod');
  var Cou_nuque = getInputVal('Cou_nuque');
  var poitrine = getInputVal('Poitrine');
  var L_estomac = getInputVal('L_estomac');
  var Hanche = getInputVal('Hanche');
  var Longeur = getInputVal('Longeur');
  var Epaule = getInputVal('Epaule');
  var La_manche = getInputVal('La_manche');
  var Longeurp = getInputVal('Longeurp');
  var Ceinture = getInputVal('Ceinture');

  // Save message
  saveMessage(name, email, comment, prod , Cou_nuque, poitrine,L_estomac,Hanche,Longeur,Epaule,La_manche,Longeurp,Ceinture);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('gform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, comment, prod , Cou_nuque, poitrine,L_estomac,Hanche,Longeur,Epaule,La_manche,Longeurp, Ceinture){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name:name,
    email:email,
   telephone:comment,
   produit:prod ,
   Cou_nuque:Cou_nuque,
   poitrine :poitrine ,
   Ventre:L_estomac,
   Hanche :Hanche ,
  Longueur:Longeur,
  Epaule:Epaule,
  La_manche:La_manche,
  Longueurp:Longeurp,
  Ceinture:Ceinture,


  });
}


//Unique FireBase Object
 var firebaseConfig = {
    apiKey: "AIzaSyBreoaGiQSAWKfRSnyfIemQb7aqOEDFBfY",
    authDomain: "transform-accessories-dd2e8.firebaseapp.com",
    projectId: "transform-accessories-dd2e8",
    storageBucket: "transform-accessories-dd2e8.appspot.com",
    messagingSenderId: "199225378230",
    appId: "1:199225378230:web:fc1bf605ca2291a1bbad17"
  };


 //Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("formData");



//create event listener to allow form submission

document.querySelector(".contact-form").addEventListener("submit", submitForm);


function submitForm(e) {

    e.preventDefault();

    //Get Form Values
    let name = document.querySelector('.name').value;
    let email = document.querySelector('.email').value;
    let message = document.querySelector('.message').value;

    //Save Form Data to FireBase
    db.doc().set({
        Name: name,
        Email: email,
        Message: message
    });

    sendEmail(name, email, message);

    document.querySelector(".contact-form").reset();

  

}

function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "transform.mobiles.2020@gmail.com",
        Password: "aywrdnppkumwpxtm",
        To: 'transform.mobiles.2020@gmail.com',
        From: "transform.mobiles.2020@gmail.com",
        Subject: `One New Message from your Online Web Application `,
        Body: `<strong>TRANSFORM ACCESSORIES MOBILE PHONES</strong> <br/><br/> Name: ${name} <br/> <br/> Email: ${email} <br/><br/> Message: ${message}`,
    })
        .then(function (message) {
            document.getElementById("MessageSent").innerHTML += "<p> Thank You for Contacting us. We will be in touch with you!</p>";
    });
}

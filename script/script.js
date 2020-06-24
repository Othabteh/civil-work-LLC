'use strict';
function userOrder() {
    var greeting;
    var greeting2;
    var greeting3;
    var greeting4;

    var yourName=prompt("please enter your name");
    greeting4=('Welcome ' + yourName );

    var yourage = prompt("please enter your age! ");
    if (yourage > 18) {
        greeting = "Welcome to our website! ";
    } else {
        greeting = "you are not allowd to open this site! ";
    }

    var yourmajor = prompt("please enter your major! ");
    if (yourmajor === "engineering") {

        greeting2 = "together we will make difference! ";
    }
    else {
        greeting2 = "this website is only for engineers! ";
    }
    var contact = prompt("Are you intrested to cotact us! ");
    if (contact === "yes") {
        greeting3 = "you are more than welcom to contact us !";

    }
    else {
        greeting3 = "thank you for visit our website!";
    }

    document.write('<h3>' + greeting4 + '</h3>');
    document.write('<h3>' + greeting + '</h3>');
    document.write('<h3>'+ greeting2 + '</h3>');
    document.write('<h3>'+ greeting3 + '</h3>');
}
userOrder(); 
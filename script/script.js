'use strict';




var greeting;
var greeting2;
var greeting3;

var yourage = prompt("please enter your age!");
if (yourage > 18) {
    greeting = "Welcome to our website!";
} else {
    greeting = "you are not allowd to open this site!";
}

var yourmajor = prompt("please enter your major!");
if (yourmajor = "engineering") {

    greeting2 = "together we will make difference!";
}
else {
    greeting2 = "this website is only for engineers!";
}
var contact = prompt("Are you intrested to cotact us!");
if (contact = "yes") {
    greeting3 = "you are more than welcom to contact us!";

}
else {
    greeting3 = "thank you for visit our website";
}


document.write('<h3>' + greeting + greeting2 + greeting3 + '</h3>');
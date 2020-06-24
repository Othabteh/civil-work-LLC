'use strict';
function userInformation() {
    var greeting;
    var greeting2;
    var greeting3;
    var greeting4;

    var yourName = prompt("please enter your name");
    greeting4 = ('Welcome ' + yourName);

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
    document.write('<h3>' + greeting2 + '</h3>');
    document.write('<h3>' + greeting3 + '</h3>');
}
userInformation();

function userOrder() {

    alert(" at civil work we provids our clients with the best designs of houses and hotels.");
    var userWant = prompt("what do you want to order house or hotel?");
    while (userWant !== 'house' && userWant !== 'hotel') {
        userWant = prompt("what do you want to order house or hotel?");
    }

    var orderNumbers = prompt('how many project do you want to order sir?');
    for (var i = 0; i < orderNumbers; i++) {
        if (userWant === 'house') {

            document.write('<img src="images/house.png">');
        } else if (userWant === 'hotel') {

            document.write('<img src="images/hotel.png">');
        }
    }

}

userOrder();
// greeting to insert to page
var name = window.prompt('Hello, Please enter your name');
var greeting = document.getElementById('greeting');

greeting.innerHTML += ', ' + name.toUpperCase();

var enterDays = document.getElementById('enterDays');
enterDays.onclick = calculateDays;

function calculateDays() {
  var daysInput = document.getElementById('days');
  var days = daysInput.value;

  var daysMessage = document.getElementById('daysMessage');
  if (days < 4) {
    daysMessage.innerHTML = 'Short trips are always worth it!';
  } else if (days < 7) {
    daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
  } else {
    daysMessage.innerHTML = "You'll have plenty of time to relax and have fun";
  }

  var hours = days * 24;
  var minutes = hours * 1440;
  var seconds = minutes * 86400;

  var hoursMessage = document.getElementById('hoursMessage');
  var minutesMessage = document.getElementById('minutesMessage');
  var secondsMessage = document.getElementById('secondsMessage');

  hoursMessage.innerHTML =
    "That means you'll be traveling for " + hours + ' hours';

  minutesMessage.innerHTML =
    "That means you'll be traveling for " + minutes + ' minutes';

  secondsMessage.innerHTML =
    "That means you'll be traveling for " + seconds + ' seconds';

  var timingNext = document.getElementById('timingNext');
  timingNext.removeAttribute('hidden');

  timingNext.onclick = function() {
    document.getElementById('budgetSection').removeAttribute('hidden');
  };

  document.getElementById('enterBudget').onclick = function() {
    var tripBudgetInput = document.getElementById('tripBudget');
    var budgetValue = tripBudgetInput.value;

    var actualBudget = budgetValue * 1.45;

    var tripExchangeMsg = document.getElementById('tripExchangeMsg');
    tripExchangeMsg.innerHTML =
      "That means you'll need " + '$' + actualBudget + ' NZD for your trip';

    var budgetPerDay = actualBudget / days;
    var dailyExchangeMsg = document.getElementById('dailyExchangeMsg');
    dailyExchangeMsg.innerHTML =
      'That means you can spend ' + '$' + budgetPerDay + ' NZD per day.';

    var change10 = 10 * 1.45;
    var exchange10 = document.getElementById('exchange10Msg');
    exchange10.innerHTML =
      "You'll need $" + change10 + 'NZD for an item that would cost you $10USD';

    var change500 = 500 * 1.45;
    var exchange500 = document.getElementById('exchange500Msg');
    exchange500.innerHTML =
      "You'll need $" +
      change500 +
      'NZD for an item that would cost you $500USD';
  };
}

// backgroundimage gallery

var images = [
  'img/bgimage.jpg',
  'img/bgimage1.jpg',
  'img/bgimage2.jpg',
  'img/bgimage3.jpg',
  'img/bgimage4.jpg',
  'img/bgimage5.jpg'
];
var currentImage = 0;

setInterval(changeImage, 3000);

function changeImage() {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
    images.addClass('transition');
  }
  document.body.style.backgroundImage = 'url(' + images[currentImage] + ')';
}

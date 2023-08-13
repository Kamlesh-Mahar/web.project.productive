var demoButtons;

function start() {
  demoButtons = document.querySelectorAll(".js-modify");
  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].addEventListener("click", toggleEffect);
  }

  var saveButtons = document.querySelectorAll(".js-save");
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", toggleActive);
  }
}
function toggleEffect() {
  var target = document.querySelector(this.dataset.target);
  target.dataset.effect = this.dataset.effect;

  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].classList.remove("active");
  }

  toggleActive.call(this);
}

function toggleActive() {
  this.classList.toggle("active");
}

window.addEventListener("load", start);

const fadeOut = () => {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.classList.add("fade");
};
window.addEventListener("load", fadeOut);

var quotes = [
  "There is nothing impossible to they who will try.",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "You are never too old to set another goal or to dream a new dream.",
  "You can be everything. You can be the infinite amount of things that people are.",
  "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
  "It is during our darkest moments that we must focus to see the light.",
  "Not having the best situation, but seeing the best in your situation is the key to happiness.",
  "In a gentle way, you can shake the world.",
  "I care about decency and humanity and kindness. Kindness today is an act of rebellion.",
  "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
  "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
  "Wake up determined, go to bed satisfied.",
];
function randomQuotes() {
  var idx = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[idx];
}

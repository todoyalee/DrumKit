const keys = Array.from(document.querySelectorAll('.key'));

const keyCode = {
  A: 65,
  S: 83,
  D: 68,
  F: 70,
  G: 71,
  H: 72,
  J: 74,
  K: 75,
  L: 76,
};

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`
  );

  const key = document.querySelector(
    `div[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`
  );

  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();     
}


keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

keys.forEach((key) =>
  key.addEventListener('click', (e) => {
    playSound(e);
  })
);
/*

function removeTransiton(e) {: This line declares a JavaScript function named removeTransiton that takes one parameter, e, which is presumably an event object.

if (e.propertyName !== 'transform') return;: This line checks if the propertyName property of the event object e is not equal to the string 'transform'. If it's not equal, the function immediately returns, effectively doing nothing. This is used to filter out events related to CSS transitions on properties other than 'transform'.

e.target.classList.remove('playing');: This line removes the CSS class named 'playing' from the classList of the e.target element. In this context, e.target is likely the DOM element that triggered the transition event. Removing the 'playing' class would typically be done to stop or reverse a CSS animation or transition that was triggered by adding the 'playing' class in the first place.

Overall, this code is often used in conjunction with CSS transitions to add and remove classes to control animations or transitions. When a CSS transition event occurs on an element with the property name 'transform,' this function is called to remove the 'playing' class, presumably ending the transition or animation associated with it.


In the code if (e.propertyName !== 'transform'), transform is referring to a CSS property known as the "transform" property.

In CSS, the "transform" property is used to apply transformations to an element, such as translations, rotations, scalings, and skewings. It allows you to modify the position and appearance of an element without affecting its layout in the document flow. Common values for the "transform" property include:

translate() - Translate (move) an element along the X and Y axes.
rotate() - Rotate an element by a specified angle.
scale() - Scale an element by a specified factor.
skew() - Skew an element by a specified angle.
matrix() - Apply a 2D transformation using a 6-value matrix.
When an element undergoes a transition or animation related to the "transform" property, the propertyName of the transition or animation event object (e in this case) is set to 'transform'. This code is checking if the propertyName of the event object is not equal to 'transform'. If it's not equal, it means that the event is not related to a transition on the "transform" property, so the code returns early and does not perform any further actions. This check is often used when you have multiple transitions or animations on an element, and you want to specifically target events related to the "transform" property.





*/
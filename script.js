let ratings = document.querySelectorAll(".rating");
let panel = document.querySelector("#panel");
let sendBtn = document.querySelector("#send");

console.log(
  ratings
); /*ratings is a NodeList so you can iterate over it/ loop through it with forEach
and you can add an eventlistener to each one through the looping

Ex: ratings.forEach(rating => rating.addEventListener("click", sendInfo))
*/

/* e shows the event and all the details about the event including the offset, but e.target shows the HTML element and its attributes
panel.addEventListener("click", (e) => {
  console.log(e);
});*/

/* it only console logs the div container that has the class name rating here
panel.addEventListener("click", (e) => {
  if (e.target.classList.contains("rating")) {
    console.log(e.target);
  }
});*/

/*here we are saying that in the panel, if the target's parent has the class of rating, then do this with the target being the image.. so now it will add the active class to the target*/
panel.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.classList.add("active");
  }
});

function removeActive() {
  ratings.forEach((rating) => rating.classList.remove("active"));
}

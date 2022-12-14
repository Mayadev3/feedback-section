const ratings = document.querySelectorAll(".rating");
const panel = document.querySelector("#panel");
const sendBtn = document.querySelector("#send");
const ratingsContainer = document.querySelector(".ratings-container");
let selectedRating;

console.log(ratings);

/*Here are some notes to remember and the code is all below*/

/*ratings is a NodeList so you can iterate over it/ loop through it with forEach
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

/*here we are saying that in the ratings container, if whatever i click on's parent has the class of rating, then do this with the target being the image.. so now it will add the active class to the target*/

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
    console.log(selectedRating);
  }
});

function removeActive() {
  ratings.forEach((rating) => rating.classList.remove("active"));
}

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `<i class= "fas fa-heart">
  <br/>
  <br/>
  <strong>Thank You</strong>
  <br/>
  <br/>
  <strong> Feedback: ${selectedRating}  </strong>
  <p>We'll use your feedback to improve our customer support </p>
  `;
  //selectedRating worked here because the ratingsContainer is inside the panel
});

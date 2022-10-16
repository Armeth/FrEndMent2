const firstcard = document.querySelector(".card")
const secondcard = document.querySelector(".card2")
const submitbutton = document.querySelector(".subbutton")
const numbuttons = document.querySelectorAll(".ratingbutton")
const score = document.querySelector(".chosenrating")

submitbutton.addEventListener("click", function(){
    firstcard.classList.add("hidden");
    secondcard.classList.remove("hidden");
})

numbuttons.forEach(function (rating) {
    rating.addEventListener("click", function (){
        score.innerHTML = rating.innerHTML;
    })
})


// const ratingbuttons = document.querySelectorAll(".ratingbutton")
// for (button of ratingbuttons){
//     button.addEventListener("click", function() {
//         console.log(this);
//         this.setAttribute("id", "selectedstate")
//     })
// }



// ratingbuttons.forEach(function() {
//     addEventListener("click", function() {
//         console.log("it works");
//     })
// })

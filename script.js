const button = document.getElementById('generate-btn')
const memeAddress = document.getElementById("memeLink")
const topText = document.getElementById("top-text")
const bottomText = document.getElementById("bottom-text")



// //event listener to prevent click from refreshing page
// document.querySelectorAll("form").addEventListener("keypress", function(e){
//     if (e.key === "Enter"){
//     e.preventDefault();}
// })


//set event listener for the submit button 
button.addEventListener("click", function(event) {
event.preventDefault();
//create pic from image address
console.log(memeAddress.value)
const pic = document.createElement("img")
pic.setAttribute("src", memeAddress.value)

//add pic to doc 
document.querySelector(".container").appendChild(pic)

console.log(topText.value)
console.log(bottomText.value)

const topInput = document.createElement("p");
topInput.innerText = topText.value
topInput.classList.add("top-text")


const bottomInput = document.createElement("p");
bottomInput.innerText = bottomText.value
bottomInput.classList.add("bottom-text")

document.querySelector(".container").appendChild(topInput)
document.querySelector(".container").appendChild(bottomInput)

//Add button to remove 
const removeBtn = document.createElement("button");
removeBtn.innerText = "Remove Meme"
document.querySelector(".container").appendChild(removeBtn)
})

//make remove button
const removeButtons = document.querySelectorAll("button")[1]


removeButtons.addEventListener("click", function(event) {
    event.preventDefault();
    e.target.parentElement.remove(); 
})
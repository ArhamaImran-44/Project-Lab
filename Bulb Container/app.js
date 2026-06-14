let bulb = document.querySelector("#bulb");
let onBtn = document.querySelector("#on-btn");
let offBtn = document.querySelector("#off-btn");
onBtn.addEventListener("click", () => {
  bulb.src =  "./images/img2.png";   
});
offBtn.addEventListener("click", () => {
  bulb.src =  "./images/img1.png";   
});
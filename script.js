/////////elements////////////
const boxStorage = document.getElementById("boxStorage");
const buttonGenerate = document.getElementById("buttonGenerate");
/////////buttons//////////////
buttonGenerate.addEventListener("click", () => {
  randomColor();
});
const buttonReset = document.getElementById("buttonReset");
buttonReset.addEventListener("click", () => {
  const boxStorage = document.getElementById("boxStorage");
  boxStorage.innerHTML = ""; 
});
/////////colors//////////////////
const randomColor = () => {
  const colors = ["#1F271B", "#003F91", "#6D326D", "#157A6E", "#916953"];
    color = colors[Math.floor(Math.random(1)*5)];
  createCircle();
  return color;
};
/////////circle///////////////////
const createCircle = (colors) => {
  const newCircle = document.createElement("div");

  boxStorage.appendChild(newCircle);

  newCircle.classList.add("circle");
  newCircle.style.border =`solid 4px ${color}`;
};



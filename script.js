const doit = document.querySelector("#doit");
makebox(16);
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
doit.addEventListener("click", () => {
  doit.classList.add("doitblacked");
  let value = parseInt(prompt("Enter Division of Width"));
  if (isNaN(value) || value > 500) {
    alert("Please enter a number less than or equal to 100");
  } else {
    makebox(value);
  }
  setTimeout(() => {
    doit.classList.remove("doitblacked");
  }, 200);
});
function makebox(value) {
  const container = document.querySelector(".container");
  container.style.height = "90vh";
  container.innerHTML = "";
  let thisheight = container.clientHeight;
  let thiswidth = container.clientWidth;
  let chh = Math.floor(thisheight / (thiswidth / value));
  container.style.height = chh * (thiswidth / value) + "px";
  for (let j = 0; j < chh; j++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < value; i++) {
      const col = document.createElement("div");
      col.classList.add("col");
      let w = thiswidth / value;
      let h = thiswidth / value;
      col.style.width = w + "px";
      col.style.height = h + "px";
      col.addEventListener("mousedown", changecolor);
      col.addEventListener("mouseover", changecolor);
      row.appendChild(col);
    }
    container.appendChild(row);
  }
}
function changecolor(e) {
  if (e.type == "mouseover" && !mouseDown) return;

  this.style.backgroundColor = document.querySelector("input").value;
}

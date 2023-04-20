const doit = document.querySelector("#doit");

doit.addEventListener("click", () => {
  doit.classList.add("doitblacked");
  let value = parseInt(prompt("Enter Division of Width"));
  if (isNaN(value) || value > 100) {
    alert("Please enter a number less than or equal to 100");
  } else {
    makebox(value);
  }
  setTimeout(() => {});
});
function makebox(value) {
  const container = document.querySelector(".container");
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
      row.appendChild(col);
    }
    container.appendChild(row);
  }
}

const list = document.getElementById("select");
const img = document.getElementById("img-select");
const container = document.getElementById("container");
const item = document.getElementById("items");

list.addEventListener("change", (e) => {
  let selectOptionValue = e.target.value;

  switch (selectOptionValue) {
    case "Html":
      img.setAttribute("src", "images/HTML.png");
      break;

    case "Javascript":
      img.setAttribute("src", "images/JAVASCRIPT.png");
      break;

      case "Monkey":
      img.setAttribute("src", "images/monkey.png");
      break;

      case "JI":
      img.setAttribute("src", "images/ji.png");
      break;

    case "Talha":
      img.setAttribute("src", "images/me.png");
      break;

    

    default:
      break;
  }
});

container.addEventListener("mousemove", (event) => {
  let positionX = event.offsetX;
  let positionY = event.offsetY;

  item.style.clipPath = `circle(70px at ${positionX}px ${positionY}px)`
});

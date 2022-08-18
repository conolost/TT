const logo = document.querySelector(".logo__name");
logo.style.cssText = "background-position: 0 100%;";

const text = document.querySelector(".main__wheel_inner");
//разбивка текста на буквы
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

let element = document.querySelectorAll(".main__wheel_inner span");
for (let i = 0; i < element.length; i++) {
  element[i].style.transform = "rotate(" + (i - 17) * 13 + "deg)";
}

const parallax = document.querySelector(".main");

const content = document.querySelector(".main__text");
//коэфициент сдвига
const coeficient = 10;
const speed = 0.1;

let posX = 0;
let posY = 0;
let coordXpercent = 0;
let coordYpercent = 0;

function setMouseParallaxStyle() {
  const distX = coordXpercent - posX;
  const distY = coordYpercent - posY;

  posX += distX * speed;
  posY += distY * speed;
  console.log(posX / coeficient, posY / coeficient);
  content.style.cssText = `transform: translate(${posX / coeficient}%, ${
    posY / coeficient - 50
  }%);`;
  requestAnimationFrame(setMouseParallaxStyle);
}
setMouseParallaxStyle();

parallax.addEventListener("mousemove", (e) => {
  const parallaxWidth = parallax.offsetWidth;
  const parallaxHeight = parallax.offsetHeight;

  const coordX = e.pageX - parallaxWidth / 2;
  const coordY = e.pageY - parallaxHeight / 2;

  coordXpercent = (coordX / parallaxWidth) * 100;
  coordYpercent = (coordY / parallaxHeight) * 100;
});

let images = [
  "./images/island.jpg",
  "./images/maldives.jpeg",
  "./images/mountain.jpg",
  "./images/rj.jpg",
];
var index = 0;
var slider = document.querySelector("#slider");

function next() {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  slider.src = images[index];
}

function prev() {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  slider.src = images[index];
}

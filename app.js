const projectContainer = document.querySelector(".project-container");
const images = document.querySelectorAll(".image");
let timer;
let nowScrolly = 0;
let scrolly = 100;
const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    document.body.style.backgroundColor = entry.target.dataset.bgcolor;
  });
});

const scrollHandler = (deltaY) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    if (deltaY < 0) {
      if (nowScrolly === 0) return;
      nowScrolly += scrolly;
    } else {
      if (nowScrolly === -(projectContainer.children.length - 1) * scrolly)
        return;
      nowScrolly -= scrolly;
    }

    projectContainer.style.transform = `translateY(${nowScrolly}vh)`;
  }, 200);
};

window.onload = () => {
  images.forEach((image) => io.observe(image));
};

projectContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollHandler(e.deltaY);
});

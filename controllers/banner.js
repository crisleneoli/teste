const spans = document.querySelectorAll(".banner_nav");
let currentIndex = 0;
let intervalId;

 function cambiarBanner() {
  spans[currentIndex].classList.remove("banner_nav--select");
  currentIndex = (currentIndex + 1) % spans.length;
  spans[currentIndex].classList.add("banner_nav--select");

  const header = document.querySelector("section.hero");
  header.className = `hero banner_${spans[currentIndex].id}`;
}

function handleSpanClick() {
  const spanId = this.id;
  spans.forEach((s, index) => {
    if (s.id === spanId) {
      s.classList.add("banner_nav--select");
      currentIndex = index; 
    } else {
      s.classList.remove("banner_nav--select");
    }
  });

  const header = document.querySelector("section.hero");
  header.className = `hero banner_${spanId}`;
  
  clearInterval(intervalId);
  intervalId = setInterval(cambiarBanner, 4000); 
}

intervalId = setInterval(cambiarBanner, 4000);

spans.forEach((span) => {
  span.addEventListener("click", handleSpanClick);
});

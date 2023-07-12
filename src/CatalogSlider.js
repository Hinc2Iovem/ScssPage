const catalogSingle = document.querySelector('.certificate-prompt-slider-flex');

function smoothScroll(element, distance, duration) {
  const start = element.scrollLeft;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const scrollValue = easeInOut(elapsedTime, start, distance, duration);
    element.scrollLeft = scrollValue;

    if (elapsedTime < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  function easeInOut(time, start, distance, duration) {
    time /= duration / 2;
    if (time < 1) return distance / 2 * time * time * time * time + start;
    time -= 2;
    return -distance / 2 * (time * time * time * time - 2) + start;
  }

  requestAnimationFrame(scrollAnimation);
}

function sliderScroll(slide) {
  slide.addEventListener('wheel', function (e) {
    e.preventDefault();

    const scrollAmount = e.deltaY;
    const scrollSpeed = 2.5;
    const duration = 700;

    const distance = scrollAmount * scrollSpeed;
    smoothScroll(slide, distance, duration);
  });
}

sliderScroll(catalogSingle);

const slider = document.querySelector('.main-benefits');
const reviewsGrid = document.querySelector('.reviews-grid');
const catalogSingle = document.querySelector('.certificate-prompt-slider-flex');

function sliderScroll(slide){
    slide.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        const scrollAmount = e.deltaY;
        const scrollSpeed = 3;
        
        slide.scrollTo({
            left: slide.scrollLeft + scrollAmount * scrollSpeed,
            behavior: 'smooth'
        });
    })
    
    let isDragging = false;
    let startPosition = 0;
    let startScrollLeft = 0;
  
    slide.addEventListener('mousedown', function (e) {
      isDragging = true;
      startPosition = e.clientX;
      startScrollLeft = slide.scrollLeft;
    });
  
    slide.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      e.preventDefault();
      
      const scrollAmount = startPosition - e.clientX;
      const scrollSpeed = 1.8;
      
      slide.scrollTo({
        left: startScrollLeft + scrollAmount * scrollSpeed,
        behavior: 'smooth'
      });
    });
  
    slide.addEventListener('mouseup', function () {
      isDragging = false;
    });
  
    slide.addEventListener('mouseleave', function () {
      isDragging = false;
    });
}

sliderScroll(slider);   
sliderScroll(reviewsGrid);   
sliderScroll(catalogSingle);
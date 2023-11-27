// sildbar Calling

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// dark mode -------------

const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {

  // Hint: Add 'dark' class to body :))

  document.body.classList.toggle('dark')

  if (document.body.className.includes('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }

  // console.log(document.body.className.includes('dark'));  // Boolean
})


window.onload = function () {
  let localStorageTheme = localStorage.getItem('theme')

  if (localStorageTheme === 'dark') {
    document.body.classList.add('dark')
  }

}
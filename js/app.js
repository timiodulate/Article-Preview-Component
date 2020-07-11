$(document).ready(function () {
  $("#myTooltips a").tooltip({
    html: true,
    title: "<p>SHARE<p> <img src='./images/icon-facebook.svg' alt='facebooklogo'><img src='./images/icon-twitter.svg' alt=''> <img src='./images/icon-pinterest.svg' alt='pinterestLogo'>",
  });
});

const shareImage = document.querySelector('.shareImg');
const shareImageCopy = document.querySelector('.shareImgC');
const active = document.querySelector('.active');

shareImage.addEventListener('click', () => {
  active.classList.add('show');
})
shareImageCopy.addEventListener('click', () => {
  active.classList.remove('show');
})
// const shareImage = document.querySelector
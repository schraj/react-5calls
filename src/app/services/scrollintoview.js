// import raf from 'raf'
// import smoothscroll from 'smoothscroll-polyfill'

// Uses window scroll instead of element.scrollIntoView
function scrollIntoView (element) {
  if (element){
    const scrollY = element.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    //window.scroll({ top: scrollY, left: 0, behavior: 'smooth' });
    window.scroll(scrollY, 0);
  }
}

// smoothscroll wrapper
module.exports = scrollIntoView;
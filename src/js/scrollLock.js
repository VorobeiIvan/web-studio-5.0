export function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${getScrollbarWidth()}px`;
  }
  
  export function enableScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
  
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  
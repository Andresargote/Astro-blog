window.addEventListener('scroll', () => {
  if (window.scrollY >= 10) {
    document.body.style.backgroundColor = 'lightgreen';
  } else {
    document.body.style.backgroundColor = 'white';
  }
});

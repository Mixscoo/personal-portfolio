// Small interaction: Glowing title animation
document.querySelector('h1').addEventListener('mouseenter', () => {
  document.querySelector('h1').style.textShadow = '0 0 20px #0ff';
});
document.querySelector('h1').addEventListener('mouseleave', () => {
  document.querySelector('h1').style.textShadow = '0 0 10px #0ff';
});

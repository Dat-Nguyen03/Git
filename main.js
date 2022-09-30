const openNav = document.querySelector('.fa-bars');
const closeNav = document.querySelector('.fa-xmark');
const nav = document.querySelector('.links')
const overlay = document.querySelector('.overlay');
console.log(overlay);
console.log(openNav);

openNav.addEventListener('click', ()=>{
  nav.style.right = '0';
  overlay.style.display = 'block'
})

closeNav.addEventListener('click', ()=>{
  nav.style.right = '-30%';
  overlay.style.display = 'none'
})

overlay.addEventListener('click', ()=>{
  nav.style.right = '-30%';
  overlay.style.display = 'none'
})
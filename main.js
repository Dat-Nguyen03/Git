const openNav = document.querySelector('.fa-bars');
const closeNav = document.querySelector('.fa-xmark');
const nav = document.querySelector('.links')
console.log(openNav);

openNav.addEventListener('click', ()=>{
  nav.style.right = '0';
})

closeNav.addEventListener('click', ()=>{
  nav.style.right = '-30%';
})
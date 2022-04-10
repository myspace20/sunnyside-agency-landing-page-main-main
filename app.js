const links = document.querySelector('.links');
const ham = document.querySelector('.ham');
const leading = document.querySelector('.leading')
const body = document.querySelector('body')



ham.addEventListener('click',e=>{
    
    if(links.classList.contains('links')){
        links.classList.toggle('active')
        leading.classList.toggle('hidden')
    }
})


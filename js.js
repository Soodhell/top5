function scrollTo (element){
    window.scroll({
        left: 0,
        top: 756,
        behavior: 'smooth'
    })
}

let button = document.querySelector('.button');
let head2 = document.querySelector('#head2')

button.addEventListener('click', () => {
    scrollTo(head2)
})

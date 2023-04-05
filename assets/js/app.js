Selector = (parametre) => {
    if(typeof(parametre) != 'string'){
        return false
    }
    return document.querySelector(parametre);
}


SelectorAll = (parametre) => {
    if(typeof(parametre) != 'string'){
        return false
    }
    return document.querySelectorAll(parametre);
}

AddClicked = (parametre) => {
    parametre.addEventListener('click', (e) => {
        parametre.classList.toggle('clicked');
    })
    
}


let btnTheme = Selector('.btn-theme')
let filter = Selector('.filter');
let navLinks = SelectorAll('.aside-nav ul li')
let glisse = Selector('.glisse')
let body = Selector('body')


AddClicked(filter);

btnTheme.addEventListener('click', (e) => {
    btnTheme.classList.toggle('clicked');
    body.classList.toggle('dark')
})



navLinks.forEach((element, k) => {
    element.addEventListener('click', (e) => {
        let step = k
        glisse.style.transform = `translateY(${(step * 60)}px)`
        console.log(step);
        element.classList.add('active');
        let parent = element.parentNode.querySelector('.active')
        parent.classList.remove('active');
        
    }) 
});



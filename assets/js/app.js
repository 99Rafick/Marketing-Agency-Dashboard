Selector = (parametre) => {
    if(typeof(parametre) != 'string'){
        return false
    }
    return document.querySelector(parametre);
}


AddClicked = (parametre) => {
    parametre.addEventListener('click', (e) => {
        parametre.classList.toggle('clicked');
    })
    
}


let btnTheme = Selector('.btn-theme')
let filter = Selector('.filter');

AddClicked(btnTheme);
AddClicked(filter);

function openMenu(){
    document.querySelector('.burder__button').classList.add('hide');
    document.querySelector('.burger__close').classList.add('active');
    document.querySelector('.menu').classList.add('show');
}

function closeMenu(){
    document.querySelector('.burder__button').classList.remove('hide');
    document.querySelector('.burger__close').classList.remove('active');
    document.querySelector('.menu').classList.remove('show');
    document.querySelector('.project__link').classList.remove('open');
    document.querySelector('.company__link').classList.remove('open');
    document.querySelector('.connect__link').classList.remove('open');
}

function seeMore(n, p){
    const link=['connect__link', 'company__link', 'project__link'];
    const list=['connect', 'company', 'project'];

    link.forEach(element => {
        if (n === element){
            document.querySelector(`.${element}`).classList.toggle('open');
            document.querySelector(`.${p}`).classList.toggle('turn');
        } else{
            document.querySelector(`.${element}`).classList.remove('open');
        }
    })


}
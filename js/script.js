console.log('Kłaniam się nisko ;) ');

let linkAboutMe = document.querySelector('.js-linkAboutMe');
let linkSport = document.querySelector('.js-linkSport');
let linkMusic = document.querySelector('.js-linkMusic');
let linkLiterature = document.querySelector('.js-linkLiterature');

function NaviDisapp() {
    document.querySelector(".js-navigation").style.visibility = 'hidden' ;
}

linkAboutMe.addEventListener("click", ()=> {
       setTimeout(NaviDisapp,15);
} ) ;

linkSport.addEventListener("click", ()=> {
    setTimeout(NaviDisapp,15);
} ) ;

linkMusic.addEventListener("click", ()=> {
    setTimeout(NaviDisapp,15);
} ) ;

linkLiterature.addEventListener("click", ()=> {
    setTimeout(NaviDisapp,15);
} ) ;

addEventListener("scroll", ()=> {
   if (document.querySelector(".js-navigation").style.visibility = 'hidden') { document.querySelector(".js-navigation").style.visibility = 'visible'} ;
})


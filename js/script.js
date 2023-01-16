{
    const welcomeFunction = () => { console.log('Kłaniam się nisko ;) ') };

    function naviDisappear() {

        function hideNavi() {
            document.querySelector(".js-navigation").style.visibility = 'hidden';
        };

        const buttonsQuantity = document.querySelectorAll('.js-navigation__link');

        for (i of buttonsQuantity) {
            i.addEventListener('click', () => {
                setTimeout(hideNavi, 15);
            });
        };

        addEventListener("scroll", () => {
            if (document.querySelector(".js-navigation").style.visibility = 'hidden') { document.querySelector(".js-navigation").style.visibility = 'visible' };
        })
    }

    const init = () => {
        naviDisappear();
        welcomeFunction();
    }
    init();
}

function menuToggle() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('nav');
    const header = document.querySelector('.header'); 
    const element = document.documentElement; 
    const navLinks = document.querySelectorAll('.link-color'); 

    function scrollBlock() {
        const scrollLeft = window.scrollX || element.scrollLeft;
        const scrollTop = window.scrollY || element.scrollTop;

        element.style.overflow = 'hidden';
        element.style.position = 'fixed';
        element.style.width = '100%';
        element.style.height = '100%';
        element.style.top = `-${scrollTop}px`;
        element.style.left = `-${scrollLeft}px`;

    }
    
    function scrollUnblock() {
        element.style.removeProperty('overflow');
        element.style.removeProperty('position');
        element.style.removeProperty('width');
        element.style.removeProperty('height');
        element.style.removeProperty('top');
        element.style.removeProperty('left');
    }


    const menuIsActive = () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        header.classList.toggle('active');
        hamburger.classList.contains('active') ? scrollBlock() : scrollUnblock(); 
    }

    hamburger.addEventListener('click', menuIsActive);



    // GET PATHNAME AND ADD COLOR

    const getPathname = () => {
        return window.location.pathname
    }

    function addColorActive() {
        navLinks.forEach((link) => {
            if (link.getAttribute('href') === getPathname()) {
                link.classList.add('active');
                return
            }
        })

    }
    addColorActive()
}

menuToggle()
document.addEventListener("astro:after-swap", menuToggle)
(() => {
    const refs = {
      openMenulBtn: document.querySelector('[.menu-open]'),
      closeMenuBtn: document.querySelector('[.menu-close]'),
      menu: document.querySelector('[.mobile-nav]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.medu.classList.toggle('is-hidden');
    }
  })();
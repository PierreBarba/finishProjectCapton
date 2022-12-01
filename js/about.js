window.onload = () => {
  const hamburger = document.querySelector('.menu1');
  const closeBtn = document.querySelector('.closeBtn');

  hamburger.addEventListener('click', () => {
    console.log('clicked');
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'block';
  });

  function close(menu, toBeClose) {
    menu.addEventListener('click', () => {
      const value = document.querySelector(toBeClose);
      value.style.display = 'none';
    });
  }

  close(closeBtn, '.mobile-menu');
  closeBtn.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
    close(menu);
  });
  console.log(closeBtn);
  const backToMainPage = document.querySelector('.menuPopUp');
  close(backToMainPage, '.mobile-menu');
  backToMainPage.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
  });
};

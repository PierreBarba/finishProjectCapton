window.onload = () => {
  const guestSpeakers = [
    {
      image: './assets/images/toto.png',
      name: 'Torger Christian Wolff',
      role: 'Formula 1 manager',
      bio: 'Shareholder and director in Formula 1',
    },
    {
      image: './assets/images/checop.png',
      name: 'Sergio Michel Pérez Mendoza',
      role: 'f1 driver',
      bio: 'Redbull Racing Driver',
    },
    {
      image: './assets/images/lewish.png',
      name: 'Lewis Carl Davidson Larbalestier Hamilton',
      role: 'f1 driver',
      bio: 'Mercedes AMG Petronas Motorsport',
    },
    {
      image: './assets/images/christianh.png',
      name: 'Christian Horner',
      role: 'Formula 1 manager',
      bio: 'Shareholder and director in Formula 1',
    },
    {
      image: './assets/images/zacb.png',
      name: 'Zak Brown',
      role: 'Formula 1 manager',
      bio: 'Shareholder and director in Formula 1',
    },
    {
      image: './assets/images/binnoto.png',
      name: 'Mattia Binotto',
      role: 'Formula 1 manager',
      bio: 'Shareholder and director in Formula 1',
    },
  ];

  
    const guestSpeakerAtEvent = document.getElementById('image-display');
    for (let i = 0; i < guestSpeakers.length; i++){
      let speakers = `<div id="card${i}" class="speaker-1">
    <div class="speaker-image">
        <img src=${guestSpeakers[i].image} alt="speaker-1">
    </div>
    <div>
        <h2>${guestSpeakers[i].name}</h2>
        <h3>${guestSpeakers[i].role}</h3>
        <h4>${guestSpeakers[i].bio}</h4>
    </div>
</div>`;
guestSpeakerAtEvent.innerHTML+=speakers;
console.log(speakers);
    }

    const card2 = document.getElementById('card2');
    const buttonmore = document.getElementById('more');
    buttonmore.addEventListener('click', () => {
      if (card2.style.display==='flex'){
        card2.style.display = 'none'; 
      }
      else {card2.style.display = 'flex'
      }
      if (card3.style.display==='flex'){
        card3.style.display = 'none'; 
      }
      else {card3.style.display = 'flex'
      }
      if (card4.style.display==='flex'){
        card4.style.display = 'none'; 
      }
      else {card4.style.display = 'flex'
      }
      if (card5.style.display==='flex'){
        card5.style.display = 'none'; 
      }
      else {card5.style.display = 'flex'
      }
    })

  const hamburger = document.querySelector('.menu');
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

  const backToMainPage = document.querySelector('.menuPopUp');
  close(backToMainPage, '.mobile-menu');
  backToMainPage.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
  });
};

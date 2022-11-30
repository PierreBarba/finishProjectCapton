
window.onload = () => {

const guestSpeakers = [
    {
        image: './assets/images/toto.png',
        name: 'Torger Christian Wolff',
        role: 'Formula 1 manager',
        bio: 'Shareholder and director in Formula 1'
    },
    {
        image: './assets/images/checop.png',
        name: 'Sergio Michel Pérez Mendoza',
        role: 'f1 driver',
        bio: 'Redbull Racing Driver'
    },
    {
        image: './assets/images/lewish.png',
        name: 'Lewis Carl Davidson Larbalestier Hamilton',
        role: 'f1 driver',
        bio: 'Mercedes AMG Petronas Motorsport'
    },
    {
        image: './assets/images/christianh.png',
        name: 'Christian Horner',
        role: 'Formula 1 manager',
        bio: 'Shareholder and director in Formula 1'
    },
    {
        image: './assets/images/zacb.png',
        name: 'Zak Brown',
        role: 'Formula 1 manager',
        bio: 'Shareholder and director in Formula 1'
    },
    {
        image: './assets/images/binnoto.png',
        name: 'Mattia Binotto',
        role: 'Formula 1 manager',
        bio: 'Shareholder and director in Formula 1'
    },
];

function displaySpeakerInfo(speakerInfo) {
    const speakers = 
    `<div class="speaker-1">
    <div class="speaker-image">
        <img src=${speakerInfo.image} alt="speaker-1">
    </div>
    <div>
        <h2>${speakerInfo.name}</h2>
        <h3>${speakerInfo.role}</h3>
        <h4>${speakerInfo.bio}</h4>
    </div>
</div>`;
return speakers;
}
const guestSpeakerAtEvent = document.querySelector('.image-display-1');
guestSpeakers.forEach((card) => {
    guestSpeakerAtEvent.innerHTML += displaySpeakerInfo(card);
});

const hamburger = document.querySelector('.menu');
const closeBtn = document.querySelector('.closeBtn');

hamburger.addEventListener('click', () => {
    console.log("clicked")
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'block';
  });

  close(closeBtn,'.mobile-menu');
  closeBtn.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
    close(menu);
  });

  const backToMainPage = document.querySelector('.menuPopUp');
  close(backToMainPage,'.mobile-menu');
  backToMainPage.addEventListener('click', () => {
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
  });

   function close(menu, toBeClose){
     menu.addEventListener('click' , () =>{
        const value = document.querySelector(toBeClose);
        value.style.display = 'none';
     });
  };
};

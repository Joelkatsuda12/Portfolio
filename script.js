const artworkTab = document.getElementById('artwork_tab');
const aboutTab = document.getElementById('about_tab');
const inspirationTab = document.getElementById('inspirations_tab');
const photosTab = document.getElementById('about_tab');
const complimentsTab = document.getElementById('compliments_tab');

const alert = document.getElementById('alert');

complimentsTab.addEventListener('click', event =>{
  alert.style.display = 'flex';
});

const comp = 
[", i like your shirt!", 
", you deserve to be loved!", 
", you matter to me!", 
", the world is happy to have you!", 
"!!!!!",
", I appreciate you visiting my site!",
", that red looks good on you, or blue, or whatever color you're wearing! (I can't Tell)",
", I hope your world treats you well today",
", thank you for being interested in my work!",
", the world needs your creativity!",
", thank you for taking the time to visit my site!",
", I am lucky that you visited my site!",
", I wish you a Good Day! Good night?.. Good morning?.. good afternoon??",
", did you know there's over 8 billion people on earth? and no one like you!",
", you will get through whatever problem is in your life!",
", I like that name!",
", if you need anymore affirmation, just come back to this page!",
", Keep going in life! <3",
", hope is never too late for you!",
", keep your head up!"

// enter text here //
];

function generator() {
    
    let x = "hello "; 
    let y = document.getElementById('name').value; 
    
  const z = comp[Math.floor(Math.random() * comp.length)];
  document.querySelector(".value").textContent = x + y + z;
};

const button = document.getElementById('generate');


//button functions//

function touch(){
  
  button.style.borderBottom = '2px solid white'
  button.style. borderRight = '2px solid white'
  button.style.borderTop = '2px solid gray'
  button.style.borderLeft = '2px solid gray'

};

function touchEnd(){
  button.style.borderTop = '2px solid white'
  button.style. borderLeft = '2px solid white'
  button.style.borderBottom = '2px solid gray'
  button.style.borderRight = '2px solid gray'
};



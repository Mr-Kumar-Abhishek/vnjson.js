


vnjs.on('main-menu', function(){

this.parse({ "scene": "background"})


document
  .getElementById('start-game')
  .addEventListener('click', function(e){
    e.preventDefault();
    vnjs.parse({screen: 'game-action'})
  });

document
  .getElementById('about-action')
  .addEventListener('click', e=>vnjs.parse({screen:'about'}))

document
  .getElementById('settings-action')
  .addEventListener('click', e=>vnjs.parse({screen:'settings'}))
vnjs.on('settings', e=>{
  vnjs.parse({scene: 'settings'})
})

document
  .getElementById('memory-card-action')
  .addEventListener('click', e=>vnjs.parse({screen:'memory-card'}))

  
})


/*
vnjs.on('settings', function(data){
  this.parse({ "scene": "settings"})
})*/
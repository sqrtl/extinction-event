// Strike thorugh the OL
const strikes = document.querySelectorAll('ol');

for (let i = 0; i < strikes.length; i++){
    strikes[i].addEventListener("click", function(quack){
        quack.target.style.textDecoration = "line-through"
    })
}

// Faders for the UL
const faders = document.querySelectorAll('ul');

for (let i = 0; i < faders.length; i++){
    faders[i].addEventListener('click', function(ezio){
        ezio.target.style.opacity = 0;
    })
}

// Collapsing Dino Photos
const dinoPhotos = document.querySelectorAll('#row');

for (let i = 0; i < dinoPhotos.length; i++ ){
    dinoPhotos[i].addEventListener('click',function(q){
        q.target.style.height = 0;
    })
}

// Destroy everything. What to do with Burn
const burningMan = document.querySelector('#destroy-all');
const burnin = document.querySelector('#burn h3');

burningMan.addEventListener('click',function(){
     // strikethrough
     for (let i = 0; i < strikes.length; i++){
        strikes[i].style.textDecoration = "line-through";
    }

    // faders
    for (let i = 0; i < faders.length; i++){
        faders[i].style.opacity = 0;
    }

    // dino photos
    for (let i = 0; i < dinoPhotos.length; i++ ){
        dinoPhotos[i].style.height = 0;
    }
    burnin.style.color = 'orange';
}); 
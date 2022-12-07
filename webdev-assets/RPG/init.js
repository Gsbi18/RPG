let current = document.querySelector('#currentCharacter')

let player =new Character({id:10, size:130, ctx:current});
player.startIdle();

function turnCharacter(step){
    player.switchCharacter(step)
}
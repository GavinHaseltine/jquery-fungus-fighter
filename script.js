$(document).ready(onReady);

//  let attacksJs = [
//     {
//      name: "arcaneScepter",
//      APCost: 12,
//      HPDamage: 14
//     }, 
//     {
//     name: "entangle",
//     APCost: 23,
//     HPDamage: 9
//     }, 
//     {
//     name: "dragonBlade",
//     APCost: 38,
//     HPDamage: 47
//     }, 
//     {
//     name: "starFire",
//     APCost: 33,
//     HPDamage: 25
//     }, 
//  ];

 let fungusHP = 100;
 let playerAP = 100;

// $(".ap-text").text(playerAP);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    
    $('.arcane-scepter').on('click', handleArcane);
    $('.entangle').on('click', handleEntangle);
    $('.dragon-blade').on('click', handleDragonBlade);
    $('.star-fire').on('click', handleStarFire);
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function handleArcane(event){
    event.preventDefault();
    console.log('Arcane attack clicked');

    fungusHP = fungusHP - 14;
    playerAP = playerAP - 12;

    $(".ap-text").text(playerAP);
    $(".hp-text").text(fungusHP);
    $('#hp-meter').val(fungusHP);
    $('#ap-meter').val(playerAP);
    
    checkIf();
    checkFungus()
}
function handleEntangle(event){
    event.preventDefault();
    console.log('Entangle attack clicked');

    fungusHP = fungusHP - 9;
    playerAP = playerAP - 23;

    $(".ap-text").text(playerAP);
    $(".hp-text").text(fungusHP);
    $('#hp-meter').val(fungusHP);
    $('#ap-meter').val(playerAP);
    
    checkIf();
    checkFungus()
}
function handleDragonBlade(event){
    event.preventDefault();
    console.log('DragonBlade attack clicked');

    fungusHP = fungusHP - 47;
    playerAP = playerAP - 38;

    $(".ap-text").text(playerAP);
    $(".hp-text").text(fungusHP);
    $('#hp-meter').val(fungusHP);
    $('#ap-meter').val(playerAP);

    checkIf();
    checkFungus()
}
function handleStarFire(event){
    event.preventDefault();
    console.log('StarFire attack clicked');

    fungusHP = fungusHP - 25;
    playerAP = playerAP - 33;

    $(".ap-text").text(playerAP);
    $(".hp-text").text(fungusHP);
    $('#hp-meter').val(fungusHP);
    $('#ap-meter').val(playerAP);

    checkIf();
    checkFungus()
}

function checkIf(){
if(playerAP < 0){
    playerAP = 0;
    $(".ap-text").text(playerAP);
    $(".hp-text").text(fungusHP);
    $('#hp-meter').val(fungusHP);
    $('#ap-meter').val(playerAP);

};
};

function checkFungus(){
    if(fungusHP < 0){
        fungusHP = 0;
        $(".freaky-fungus walk").replaceWith("freaky-fungus dead")

    $(".ap-text").text(playerAP);
    $(".hp-text").text(fungusHP);
    $('#hp-meter').val(fungusHP);
    $('#ap-meter').val(playerAP);
    }
}
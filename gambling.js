const spinner = document.getElementById("spinner");
const i = document.getElementById("i");
const ii = document.getElementById("ii");
const iii = document.getElementById("iii");
const up = document.getElementById("up");
const down = document.getElementById("down");
const betting = document.getElementById("betting");
const networth = document.getElementById("networth");

let bet = 10;
let net = 10;
let spins = new Array();
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
let temp;

function spin(){return Math.floor(Math.random() * (4 - 1) ) + 1;}
function updateBetting(){
    if (bet > net){bet = net;}
    if (bet < 0){bet = 0;}
    betting.textContent = `$${bet}`;
}
function updateNetworth(){
    networth.textContent = `$${net}`;
}

spinner.onclick = function(){ // SPIN
    net -= bet;
    spins = [spin(), spin(), spin()];
    i.textContent = spins[0];
    ii.textContent = spins[1];
    iii.textContent = spins[2];
    temp = findDuplicates(spins).length;
    if (temp == 1){
        net += 2 * bet;
    }
    else if (temp == 2){
        net += 3 * bet;
    }
    updateNetworth();
    updateBetting();
}

up.onclick = function(){
    bet++;
    updateBetting();
}

down.onclick = function(){
    bet--;
    updateBetting();
}

updateBetting();
updateNetworth();
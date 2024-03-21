

// Define initial variables
let totalSpaceDust = 0;
let totalComets = 0;
let spaceDust = 10000;
let clickPower = 1;
let autoPower = 1; // Set auto generation rate to 20 per second
let autoPowerComets = 0;
let comets = 0;
let clickPowerUpgradeCost = 10;
let autoGenerateUpgradeCost = 20;
let autoGenerateUpgradeCostComets= 500;
let autoGenerateCometsEnabled = true;
let xp = 0;
let level = 1;
let perkPoints = 20;
let cometsUnlocked = false;
let meteorsUnlocked = false;
let asteroidsUnlocked = false;
let upgradeCelestialObject = [
    {
        name: "Comet",
        cost: 10,

    },
    {
        name: "Meteor",
        cost: 20,

    },
    {
        name: "Asteroid",
        cost: 30,

    },
    {
        name: "Moon",
        cost: 50,

    }
]

function showUpgradeCelestialObject() {
    let cob = document.getElementById("celestialObjectsBranch")
    upgradeCelestialObject.forEach(upgrade => {
        cob.innerHTML += `<div class="perk" onclick="unlockComets()" data-perk="${upgrade.name}">${upgrade.name} - cost : ${upgrade.cost}</div>`
    });
}
showUpgradeCelestialObject();

// Function to update score
function updateSpaceDust() {
    document.getElementById("dustQuantity").innerText = "Space Dust: " + Math.round(spaceDust);
}

function updateComets(){
    document.getElementById("cometsQuantity").innerText = "Comets: " + Math.round(comets);
}

function updatePerkPoints() {
    console.log(perkPoints);
    document.getElementById("perkPoints").innerText = "Perk Points: " + Math.round(perkPoints);
    console.log(perkPoints);
}
// Function to update XP progress bar
function updateXPBar() {
    let maxXp = 5 * Math.pow(3, level - 1); // Max XP for the current level
    let xpPercentage = (xp / maxXp) * 100;
    if (xpPercentage > 100) xpPercentage = 100; // Cap at 100%
    document.getElementById("xpFill").style.width = xpPercentage + "%";
    // document.getElementById("xpDetails").innerText = "XP: " + xp + " / " + maxXp;
}

// Function to update current level
function updateCurrentLevel() {
    document.getElementById("currentLevel").innerText = "Level: " + level;
}

// Function to handle click events
function handleClick() {
    spaceDust += clickPower;
    totalSpaceDust += clickPower;
    updateSpaceDust();
    
    // Increment XP by a fixed amount for each click
    xp += 1;
    
    updateXPBar();
    checkLevelUp();
}

// Function to handle auto-generating space dust
function autoGenerate() {
    spaceDust += autoPower;
    totalSpaceDust += autoPower;
    
    // Increment XP based on auto-generated space dust
    xp += autoPower / 10;
    
    updateSpaceDust();

}

function spaceDustConsumption() {
    let cc = document.getElementById("spaceDustConsumption");
    cc.innerText = "Space Dust Consumption: " + Math.round(autoPowerComets*10) + " per second";
}

function autoGenerateComets() {
    if(spaceDust<autoPowerComets*10) {
        autoGenerateCometsEnabled = false;
        document.getElementById("disableCometsAutoGeneration").innerText = "Enable Comets Auto Generation";
        document.getElementById("disableCometsAutoGeneration").classList.add("buttonEnable");
        document.getElementById("disableCometsAutoGeneration").classList.remove("buttonDisable");
    }
    if(autoGenerateCometsEnabled){
        comets += autoPowerComets;
    totalComets += autoPowerComets;

    xp += autoPowerComets / 5;
    spaceDust-= autoPowerComets*10;
    }

    updateComets();
}

function disableCometsAutoGeneration() {

    autoGenerateCometsEnabled = !autoGenerateCometsEnabled;
    if(autoGenerateCometsEnabled){
        document.getElementById("disableCometsAutoGeneration").innerText = "Disable Comets Auto Generation";
        document.getElementById("disableCometsAutoGeneration").classList.add("buttonDisable");
        document.getElementById("disableCometsAutoGeneration").classList.remove("buttonEnable");
    }
    if(!autoGenerateCometsEnabled){
        document.getElementById("disableCometsAutoGeneration").innerText = "Enable Comets Auto Generation";
        document.getElementById("disableCometsAutoGeneration").classList.add("buttonEnable");
        document.getElementById("disableCometsAutoGeneration").classList.remove("buttonDisable");
    }
}

// Function to upgrade click power
function upgradeClickPower() {
    if (spaceDust >= clickPowerUpgradeCost) {
        spaceDust -= clickPowerUpgradeCost;
        clickPower++;
        clickPowerUpgradeCost = Math.round(clickPowerUpgradeCost * 1.1); // Increase cost for next upgrade
        document.getElementById("clickPowerUpgrade").innerText = "Upgrade Click Power (Cost: " + clickPowerUpgradeCost + " Space Dust)";
        document.getElementById("clickPowerDisplay").innerText = clickPower;
        updateSpaceDust();
    }
}



// Function to upgrade auto generation
function upgradeAutoGenerate() {
    if (spaceDust >= autoGenerateUpgradeCost) {
        spaceDust -= autoGenerateUpgradeCost;
        autoPower++;
        autoGenerateUpgradeCost = Math.round(autoGenerateUpgradeCost * 1.1); // Increase cost for next upgrade
        document.getElementById("autoGenerateUpgrade").innerText = "Upgrade Auto Generation (Cost: " + autoGenerateUpgradeCost + " Space Dust)";
        document.getElementById("autoGenerateDisplay").innerText = autoPower + " per second";
        updateSpaceDust();
    }
}

function upgradeAutoGenerateComets() {
    if (spaceDust >= autoGenerateUpgradeCostComets) {
        spaceDust -= autoGenerateUpgradeCostComets;
        autoPowerComets++;
        autoGenerateUpgradeCostComets = Math.round(autoGenerateUpgradeCostComets * 1.1); // Increase cost for next upgrade
        document.getElementById("autoGenerateUpgradeComets").innerText = "Upgrade Auto Generation (Cost: " + autoGenerateUpgradeCostComets + " Space Dust)";
        document.getElementById("autoGenerateDisplayComets").innerText ="Current Auto Generation : "+ autoPowerComets + " per second";
        updateComets();
    }
}

// Function to check for level up
function checkLevelUp() {
    let maxXp = 5 * Math.pow(3, level - 1); // Max XP for the current level
    if (xp >= maxXp) {
        level++;
        xp = 0;
        perkPoints++;
        alert("Congratulations! You've reached level " + level + ". You gained 1 perk point.");
        // You can add more logic here to handle perk allocation in a perk tree
        updateCurrentLevel();
        updatePerkPoints();
    }
    updateXPBar();
}



// Function to unlock comets perk
function unlockComets() {
    if (perkPoints >= 10 && !cometsUnlocked) {
        cometsUnlocked = true;
        perkPoints -= 10;
        document.getElementById("perkPoints").innerText = "Perk Points: " + perkPoints;
        document.getElementById("cometsPerk").classList.add("unlocked");
        alert("You've unlocked Comets!");
        // Add functionality to space elements for comets
        // For now, let's just display a message
        alert("Comets effect applied!");
        document.getElementById("cometsClicker").classList.remove("hide");
    } else {
        alert("You don't have enough perk points to unlock Comets or it's already unlocked.");
    }
}

// Function to unlock meteors perk
function unlockMeteors() {
    if (perkPoints >= 20 && !meteorsUnlocked) {
        meteorsUnlocked = true;
        perkPoints -= 20;
        document.getElementById("perkPoints").innerText = "Perk Points: " + perkPoints;
        document.getElementById("meteorsPerk").classList.add("unlocked");
        alert("You've unlocked Meteors!");
        // Add functionality to space elements for meteors
        // For now, let's just display a message
        alert("Meteors effect applied!");
    } else {
        alert("You don't have enough perk points to unlock Meteors or it's already unlocked.");
    }
}

// Function to unlock asteroids perk
function unlockAsteroids() {
    if (perkPoints >= 30 && !asteroidsUnlocked) {
        asteroidsUnlocked = true;
        perkPoints -= 30;
        document.getElementById("perkPoints").innerText = "Perk Points: " + perkPoints;
        document.getElementById("asteroidsPerk").classList.add("unlocked");
        alert("You've unlocked Asteroids!");
        // Add functionality to space elements for asteroids
        // For now, let's just display a message
        alert("Asteroids effect applied!");
    } else {
        alert("You don't have enough perk points to unlock Asteroids or it's already unlocked.");
    }
}

// Event listeners for unlocking perks
document.getElementById("cometsPerk").addEventListener("click", unlockComets);
document.getElementById("meteorsPerk").addEventListener("click", unlockMeteors);
document.getElementById("asteroidsPerk").addEventListener("click", unlockAsteroids);

// Function to open specific page
function openPage(pageName) {
    let containers = document.getElementsByClassName("container");
    for (let container of containers) {
        container.style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
}

// Set up click event listeners
document.getElementById("clickButton").addEventListener("click", handleClick);
document.getElementById("clickPowerUpgrade").addEventListener("click", upgradeClickPower);
document.getElementById("autoGenerateUpgrade").addEventListener("click", upgradeAutoGenerate);
document.getElementById("autoGenerateUpgradeComets").addEventListener("click", upgradeAutoGenerateComets);

function tick() {
    autoGenerate();
    autoGenerateComets();
    checkLevelUp();
    updateXPBar();
    spaceDustConsumption();
}

// Set up auto-generation
setInterval(tick, 1000); // Generates every second

// Initially open the first page
openPage("spaceElements");

// Add event listener to perks
// document.querySelectorAll('.perk').forEach(item => {
//     item.addEventListener('click', event => {
//         selectPerk(item.getAttribute('data-perk'));
//     });
// });


//////////////////////////////////////////////////////////

// Define initial variables
let totalSpaceDust = 0;
let totalComet = 0;
let totalAsteroid = 0;

let spaceDust = 10000;
let comet = 0;
let asteroid = 0;

let clickPower = 1;
let autoGenerateSpaceDustRate= 1; // Set auto generation rate to 20 per second
let autoGenerateCometRate = 0;
let autoGenerateAsteroidRate = 0;

let clickPowerUpgradeCost = 10;
let autoGenerateUpgradeCostSpaceDust = 20;
let autoGenerateUpgradeCostComet= 500;
let autoGenerateUpgradeCostAsteroid = 500;

let autoGenerateCometEnabled = true;
let autoGenerateAsteroidEnabled = true;

let xp = 0;
let level = 1;
let perkPoints = 200;

let spaceDustSkillPoint = 0;
let celestialObjectSkillPoint = 0;


let xpSpaceDust = 0;
let levelSpaceDust = 1;

let xpCelestialObjects = 0;
let levelCelestialObjects = 1;

let cometUnlocked = false;
let asteroidsUnlocked = false;

let spaceDustSkill = [
    {
        name: "Reduce AutoGenerateRate Upgrade Cost 0/5",
        description: "This button adds 0 out of 5 items",
        skillPointCost: 1,
        innerLevel: 0,
        maxInnerLevel: 5,
        tier: "C",
    },
    {
        name: "test",
        description: "This button adds 0 out of 5 items",
        skillPointCost: 1,
        maxInnerLevel:5,
        tier: "C",
    },
    {
        name: "tedgdfgdgffst",
        description: "This button adds 0 out of 5 items",
        skillPointCost: 1,
        maxInnerLevel:5,
        tier: "C",
    },
    {
        name: "test",
        description: "This button adds 0 out of 5 items",
        skillPointCost: 1,
        maxInnerLevel:5,
        tier: "B",
    }
]

let upgradeCelestialObject = [
    {
        name: "Comet",
        cost: 10,

    },
    {
        name: "Asteroid",
        cost: 30,

    }
]
let celestialObjectSkill = [
    {
        name: "Reduce AutoGenerateRate Upgrade Cost 0/5",
        description: "This button adds 0 out of 5 items",
        skillPointCost: 1,
        innerLevel: 0,
        maxInnerLevel: 5,
        tier: "C",
    },
    {
        name: "",
        description: "This button adds 0 out of 5 items",
        skillPointCost: 1,
    }
    // <div class="tooltip">
        //      <button class="button" title="This button adds 0 out of 5 items">Add 0/5</button>
        //      <span class="tooltiptext">This button adds 0 out of 5 items</span>
        // </div>
]
let solarSystemSkill = [
    {
        name: "solar system",
        description: "This button adds 0 out of 5 items",
        skillPointCost: 1,
        innerLevel: 0,
        maxInnerLevel: 5,
        tier: "C",
    }
]

function showSpaceDustColumn() {
    let ssd = document.getElementById("spaceDustSkill");
    ssd.classList.remove("hide");
    document.getElementById("celestialObjectSkill").classList.add("hide");
    document.getElementById("solarSystemSkill").classList.add("hide");
}

function showSpaceDustSkill() {
    let sdsTableBody = document.getElementById("spaceDustSkillTableBody");
    sdsTableBody.innerHTML = ""; // Clear previous content before updating
    spaceDustSkill.forEach(skill => {
        // Create a new row for each skill
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        console.log(skill)
        
        console.log(row)
        // Construct HTML for the skill button and tooltip
        cell.innerHTML = `
            <div class="skillInformation">
                <button class="button btn btn-secondary" data-toggle="tooltip">${skill.name}</button>
                <span class="hover-text">${skill.description}</span>
            </div>`;
            
        row.appendChild(cell);
        console.log(cell)
        // Append the row to the table body
        sdsTableBody.appendChild(row);
    });
}

showSpaceDustSkill();


/// function showing perk branch
function showUpgradeCelestialObject() {
    let cob = document.getElementById("celestialObjectBranch")
    upgradeCelestialObject.forEach(upgrade => {
        cob.innerHTML += `<div class="perk" onclick="unlock${upgrade.name}()" data-perk="${upgrade.name}">${upgrade.name} - cost : ${upgrade.cost}</div>`
    });
}
showUpgradeCelestialObject();

function showCelestialObjectColumn() {
    let ssd = document.getElementById("celestialObjectSkill");
    ssd.classList.remove("hide");
    document.getElementById("spaceDustSkill").classList.add("hide");
    document.getElementById("solarSystemSkill").classList.add("hide");
}

function showCelestialObjectSkill() {
    let sdsTableBody = document.getElementById("celestialObjectSkillTableBody");
    sdsTableBody.innerHTML = ""; // Clear previous content before updating
    spaceDustSkill.forEach(skill => {
        // Create a new row for each skill
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        // Construct HTML for the skill button and tooltip
        cell.innerHTML = `
            <div class="">
                <button class="button" style="font-size: 10px">${skill.name}</button>
                <span class="">${skill.description}</span>
            </div>`;
        row.appendChild(cell);
        // Append the row to the table body
        sdsTableBody.appendChild(row);
    });
}
/// reliquat pour verifier
// function showCelestialObjectSkill() {
//     let cob = document.getElementById("celestialObjectSkill")
//     celestialObjectSkill.forEach(skill => {
//         cob.innerHTML += `<div class="skill" onclick="unlock${skill.name}()" data-skill="${skill.name}">${skill.name}</div>`
//     });
// }
showCelestialObjectSkill();

function showSolarSystemColumn() {
    let ssd = document.getElementById("solarSystemSkill");
    ssd.classList.remove("hide");
    document.getElementById("celestialObjectSkill").classList.add("hide");
    document.getElementById("spaceDustSkill").classList.add("hide");
}

function showSolarSystemSkill() {
    let sdsTableBody = document.getElementById("solarSystemSkillTableBody");
    sdsTableBody.innerHTML = ""; // Clear previous content before updating
    solarSystemSkill.forEach(skill => {
        // Create a new row for each skill
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        // Construct HTML for the skill button and tooltip
        cell.innerHTML = `
            <div class="">
                <button class="button" style="font-size: 10px">${skill.name}</button>
                <span class="">${skill.description}</span>
            </div>`;
        row.appendChild(cell);
        // Append the row to the table body
        sdsTableBody.appendChild(row);
    });
}
showSolarSystemSkill();

// Function to update score
function updateSpaceDust() {
    document.getElementById("dustQuantity").innerText = "Space Dust: " + Math.round(spaceDust);
}

function updateComet(){
    document.getElementById("cometQuantity").innerText = "Comet: " + Math.round(comet);
}

function updateAsteroid(){
    document.getElementById("asteroidQuantity").innerText = "Asteroid: " + Math.round(asteroid);
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

function updateSpaceDustXPBar() {
    let maxXp = 5 * Math.pow(3, levelSpaceDust - 1); // Max XP for the current level
    let xpPercentage = (xpSpaceDust / maxXp) * 100;
    if (xpPercentage > 100) xpPercentage = 100; // Cap at 100%
    document.getElementById("xpFillSpaceDust").style.width = xpPercentage + "%";
    // document.getElementById("xpDetails").innerText = "XP: " + xp + " / " + maxXp;
}

function updateSpaceDustCurrentlevel() {
    document.getElementById("currentLevelSpaceDust").innerText = "Level: " + levelSpaceDust;
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
function autoGenerateSpaceDust() {
    spaceDust += autoGenerateSpaceDustRate;
    totalSpaceDust += autoGenerateSpaceDustRate;
    
    // Increment XP based on auto-generated space dust
    xp += autoGenerateSpaceDustRate / 10;
    
    updateSpaceDust();
}

function spaceDustConsumption() {
    let cc = document.getElementById("spaceDustConsumption");
    cc.innerText = "Space Dust Consumption: " + Math.round(autoGenerateCometRate*10) + " per second";
}

function autoGenerateComet() {
    if(spaceDust<autoGenerateCometRate*10) {
        autoGenerateCometEnabled = false;
        document.getElementById("disableCometAutoGeneration").innerText = "Enable Comet Auto Generation";
        document.getElementById("disableCometAutoGeneration").classList.add("buttonEnable");
        document.getElementById("disableCometAutoGeneration").classList.remove("buttonDisable");
    }
    if(autoGenerateCometEnabled){
        comet += autoGenerateCometRate;
    totalComet += autoGenerateCometRate;

    xp += autoGenerateCometRate / 5;
    spaceDust-= autoGenerateCometRate*10;
    }

    updateComet();
}

function cometConsumption () {
    let coc = document.getElementById("cometConsumption");
    coc.innerText = "Comet Consumption: " + Math.round(autoGenerateAsteroidRate*10) + " per second";
}

function autoGenerateAsteroid() {
    if(comet<autoGenerateAsteroidRate*10) {
        autoGenerateAsteroidEnabled = false;
        document.getElementById("disableAsteroidAutoGeneration").innerText = "Enable Asteroid Auto Generation";
        document.getElementById("disableAsteroidAutoGeneration").classList.add("buttonEnable");
        document.getElementById("disableAsteroidAutoGeneration").classList.remove("buttonDisable");
    }
    if(autoGenerateAsteroidEnabled){
        asteroid += autoGenerateAsteroidRate;
    totalAsteroid += autoGenerateAsteroidRate;
    }
}

function disableCometAutoGeneration() {
    autoGenerateCometEnabled = !autoGenerateCometEnabled;
    if(autoGenerateCometEnabled){
        document.getElementById("disableCometAutoGeneration").innerText = "Disable Comet Auto Generation";
        document.getElementById("disableCometAutoGeneration").classList.add("buttonDisable");
        document.getElementById("disableCometAutoGeneration").classList.remove("buttonEnable");
    }
    if(!autoGenerateCometEnabled){
        document.getElementById("disableCometAutoGeneration").innerText = "Enable Comet Auto Generation";
        document.getElementById("disableCometAutoGeneration").classList.add("buttonEnable");
        document.getElementById("disableCometAutoGeneration").classList.remove("buttonDisable");
    }
}

function disableAsteroidAutoGeneration() {
    autoGenerateAsteroidEnabled = !autoGenerateAsteroidEnabled;
    if(autoGenerateAsteroidEnabled){
        document.getElementById("disableAsteroidAutoGeneration").innerText = "Disable Asteroid Auto Generation";
        document.getElementById("disableAsteroidAutoGeneration").classList.add("buttonDisable");
        document.getElementById("disableAsteroidAutoGeneration").classList.remove("buttonEnable");
    }
    if(!autoGenerateAsteroidEnabled){
        document.getElementById("disableAsteroidAutoGeneration").innerText = "Enable Asteroid Auto Generation";
        document.getElementById("disableAsteroidAutoGeneration").classList.add("buttonEnable");
        document.getElementById("disableAsteroidAutoGeneration").classList.remove("buttonDisable");
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
function upgradeAutoGenerateSpaceDust() {
    if (spaceDust >= autoGenerateUpgradeCostSpaceDust) {
        spaceDust -= autoGenerateUpgradeCostSpaceDust;
        autoGenerateSpaceDustRate++;
        autoGenerateUpgradeCostSpaceDust = Math.round(autoGenerateUpgradeCostSpaceDust * 1.1); // Increase cost for next upgrade
        document.getElementById("autoGenerateUpgrade").innerText = "Upgrade Auto Generation (Cost: " + autoGenerateUpgradeCostSpaceDust + " Space Dust)";
        document.getElementById("autoGenerateDisplay").innerText = autoGenerateSpaceDustRate + " per second";
        updateSpaceDust();
    }
}

function upgradeAutoGenerateComet() {
    if (spaceDust >= autoGenerateUpgradeCostComet) {
        spaceDust -= autoGenerateUpgradeCostComet;
        autoGenerateCometRate++;
        autoGenerateUpgradeCostComet = Math.round(autoGenerateUpgradeCostComet * 1.1); // Increase cost for next upgrade
        document.getElementById("autoGenerateUpgradeComet").innerText = "Upgrade Auto Generation (Cost: " + autoGenerateUpgradeCostComet + " Space Dust)";
        document.getElementById("autoGenerateDisplayComet").innerText ="Current Auto Generation : "+ autoGenerateCometRate + " per second";
        updateComet();
    }
}

function upgradeAutoGenerateAsteroid() {
    if (spaceDust >= autoGenerateUpgradeCostAsteroid) {
        spaceDust -= autoGenerateUpgradeCostAsteroid;
        autoGenerateAsteroidRate++;
        autoGenerateUpgradeCostAsteroid = Math.round(autoGenerateUpgradeCostAsteroid * 1.1); // Increase cost for next upgrade
        document.getElementById("autoGenerateUpgradeAsteroid").innerText = "Upgrade Auto Generation (Cost: " + autoGenerateUpgradeCostAsteroid + " Space Dust)";
        document.getElementById("autoGenerateDisplayAsteroid").innerText ="Current Auto Generation : "+ autoGenerateAsteroidRate + " per second";
        updateAsteroid();
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



// Function to unlock Comet perk
function unlockComet() {
    if (perkPoints >= 10 && !cometUnlocked) {
        cometUnlocked = true;
        perkPoints -= 10;
        document.getElementById("perkPoints").innerText = "Perk Points: " + perkPoints;
        alert("You've unlocked Comet!");
        // Add functionality to space elements for Comet
        // For now, let's just display a message
        alert("Comet effect applied!");
        document.getElementById("cometGenerator").classList.remove("hide");
    } else {
        alert("You don't have enough perk points to unlock Comet or it's already unlocked.");
    }
}

// Function to unlock asteroids perk
function unlockAsteroid() {
    if (perkPoints >= 30 && !asteroidsUnlocked) {
        asteroidsUnlocked = true;
        perkPoints -= 30;
        document.getElementById("perkPoints").innerText = "Perk Points: " + perkPoints;
        alert("You've unlocked Asteroids!");
        // Add functionality to space elements for asteroids
        // For now, let's just display a message
        alert("Asteroids effect applied!");
        document.getElementById("asteroidGenerator").classList.remove("hide");
    } else {
        alert("You don't have enough perk points to unlock Asteroids or it's already unlocked.");
    }
}

// Event listeners for unlocking perks


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
document.getElementById("autoGenerateUpgrade").addEventListener("click", upgradeAutoGenerateSpaceDust);
document.getElementById("autoGenerateUpgradeComet").addEventListener("click", upgradeAutoGenerateComet);

function tick() {
    autoGenerateSpaceDust();
    autoGenerateComet();
    autoGenerateAsteroid();
    checkLevelUp();
    updateXPBar();
    spaceDustConsumption();
    cometConsumption();
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

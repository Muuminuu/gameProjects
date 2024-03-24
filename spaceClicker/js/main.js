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

let spaceDustSkillPoint = 10;
let celestialObjectSkillPoint = 0;


let xpSpaceDust = 0;
let spaceDustLevel = 1;

let xpCelestialObjects = 0;
let levelCelestialObjects = 1;

let cometUnlocked = false;
let asteroidsUnlocked = false;

///// idée à creuse -> passer par le tier pour l'affichage / refaire function associée a laffichage tableau
let spaceDustSkillByTier = [
    {
        skillTierC: [
            {
                name: "Reduce AutoGenerateRate Upgrade Cost 0/5",
                description: "Reduce upgrade cost by 5%",
                innerLevel: 0,
                maxInnerLevel: 5,
                skillPointRequired: 0,
            },
            {
                name: "Add +1 to DustSpace auto Rate",
                description: "This button adds 0 out of 5 items",
                innerLevel: 0,
                maxInnerLevel: 5,
                skillPointRequired: 0,
            }
        ],
        skillTierB: [
            {
                name: "Unlock New Space Element: Comet",
                description: "Unlock Comet",
                innerLevel: 0,
                maxInnerLevel: 1,
                skillPointRequired: 0,
                spaceDustLevelRequired: 5
                
            }
        ],
        skillTierA: [
            {
                name: "Reduce AutoGenerateRate Upgrade Cost 0/5",
                skillPointRequired: 0,
                description: "This button adds 0 out of 5 items" ,
                innerLevel: 0,
                maxInnerLevel: 5,
                
            }
        ],
        skillTierS: [
            {
                name: "Unlock New Space Element: Astroïds",
                description: "Unlock Asteroïds",
                innerLevel: 0,
                maxInnerLevel: 1,
                skillPointRequired: 0,
                spaceDustLevelRequired: 15
            }
        ]
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

/////// logic for skill tree
function showSpaceDustSkillByTier() {
    let sdsTableBody = document.getElementById("spaceDustSkillTableBody");
    sdsTableBody.innerHTML = ""; // Clear previous content before updating
    
    spaceDustSkillByTier.forEach(tierData => {
        Object.keys(tierData).forEach(tierKey => {
            let tierSkills = tierData[tierKey];
            let row = document.createElement("tr");

            // Tier Name Row
            let tierNameCell = document.createElement("td");
            tierNameCell.colSpan = getSkillsPerRow(tierKey);
            tierNameCell.textContent = tierKey;
            tierNameCell.style.textAlign = "center"; // Center align tier name
            tierNameCell.style.verticalAlign = "middle"; // Center align vertically
            row.appendChild(tierNameCell);
            sdsTableBody.appendChild(row);

            // Skills Row
            row = document.createElement("tr");
            let skillsPerRow = getSkillsPerRow(tierKey);
            tierSkills.forEach(skill => {
                let cell = document.createElement("td");
                cell.appendChild(createSkillElement(skill));
                row.appendChild(cell);
            });
            sdsTableBody.appendChild(row);
        });
    });
}

function getSkillsPerRow(tierKey) {
    // Define the number of skills per row for each tier
    // You can adjust this function based on your specific requirements
    switch (tierKey) {
        case 'skillTierC':
            return 2; // Two skills per row for skillTierC
        case 'skillTierB':
            return 3; // Three skills per row for skillTierB
        default:
            return 1; // Default to one skill per row
    }
}

function createSkillElement(skill) {
    let skillDiv = document.createElement("div");
    skillDiv.classList.add("skillInformation", "col-6", "text-center");
    skillDiv.innerHTML = `
        <button id="${skill.name.replace(/\s+/g, '-').toLowerCase()}" class="button btn btn-secondary" data-toggle="tooltip" style="position: relative; background-color: #808080;">${skill.name} (${skill.innerLevel}/${skill.maxInnerLevel})</button>
        <span class="hover-text">${skill.description}</span>`
        if (skill.spaceDustLevelRequired){
            skillDiv.innerHTML += `<br><span class="hover-text">Space Dust Level Required: ${skill.spaceDustLevelRequired}</span>`
        };
    
    // Add click event listener to the button
    skillDiv.querySelector("button").addEventListener("click", function() {
        if (skill.innerLevel < skill.maxInnerLevel) {
            skill.innerLevel++;
            // Update button text to reflect new inner level
            this.textContent = `${skill.name} (${skill.innerLevel}/${skill.maxInnerLevel})`;
            // Update button background color to represent fill level
            let fillPercentage = (skill.innerLevel / skill.maxInnerLevel) * 100;
            this.style.background = `linear-gradient(to top, #4CAF50 ${fillPercentage}%, #808080 ${fillPercentage}%)`;
        }
    });
    
    return skillDiv;
}

showSpaceDustSkillByTier();











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
    spaceDustSkillByTier.forEach(skill => {
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

function updateSpaceDustSkillPoint() {
    // Simulate gaining a skill perk
    console.log("Gained a skill perk for SpaceDust skill tree!");
    
    document.getElementById("spaceDustSkillPoints").innerText = "SpaceDust Skill Points: " + Math.round(spaceDustSkillPoint);
    
}






// Function to update XP progress bar
function updateXPBar() {
    let maxXp = 5 * Math.pow(3, level - 1); // Max XP for the current level
    let xpPercentage = (xp / maxXp) * 100;
    if (xpPercentage > 100) xpPercentage = 100; // Cap at 100%
    document.getElementById("xpFill").style.width = xpPercentage + "%";
    // document.getElementById("xpDetails").innerText = "XP: " + xp + " / " + maxXp;
}

function updateSpaceDustXPBar() {
    let maxXp = 5 * Math.pow(3, spaceDustLevel - 1); // Max XP for the current level
    let xpPercentage = (xpSpaceDust / maxXp) * 100;
    if (xpPercentage > 100) xpPercentage = 100; // Cap at 100%
    // updateSpaceDustXPBar(xpPercentage);
    document.getElementById("spaceDustXpFill").style.width = xpPercentage + "%";
}












// Function to update current level
function updateCurrentLevel() {
    document.getElementById("currentLevel").innerText = "Level: " + level;
}

function updateSpaceDustCurrentLevel() {
    document.getElementById("spaceDustCurrentLevel").innerText = "SpaceDust Level: " + spaceDustLevel;
}
















// Function to handle click events
function handleClick() {
    spaceDust += clickPower;
    totalSpaceDust += clickPower;
    updateSpaceDust();
    
    // Increment XP by a fixed amount for each click
    xp += 1;
    xpSpaceDust += 1;
    
    updateXPBar();
    updateSpaceDustXPBar();
    checkLevelUp();
    checkSpaceDustLevelUp();
}







// Function to handle auto-generating space dust
function autoGenerateSpaceDust() {
    spaceDust += autoGenerateSpaceDustRate;
    totalSpaceDust += autoGenerateSpaceDustRate;
    
    // Increment XP based on auto-generated space dust
    xp += autoGenerateSpaceDustRate / 10;
    xpSpaceDust += autoGenerateSpaceDustRate / 10;
    
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
        document.getElementById("autoGenerateUpgradeAsteroid").innerText = "Upgrade Auto Generation (Cost: " + autoGenerateUpgradeCostAsteroid + " Comet)";
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

function checkSpaceDustLevelUp() {
    let maxXp = 5 * Math.pow(3, spaceDustLevel - 1); // Max XP for the current level
    if (xpSpaceDust >= maxXp) {
        spaceDustLevel++;
        xpSpaceDust = 0;
        spaceDustSkillPoint++;
        alert("Congratulations! You've reached level " + spaceDustLevel + " in Space Dust Tree. You gained 1 skill point.");
        // You can add more logic here to handle perk allocation in a perk tree
        updateSpaceDustCurrentLevel();
        updateSpaceDustSkillPoint();
    }
    updateSpaceDustXPBar();
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
document.getElementById("autoGenerateUpgradeAsteroid").addEventListener("click", upgradeAutoGenerateAsteroid);

function tick() {
    autoGenerateSpaceDust();
    autoGenerateComet();
    autoGenerateAsteroid();
    checkLevelUp();
    updateXPBar();
    checkSpaceDustLevelUp();
    updateSpaceDustXPBar();
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

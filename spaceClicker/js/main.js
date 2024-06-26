// Define initial variables
let totalSpaceDust = 0;
let totalComet = 0;
let totalAsteroid = 0;
let totalNebula = 0;

let spaceDust = 10000000;
let comet = 11111110;
let asteroid = 111111110;
let nebula = 10;

let clickPower = 1;
let autoGenerateSpaceDustRate= 1; 
let addSpaceDustRate = 0;
// Set auto generation rate to 20 per second
let autoGenerateCometRate = 0;
let addCometRate = 0;

let autoGenerateAsteroidRate = 0;
let addAsteroidRate = 0;

let autoGenerateNebulaRate = 0;
let addNebulaRate = 0;

let clickPowerUpgradeCost = 10;
let autoGenerateUpgradeCostSpaceDust = 20;
let falseautoGenerateUpgradeCostSpaceDust = 20;

let autoGenerateUpgradeCostComet= 500;
let falseautoGenerateUpgradeCostComet = 500;

let autoGenerateUpgradeCostAsteroid = 500;
let falseautoGenerateUpgradeCostAsteroid = 500;

let autoGenerateUpgradeCostNebula = 500;
let falseautoGenerateUpgradeCostNebula = 500;

let autoGenerateCometEnabled = true;
let autoGenerateAsteroidEnabled = true;
let autoGenerateNebulaEnabled = true;

/////////////////////// skillspoints /////////////////////////////

let spaceDustSkillPoint = 1000;
let totalSpaceDustSkillPoint = 1000;

let celestialObjectSkillPoint = 100;
let totalCelestialObjectSkillPoint = 100;

let solarSystemSkillPoint = 100;
let totalSolarSystemSkillPoint = 100;

/////////////////////// levels & xp /////////////////////////////
let xp = 0;
let level = 1;

let xpSpaceDust = 0;
let spaceDustLevel = 1;

let xpCelestialObject = 0;
let celestialObjectLevel = 1;

let xpSolarSystem = 0;
let solarSystemLevel = 1;

/////////////////////// skills to unlock ? still working ? ///////////////////////////////////
let cometUnlocked = false;
let asteroidsUnlocked = false;
let nebulaUnlocked = false;

///// idée à creuse -> passer par le tier pour l'affichage / refaire function associée a laffichage tableau
let spaceDustSkillByTier = [
    {
        skillTierC: [
            {
                name: "Reduce SpaceDust AutoGenerateRate Upgrade Cost",
                description: "Reduce upgrade cost by 3%",
                effect: 3/100,
                innerLevel: 0,
                maxInnerLevel: 5,
                spaceDustSkillPointCost: 1,
                unlockCondition: 0
            },
            {
                name: "Increase DustSpace auto Rate",
                description: "Add +1 to DustSpace auto Rate",
                effect: 1,
                innerLevel: 0,
                maxInnerLevel: "infinity",
                spaceDustSkillPointCost: 1,
                unlockCondition: 0
            }
        ],
        skillTierB: [
            {
                name: "Comet",
                description: "Unlock Comet",
                // isUnlocked: false,
                innerLevel: 0,
                maxInnerLevel: 1,
                spaceDustSkillPointCost: 3,
                unlockCondition: 5
            }
        ],
        skillTierA: [
            {
                name: "Reduce SpaceDust AutoGenerateRate Upgrade Cost",
                description: "Reduce upgrade cost by 2%",
                effect: 2/100,
                innerLevel: 0,
                maxInnerLevel: 10,
                spaceDustSkillPointCost: 1,
                isUnlocked: false,
                unlockCondition: 5
            },
            {
                name: "Asteroïds",
                description: "Unlock Asteroïds",
                isUnlocked: false,
                innerLevel: 0,
                maxInnerLevel: 1,
                spaceDustSkillPointCost: 5,
                // isUnlocked: false,
                unlockCondition: 10
            }
        ],
        skillTierS: [
            {
                name: "Reduce SpaceDust AutoGenerateRate Upgrade Cost",
                description: "Reduce upgrade cost by 1%",
                effect: 1/100,
                maxInnerLevel: "infinity",
                innerLevel: 0,
                spaceDustSkillPointCost: 1,
                isUnlocked: false,
                unlockCondition: 15
            },
        ]
    }
]










let celestialObjectSkillByTier = [
    {
    skillTierC: [
        {
            name: "Reduce Comet AutoGenerateRate Upgrade Cost",
            description: "Reduce upgrade cost by 3%",
            effect: 3/100,
            innerLevel: 0,
            maxInnerLevel: 5,
            celestialObjectSkillPointCost: 1,
            unlockCondition: 0
        },
        {
            name: "Increase Comet Auto Rate",
            description: "Add +1 to Comet auto Rate",
            effect: 1,
            innerLevel: 0,
            maxInnerLevel: "infinity",
            celestialObjectSkillPointCost: 1,
            unlockCondition: 0
        }
    ],
    skillTierB: [
        {
            name: "Nebula",
            description: "Unlock Nebula",
            // isUnlocked: false,
            innerLevel: 0,
            maxInnerLevel: 1,
            celestialObjectSkillPointCost: 3,
            unlockCondition: 5
        }
    ],
    skillTierA: [
        {
            name: "Reduce Comet AutoGenerateRate Upgrade Cost",
            description: "Reduce upgrade cost by 1%",
            effect: 1/100,
            innerLevel: 0,
            maxInnerLevel: "infinity",
            celestialObjectSkillPointCost: 1,
            isUnlocked: false,
            unlockCondition: 5
        },
        {
            name: "Increase Asteroid Auto Rate",
            description: "+1 Asteroïds /s /level",
            isUnlocked: false,
            innerLevel: 0,
            maxInnerLevel: "infinity",
            celestialObjectSkillPointCost: 1,
            // isUnlocked: false,
            unlockCondition: 10
        },
        {
            name: "Reduce Nebula AutoGenerateRate Upgrade Cost",
            description: "Reduce upgrade cost by 1%",
            effect: 1/100,
            innerLevel: 0,
            maxInnerLevel: "infinity",
            celestialObjectSkillPointCost: 1,
            isUnlocked: false,
            unlockCondition: 5
        },
    ],
    skillTierS: [
        {
            name: "Reduce Asteroid AutoGenerateRate Upgrade Cost",
            description: "Reduce upgrade cost by 1%",
            effect: 1/100,
            maxInnerLevel: "infinity",
            innerLevel: 0,
            celestialObjectSkillPointCost: 1,
            isUnlocked: false,
            unlockCondition: 15
        },
        {
            name: "Increase Nebula Auto Rate",
            description: "+1 Nebula /s /level",
            isUnlocked: false,
            innerLevel: 0,
            maxInnerLevel: "infinity",
            celestialObjectSkillPointCost: 1,
            // isUnlocked: false,
            unlockCondition: 15
        }
    ]
}
]













let solarSystemSkillByTier = [
    {
    skillTierC: [
        {
            name: "solarSystem Reduce AutoGenerateRate Upgrade Cost",
            description: "Reduce upgrade cost by 3%",
            effect: 3/100,
            innerLevel: 0,
            maxInnerLevel: 5,
            solarSystemSkillPointCost: 1,
            unlockCondition: 0
        },
        {
            name: "solarSystem Enhance DustSpace auto Rate",
            description: "Add +1 to DustSpace auto Rate",
            effect: 1,
            innerLevel: 0,
            maxInnerLevel: 5,
            solarSystemSkillPointCost: 1,
            unlockCondition: 0
        }
    ],
    skillTierB: [
        {
            name: "solarSystem Comet",
            description: "Unlock Comet",
            // isUnlocked: false,
            innerLevel: 0,
            maxInnerLevel: 1,
            solarSystemSkillPointCost: 3,
            unlockCondition: 5
        }
    ],
    skillTierA: [
        {
            name: "Reduce AutoGenerateRate Upgrade Cost",
            description: "Reduce upgrade cost by 2%",
            effect: 2/100,
            innerLevel: 0,
            maxInnerLevel: 10,
            solarSystemSkillPointCost: 1,
            isUnlocked: false,
            unlockCondition: 5
        },
        {
            name: "Asteroïds",
            description: "Unlock Asteroïds",
            isUnlocked: false,
            innerLevel: 0,
            maxInnerLevel: 1,
            solarSystemSkillPointCost: 5,
            // isUnlocked: false,
            unlockCondition: 10
        }
    ],
    skillTierS: [
        {
            name: "Reduce AutoGenerateRate Upgrade Cost",
            description: "Reduce upgrade cost by 1%",
            effect: 1/100,
            maxInnerLevel: "infinity",
            innerLevel: 0,
            solarSystemSkillPointCost: 1,
            isUnlocked: false,
            unlockCondition: 15
        },
    ]
}
]







// function updateActualRate($id, $skillTreeConcerned) {
//     document.getElementById($id).innerText = (autoGenerate+{$skillTreeConcerned}+Rate + defineAmountSkillAddSpaceDust()) + " per second";
// }



// Function to handle skill point allocation
function allocateSpaceDustSkillPoint(skill) {
    if (totalSpaceDustSkillPoint >= skill.spaceDustSkillPointCost) {
        spaceDustSkillPoint -= skill.spaceDustSkillPointCost;
        skill.innerLevel++;
        if(skill.innerLevel === skill.maxInnerLevel && skill.name==="Comet") {
            cometUnlocked = true;
            unlockComet();
        }
        if(skill.innerLevel === skill.maxInnerLevel && skill.name==="Asteroïds") {
            asteroidsUnlocked = true;
            unlockAsteroid();
        }
        
        document.getElementById("autoGenerateDisplay").innerText = (autoGenerateSpaceDustRate + defineAmountSkillAddSpaceDust()) + " per second";
    } else {
        alert("Insufficient skill points!");
    }
}

// Function to unlock new tiers based on skill points spent
function unlockSpaceDustSkillLogic(unlockCondition, skill) {
    if ((totalSpaceDustSkillPoint-spaceDustSkillPoint) >= unlockCondition && spaceDustSkillPoint >= skill.spaceDustSkillPointCost) {
        isUnlocked: true;
        allocateSpaceDustSkillPoint(skill);
        return true;
    }
}





/////// code a faire ????

function allocateCelestialObjectSkillPoint(skill) {
    if (totalCelestialObjectSkillPoint >= skill.celestialObjectSkillPointCost) {
        celestialObjectSkillPoint -= skill.celestialObjectSkillPointCost;
        skill.innerLevel++;
        if(skill.innerLevel === skill.maxInnerLevel && skill.name==="Comet") {
            cometUnlocked = true;
            unlockComet();
        }
        if(skill.innerLevel === skill.maxInnerLevel && skill.name==="Asteroïds") {
            asteroidsUnlocked = true;
            unlockAsteroid();
        }
        if(skill.innerLevel === skill.maxInnerLevel && skill.name==="Nebula") {
            nebulaUnlocked = true;
            unlockNebula();
        }
        // updateSkillTreeUI();
    } else {
        alert("Insufficient skill points!");
    }
}

// Function to unlock new tiers based on skill points spent
function unlockCelestialObjectSkillLogic(unlockCondition, skill) {
    if ((totalCelestialObjectSkillPoint-celestialObjectSkillPoint) >= unlockCondition && celestialObjectSkillPoint >= skill.celestialObjectSkillPointCost) {
        isUnlocked: true;
        allocateCelestialObjectSkillPoint(skill);
        return true;
    }
}



function allocateSolarSystemSkillPoint(skill) {
    if (totalSolarSystemSkillPoint >= skill.solarSystemSkillPointCost) {
        solarSystemSkillPoint -= skill.solarSystemSkillPointCost;
        skill.innerLevel++;
        if(skill.innerLevel === skill.maxInnerLevel && skill.name==="Comet") {
            cometUnlocked = true;
            unlockComet();
        }
        if(skill.innerLevel === skill.maxInnerLevel && skill.name==="Asteroïds") {
            asteroidsUnlocked = true;
            unlockAsteroid();

        }
        // updateSkillTreeUI();
    } else {
        alert("Insufficient skill points!");
    }
}

// Function to unlock new tiers based on skill points spent
function unlockSolarSystemSkillLogic(unlockCondition, skill) {
    if ((totalSolarSystemSkillPoint-solarSystemSkillPoint) >= unlockCondition && solarSystemSkillPoint >= skill.solarSystemSkillPointCost) {
        isUnlocked: true;
        allocateSolarSystemSkillPoint(skill);
        return true;
    }
}



















//////////////////////////// spaceDust skilltree //////////////////////////////////


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
            // tierNameCell.colSpan = getSkillsPerRow(tierKey);
            tierNameCell.textContent = tierKey;
            tierNameCell.style.textAlign = "center"; // Center align tier name
            tierNameCell.style.verticalAlign = "middle"; // Center align vertically
            row.appendChild(tierNameCell);
            sdsTableBody.appendChild(row);

            // Skills Row
            row = document.createElement("tr");
            // let skillsPerRow = getSkillsPerRow(tierKey);
            tierSkills.forEach(skill => {
                let cell = document.createElement("td");
                cell.classList.add("bg-success-subtle");
                cell.appendChild(createSkillElement(skill));
                row.appendChild(cell);
            });
            sdsTableBody.appendChild(row);
        });
    });
}

// function getSkillsPerRow(tierKey) {
//     // Define the number of skills per row for each tier
//     // You can adjust this function based on your specific requirements
//     switch (tierKey) {
//         case 'skillTierC':
//             return 2; // Two skills per row for skillTierC
//         case 'skillTierB':
//             return 3; // Three skills per row for skillTierB
//         default:
//             return 1; // Default to one skill per row
//     }
// }

// let spacedustSkillPointToReachSkill = unlockCondition-(totalSpaceDustSkillPoint-spaceDustSkillPoint);
function createSkillElement(skill) {
    
    let skillDiv = document.createElement("div");
    skillDiv.classList.add("skillInformation", "col-6", "text-center");
    skillDiv.innerHTML = `
        <button id="${skill.name.replace(/\s+/g, '-').toLowerCase()}" class="button btn btn-secondary" data-toggle="tooltip" style="position: relative; background-color: #808080;">${skill.name} (${skill.innerLevel}/${skill.maxInnerLevel})</button>
        <br><p class="badge text-bg-dark">Cost: ${skill.spaceDustSkillPointCost}</p>
        <span class="hover-text">${skill.description}</span>`
        if (skill.unlockCondition>0){
            skillDiv.innerHTML += `<br><span class="hover-text">you must spend a total of ${skill.unlockCondition} Space Dust Skill points to unlock ${skill.name}</span>`
        };
    
    // Add click event listener to the button
    skillDiv.querySelector("button").addEventListener("click", function() {
        if(skill.maxInnerLevel === "infinity" && unlockSpaceDustSkillLogic(skill.unlockCondition, skill)){
            this.textContent = `${skill.name} (${skill.innerLevel})`;
            if(skill.innerLevel>0){
                let fillPercentage = 100;
                this.style.background = `linear-gradient(to top, #4CAF50 ${fillPercentage}%, #808080 ${fillPercentage}%)`;
            }
            
        
        }
        if (skill.innerLevel < skill.maxInnerLevel && unlockSpaceDustSkillLogic(skill.unlockCondition, skill)) {

            // Update button text to reflect new inner level
            
                this.textContent = `${skill.name} (${skill.innerLevel}/${skill.maxInnerLevel})`;
            
            
            // Update button background color to represent fill level
            let fillPercentage = (skill.innerLevel / skill.maxInnerLevel) * 100;
            this.style.background = `linear-gradient(to top, #4CAF50 ${fillPercentage}%, #808080 ${fillPercentage}%)`;
            // if(cometUnlocked = false && skill.innerLevel === 1 && skill.name === "Comet"){
            //     unlockComet();
            // }
        }
        
    });

    return skillDiv;
}

showSpaceDustSkillByTier();
showSpaceDustColumn();

//////////////////////////// end of spaceDust skilltree //////////////////////////////////














//////////////////////////// celestialObject skilltree //////////////////////////////////



function showCelestialObjectColumn() {
    let ssd = document.getElementById("celestialObjectSkill");
    ssd.classList.remove("hide");
    document.getElementById("spaceDustSkill").classList.add("hide");
    document.getElementById("solarSystemSkill").classList.add("hide");
}

/////// logic for skill tree
function showCelestialObjectSkillByTier() {
    let sdsTableBody = document.getElementById("celestialObjectSkillTableBody");
    sdsTableBody.innerHTML = ""; // Clear previous content before updating
    
    celestialObjectSkillByTier.forEach(tierData => {
        Object.keys(tierData).forEach(tierKey => {
            let tierSkills = tierData[tierKey];
            let row = document.createElement("tr");

            // Tier Name Row
            let tierNameCell = document.createElement("td");
            // tierNameCell.colSpan = getSkillsPerRow(tierKey);
            tierNameCell.textContent = tierKey;
            tierNameCell.style.textAlign = "center"; // Center align tier name
            tierNameCell.style.verticalAlign = "middle"; // Center align vertically
            row.appendChild(tierNameCell);
            sdsTableBody.appendChild(row);

            // Skills Row
            row = document.createElement("tr");
            // let skillsPerRow = getSkillsPerRow(tierKey);
            tierSkills.forEach(skill => {
                let cell = document.createElement("td");
                cell.appendChild(createCelestialObjectSkillElement(skill));
                row.appendChild(cell);
            });
            sdsTableBody.appendChild(row);
        });
    });
}

function createCelestialObjectSkillElement(skill) {
    let skillDiv = document.createElement("div");
    skillDiv.classList.add("skillInformation", "col-6", "text-center");
    skillDiv.innerHTML = `
        <button id="${skill.name.replace(/\s+/g, '-').toLowerCase()}" class="button btn btn-secondary" data-toggle="tooltip" style="position: relative; background-color: #808080;">${skill.name} (${skill.innerLevel}/${skill.maxInnerLevel})</button>
        <br><p class="badge text-bg-dark">Cost: ${skill.celestialObjectSkillPointCost}</p>
        <span class="hover-text">${skill.description}</span>`
        if (skill.unlockCondition>0){
            skillDiv.innerHTML += `<br><span class="hover-text">you must spend a total of ${skill.unlockCondition} Space Dust Skill points to unlock ${skill.name}</span>`
        };
    
    // Add click event listener to the button
    skillDiv.querySelector("button").addEventListener("click", function() {

        if(skill.maxInnerLevel === "infinity" && unlockCelestialObjectSkillLogic(skill.unlockCondition, skill)){
            this.textContent = `${skill.name} (${skill.innerLevel})`;
            if(skill.innerLevel>0){
                let fillPercentage = 100;
                this.style.background = `linear-gradient(to top, #4CAF50 ${fillPercentage}%, #808080 ${fillPercentage}%)`;
            }
            
        
        }
        if (skill.innerLevel < skill.maxInnerLevel && unlockCelestialObjectSkillLogic(skill.unlockCondition, skill)) {

            // Update button text to reflect new inner level
            
                this.textContent = `${skill.name} (${skill.innerLevel}/${skill.maxInnerLevel})`;
            
            
            // Update button background color to represent fill level
            let fillPercentage = (skill.innerLevel / skill.maxInnerLevel) * 100;
            this.style.background = `linear-gradient(to top, #4CAF50 ${fillPercentage}%, #808080 ${fillPercentage}%)`;
            
        }
        
    });

    return skillDiv;
}

showCelestialObjectSkillByTier();


//////////////////////////// end celestialObject skilltree //////////////////////////////////






















//////////////////////////// celestialObject skilltree //////////////////////////////////



function showSolarSystemColumn() {
    let ssd = document.getElementById("solarSystemSkill");
    ssd.classList.remove("hide");
    document.getElementById("spaceDustSkill").classList.add("hide");
    document.getElementById("celestialObjectSkill").classList.add("hide");
}

/////// logic for skill tree
function showSolarSystemSkillByTier() {
    let sdsTableBody = document.getElementById("solarSystemSkillTableBody");
    sdsTableBody.innerHTML = ""; // Clear previous content before updating
    
    solarSystemSkillByTier.forEach(tierData => {
        Object.keys(tierData).forEach(tierKey => {
            let tierSkills = tierData[tierKey];
            let row = document.createElement("tr");

            // Tier Name Row
            let tierNameCell = document.createElement("td");
            // tierNameCell.colSpan = getSkillsPerRow(tierKey);
            tierNameCell.textContent = tierKey;
            tierNameCell.style.textAlign = "center"; // Center align tier name
            tierNameCell.style.verticalAlign = "middle"; // Center align vertically
            row.appendChild(tierNameCell);
            sdsTableBody.appendChild(row);

            // Skills Row
            row = document.createElement("tr");
            // let skillsPerRow = getSkillsPerRow(tierKey);
            tierSkills.forEach(skill => {
                let cell = document.createElement("td");
                cell.appendChild(createSolarSystemSkillElement(skill));
                row.appendChild(cell);
            });
            sdsTableBody.appendChild(row);
        });
    });
}

function createSolarSystemSkillElement(skill) {
    let skillDiv = document.createElement("div");
    skillDiv.classList.add("skillInformation", "col-6", "text-center");
    skillDiv.innerHTML = `
        <button id="${skill.name.replace(/\s+/g, '-').toLowerCase()}" class="button btn btn-secondary" data-toggle="tooltip" style="position: relative; background-color: #808080;">${skill.name} (${skill.innerLevel}/${skill.maxInnerLevel})</button>
        <br><p class="badge text-bg-dark">Cost: ${skill.solarSystemSkillPointCost}</p>
        <span class="hover-text">${skill.description}</span>`
        if (skill.unlockCondition>0){
            skillDiv.innerHTML += `<br><span class="hover-text">you must spend a total of ${skill.unlockCondition} Solar System Skill points to unlock ${skill.name}</span>`
        };
    
    // Add click event listener to the button
    skillDiv.querySelector("button").addEventListener("click", function() {

        if(skill.maxInnerLevel === "infinity" && unlockSolarSystemSkillLogic(skill.unlockCondition, skill)){
            this.textContent = `${skill.name} (${skill.innerLevel})`;
            if(skill.innerLevel>0){
                let fillPercentage = 100;
                this.style.background = `linear-gradient(to top, #4CAF50 ${fillPercentage}%, #808080 ${fillPercentage}%)`;
            }
            
        
        }
        if (skill.innerLevel < skill.maxInnerLevel && unlockSolarSystemSkillLogic(skill.unlockCondition, skill)) {

            // Update button text to reflect new inner level
            
                this.textContent = `${skill.name} (${skill.innerLevel}/${skill.maxInnerLevel})`;
            
            
            // Update button background color to represent fill level
            let fillPercentage = (skill.innerLevel / skill.maxInnerLevel) * 100;
            this.style.background = `linear-gradient(to top, #4CAF50 ${fillPercentage}%, #808080 ${fillPercentage}%)`;
            
        }
        
    });

    return skillDiv;
}

showSolarSystemSkillByTier();




//////////////////////////// end celestialObject skilltree //////////////////////////////////







// Function to update score
function updateSpaceDust() {
    document.getElementById("dustQuantity").innerText = "Space Dust: " + Math.round(spaceDust);
}

function updateComet(){
    document.getElementById("cometQuantity").innerText = "Comet Amount: " + Math.round(comet);
}

function updateAsteroid(){
    document.getElementById("asteroidQuantity").innerText = "Asteroid Amount: " + Math.round(asteroid);
}

function updateNebula(){
    document.getElementById("nebulaQuantity").innerText = "Nebula Amount: " + Math.round(nebula);
}












function updateSpaceDustSkillPoint() {
    // Simulate gaining a skill perk
    
    document.getElementById("spaceDustSkillPoints").innerText = "SpaceDust Skill Points: " + Math.round(spaceDustSkillPoint);
    document.getElementById("spaceDustSkillPointsSpent").innerText = Math.round(totalSpaceDustSkillPoint-spaceDustSkillPoint)+" SpaceDust Skill Points Spent" ;
    
}

function updateCelestialObjectSkillPoint() {
    // Simulate gaining a skill perk
    
    document.getElementById("celestialObjectSkillPoints").innerText = "CelestialObject Skill Points: " + Math.round(celestialObjectSkillPoint);
    document.getElementById("celestialObjectSkillPointsSpent").innerText = Math.round(totalCelestialObjectSkillPoint-celestialObjectSkillPoint)+" CelestialObject Skill Points Spent" ;
}

function updateSolarSystemSkillPoint() {
    // Simulate gaining a skill perk
    document.getElementById("solarSystemSkillPoints").innerText = "Solar System Skill Points: " + Math.round(solarSystemSkillPoint);
    document.getElementById("solarSystemSkillPointsSpent").innerText = Math.round(totalSolarSystemSkillPoint-solarSystemSkillPoint)+" Solar System Skill Points Spent" ;
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
    updateSpaceDustSkillPoint();
}

function updateCelestialObjectXPBar() {
    let maxXp = 5 * Math.pow(3, celestialObjectLevel - 1); // Max XP for the current level
    let xpPercentage = (xpCelestialObject / maxXp) * 100;
    if (xpPercentage > 100) xpPercentage = 100; // Cap at 100%
    // updateSpaceDustXPBar(xpPercentage);
    document.getElementById("celestialObjectXpFill").style.width = xpPercentage + "%";
    updateCelestialObjectSkillPoint();
}

function updateSolarSystemXPBar() {
    let maxXp = 5 * Math.pow(3, solarSystemLevel - 1); // Max XP for the current level
    let xpPercentage = (xpSolarSystem / maxXp) * 100;
    if (xpPercentage > 100) xpPercentage = 100; // Cap at 100%
    // updateSpaceDustXPBar(xpPercentage);
    document.getElementById("solarSystemXpFill").style.width = xpPercentage + "%";
    updateSolarSystemSkillPoint();
}








// Function to update current level
function updateCurrentLevel() {
    document.getElementById("currentLevel").innerText = "Level: " + level;
}

function updateSpaceDustCurrentLevel() {
    document.getElementById("spaceDustCurrentLevel").innerText = "SpaceDust Level: " + spaceDustLevel;
}

function updateCelestialObjectCurrentLevel() {
    document.getElementById("celestialObjectCurrentLevel").innerText = "CelestialObject Level: " + celestialObjectLevel;
}

function updateSolarSystemCurrentLevel() {
    document.getElementById("solarSystemCurrentLevel").innerText = "SolarSystem Level: " + solarSystemLevel;
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










function defineAmountSkillAddSpaceDust() {
    // Add Space Dust
    addSpaceDustRate = spaceDustSkillByTier[0].skillTierC[1].innerLevel * 1;
    return addSpaceDustRate;
}
// "autoGenerateDisplay"



function defineAmountSkillAddComet() {
    // Add Comet
    addCometRate = celestialObjectSkillByTier[0].skillTierC[1].innerLevel * 1;
    return addCometRate;
    
}


function defineAmountSkillAddAsteroid() {
    // Add CelestialObject
    addAsteroidRate = celestialObjectSkillByTier[0].skillTierA[1].innerLevel * 1;
    return addAsteroidRate;
    
}

function defineAmountSkillAddNebula() {
    // Add Nebula
    addNebulaRate = celestialObjectSkillByTier[0].skillTierS[1].innerLevel * 1;
    return addNebulaRate;
    
}






// Function to handle auto-generating space dust
function autoGenerateSpaceDust() {

    adSpDuRa = defineAmountSkillAddSpaceDust();

    spaceDust += (autoGenerateSpaceDustRate + adSpDuRa);
    totalSpaceDust += (autoGenerateSpaceDustRate + adSpDuRa);
    

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

    xpCelestialObject += autoGenerateCometRate / 5;
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

        xpCelestialObject += autoGenerateAsteroidRate / 5;
        comet-= autoGenerateAsteroidRate*10;
    }

    updateAsteroid();
}



function nebulaSpaceDustConsumption() {
    let coc = document.getElementById("nebulaSpaceDustConsumption");
    coc.innerText = "Nebula Consumption: " + Math.round(autoGenerateNebulaRate*10) + " per second";
}

function autoGenerateNebula() {
    if(spaceDust<autoGenerateNebulaRate*10 || comet<autoGenerateNebulaRate*10 || asteroid<autoGenerateNebulaRate*10) {
        autoGenerateNebulaEnabled = false;
        document.getElementById("disableNebulaAutoGeneration").innerText = "Enable Nebula Auto Generation";
        document.getElementById("disableNebulaAutoGeneration").classList.add("buttonEnable");
        document.getElementById("disableNebulaAutoGeneration").classList.remove("buttonDisable");
    }
    if(autoGenerateNebulaEnabled){
        nebula += autoGenerateNebulaRate;
        totalNebula += autoGenerateNebulaRate;

        xpCelestialObject += autoGenerateNebulaRate / 5;
        spaceDust-= autoGenerateNebulaRate*10;
        comet -= autoGenerateNebulaRate*10;
        asteroid -= autoGenerateNebulaRate*10;
    }

    updateNebula();
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

function disableNebulaAutoGeneration() {
    autoGenerateNebulaEnabled = !autoGenerateNebulaEnabled;
    if(autoGenerateNebulaEnabled){
        document.getElementById("disableNebulaAutoGeneration").innerText = "Disable Nebula Auto Generation";
        document.getElementById("disableNebulaAutoGeneration").classList.add("buttonDisable");
        document.getElementById("disableNebulaAutoGeneration").classList.remove("buttonEnable");
    }
    if(!autoGenerateAsteroidEnabled){
        document.getElementById("disableNebulaAutoGeneration").innerText = "Enable Nebula Auto Generation";
        document.getElementById("disableNebulaAutoGeneration").classList.add("buttonEnable");
        document.getElementById("disableNebulaAutoGeneration").classList.remove("buttonDisable");
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
        let reductionAutoGenerateUpgradeCostSpaceDust = 1-(spaceDustSkillByTier[0].skillTierC[0].innerLevel * 0.03)-(spaceDustSkillByTier[0].skillTierA[0].innerLevel * 0.02);

        for (let i = 0; i<=spaceDustSkillByTier[0].skillTierS[0].innerLevel; i++) {
            reductionAutoGenerateUpgradeCostSpaceDust = reductionAutoGenerateUpgradeCostSpaceDust - (reductionAutoGenerateUpgradeCostSpaceDust*0.01);
        }
        //false ici cest prix sans reduction
        falseautoGenerateUpgradeCostSpaceDust = (Math.round(falseautoGenerateUpgradeCostSpaceDust * 1.1)); // Increase cost for next upgrade
        autoGenerateUpgradeCostSpaceDust = (Math.round(falseautoGenerateUpgradeCostSpaceDust * 1.1)*(reductionAutoGenerateUpgradeCostSpaceDust));
        document.getElementById("autoGenerateUpgrade").innerText = "Upgrade Auto Generation (Cost: " + autoGenerateUpgradeCostSpaceDust + " Space Dust)";
        document.getElementById("autoGenerateDisplay").innerText = (autoGenerateSpaceDustRate + defineAmountSkillAddSpaceDust()) + " per second";
        updateSpaceDust();
    }
}



function upgradeAutoGenerateComet() {
    if (spaceDust >= autoGenerateUpgradeCostComet) {
        spaceDust -= autoGenerateUpgradeCostComet;
        autoGenerateCometRate++;
        let reductionAutoGenerateUpgradeCostComet = 1-(celestialObjectSkillByTier[0].skillTierC[0].innerLevel * 0.03)-(spaceDustSkillByTier[0].skillTierA[0].innerLevel * 0.02);

        for (let i = 0; i<=spaceDustSkillByTier[0].skillTierS[0].innerLevel; i++) {
            reductionAutoGenerateUpgradeCostComet = reductionAutoGenerateUpgradeCostComet - (reductionAutoGenerateUpgradeCostComet*0.01);
        }
        falseautoGenerateUpgradeCostComet = (Math.round(falseautoGenerateUpgradeCostComet * 1.1)); 
        autoGenerateUpgradeCostComet = Math.round(falseautoGenerateUpgradeCostComet * 1.1)*(reductionAutoGenerateUpgradeCostComet); // Increase cost for next upgrade
        document.getElementById("autoGenerateUpgradeComet").innerText = "Upgrade Auto Generation (Cost: " + autoGenerateUpgradeCostComet + " Space Dust)";
        document.getElementById("autoGenerateDisplayComet").innerText ="Current Auto Generation : "+ (autoGenerateCometRate + defineAmountSkillAddComet()) + " per second";
        updateComet();
    }
}

function upgradeAutoGenerateAsteroid() {
    if (spaceDust >= autoGenerateUpgradeCostAsteroid) {
        spaceDust -= autoGenerateUpgradeCostAsteroid;
        autoGenerateAsteroidRate++;

        let reductionAutoGenerateUpgradeCostAsteroid = 1-(celestialObjectSkillByTier[0].skillTierC[0].innerLevel * 0.03)-(spaceDustSkillByTier[0].skillTierA[0].innerLevel * 0.02);

        for (let i = 0; i<=spaceDustSkillByTier[0].skillTierS[0].innerLevel; i++) {
            reductionAutoGenerateUpgradeCostAsteroid = reductionAutoGenerateUpgradeCostAsteroid - (reductionAutoGenerateUpgradeCostAsteroid*0.01);
        }
        falseautoGenerateUpgradeCostAsteroid = (Math.round(falseautoGenerateUpgradeCostAsteroid * 1.1)); 

        autoGenerateUpgradeCostAsteroid = Math.round(falseautoGenerateUpgradeCostAsteroid * 1.1)*(reductionAutoGenerateUpgradeCostAsteroid); // Increase cost for next upgrade
        document.getElementById("autoGenerateUpgradeAsteroid").innerText = "Upgrade Auto Generation (Cost: " + autoGenerateUpgradeCostAsteroid + " Comet)";
        document.getElementById("autoGenerateDisplayAsteroid").innerText ="Current Auto Generation : "+ autoGenerateAsteroidRate + " per second";
        updateAsteroid();
    }
}

function upgradeAutoGenerateNebula() {
    if (spaceDust >= autoGenerateUpgradeCostNebula && comet >= autoGenerateUpgradeCostNebula && asteroid >= autoGenerateUpgradeCostNebula) {
        spaceDust -= autoGenerateUpgradeCostNebula;
        comet -= autoGenerateUpgradeCostNebula;
        asteroid -= autoGenerateUpgradeCostNebula;
        autoGenerateNebulaRate++;
        let reductionAutoGenerateUpgradeCostNebula = 1-(celestialObjectSkillByTier[0].skillTierC[0].innerLevel * 0.03)-(celestialObjectSkillByTier[0].skillTierA[0].innerLevel * 0.02);

        for (let i = 0; i<=celestialObjectSkillByTier[0].skillTierS[0].innerLevel; i++) {
            reductionAutoGenerateUpgradeCostNebula = reductionAutoGenerateUpgradeCostNebula - (reductionAutoGenerateUpgradeCostNebula*0.01);
        }
        //false ici cest prix sans reduction
        falseautoGenerateUpgradeCostNebula = (Math.round(falseautoGenerateUpgradeCostNebula * 1.1)); // Increase cost for next upgrade
        autoGenerateUpgradeCostNebula = (Math.round(falseautoGenerateUpgradeCostNebula * 1.1)*(reductionAutoGenerateUpgradeCostNebula));
        document.getElementById("autoGenerateUpgradeNebula").innerText = "Upgrade Auto Generation (Cost: " + autoGenerateUpgradeCostNebula + " Space Dust & Comet & Asteroids)";
        document.getElementById("autoGenerateDisplayNebula").innerText = autoGenerateNebulaRate +" per second";
        updateNebula();
    }
}










// Function to check for level up
function checkLevelUp() {
    let maxXp = 5 * Math.pow(3, level - 1); // Max XP for the current level
    if (xp >= maxXp) {
        level++;
        xp = 0;
        // perkPoints++;
  
        alert("Congratulations! You've reached level " + level);
        // You can add more logic here to handle perk allocation in a perk tree
        updateCurrentLevel();
        // updatePerkPoints();
    }
    updateXPBar();
}

function checkSpaceDustLevelUp() {
    let maxXp = 5 * Math.pow(3, spaceDustLevel - 1); // Max XP for the current level
    if (xpSpaceDust >= maxXp) {
        spaceDustLevel++;
        xpSpaceDust = 0;
        spaceDustSkillPoint++;
        totalSpaceDustSkillPoint++;
        alert("Congratulations! You've reached level " + spaceDustLevel + " in Space Dust Tree. You gained 1 skill point.");
        // You can add more logic here to handle perk allocation in a perk tree
        updateSpaceDustCurrentLevel();
        updateSpaceDustSkillPoint();
    }
    updateSpaceDustXPBar();
}

function checkCelestialObjectLevelUp() {
    let maxXp = 5 * Math.pow(3, celestialObjectLevel - 1); // Max XP for the current level
    if (xpCelestialObject >= maxXp) {
        celestialObjectLevel++;
        xpCelestialObject = 0;
        celestialObjectSkillPoint++;
        totalCelestialObjectSkillPoint++;
        alert("Congratulations! You've reached level " + celestialObjectLevel + " in Celestial Object Tree. You gained 1 skill point.");
        // You can add more logic here to handle perk allocation in a perk tree
        updateCelestialObjectCurrentLevel();
        updateCelestialObjectSkillPoint();
    }
    updateCelestialObjectXPBar();
}

function checkSolarSystemLevelUp() {
    let maxXp = 5 * Math.pow(3, solarSystemLevel - 1); // Max XP for the current level
    if (xpSolarSystem >= maxXp) {
        solarSystemLevel++;
        xpSolarSystem = 0;
        solarSystemSkillPoint++;
        totalSolarSystemSkillPoint++;
        alert("Congratulations! You've reached level " + solarSystemLevel + " in Solar System Tree. You gained 1 skill point.");
        // You can add more logic here to handle perk allocation in a perk tree
        updateSolarSystemCurrentLevel();
        updateSolarSystemSkillPoint();
    }
    updateSolarSystemXPBar();
}













// Function to unlock Comet perk
function unlockComet() {
    // if (spaceDustSkillByTier[0].skillTierB[0].innerLevel === spaceDustSkillByTier[0].skillTierB[0].maxInnerLevel 
    //     // && !cometUnlocked
    //     ) {
        document.getElementById("spaceDustSkillPoints").innerText = "Space Dust Skill Points: " + spaceDustSkillPoint;
        alert("You've unlocked Comet! Check in Space Element page to see the effect!");
        // Add functionality to space elements for Comet
        // For now, let's just display a message
        document.getElementById("cometGenerator").classList.remove("hide");
        document.getElementById("statisticsCometDiv").classList.remove("hide");
    // } else {
        // alert("You don't have enough perk points to unlock Comet or it's already unlocked.");
    // }
        
        alert("Congratulations ! You have unlocked the Celestial Object Skill Tree.");
        ///// unlock celestialoject branch
        document.getElementById("celestialObjectBranch").classList.remove("hide");
}

// function isCometUnlocked () {
    
// }

// Function to unlock asteroids perk & statistics visual
function unlockAsteroid() {
   
        /////// verifier si cest vraiment space dust skill point ou celestialobject ? +++++++++++ on enleve des skillpoints a spacedust branch ou a celestial object branch

        document.getElementById("spaceDustSkillPoints").innerText = "Space Dust Skill Points: " + spaceDustSkillPoint;
        alert("You've unlocked Asteroids! Check in Space Element page to see the effect!");
        // Add functionality to space elements for asteroids
        // For now, let's just display a message
        // alert("Asteroids effect applied!");
        document.getElementById("asteroidGenerator").classList.remove("hide");
        document.getElementById("statisticsAsteroidDiv").classList.remove("hide");
    // } else {
    //     alert("You don't have enough perk points to unlock Asteroids or it's already unlocked.");
    // }
}

function unlockNebula() {
        document.getElementById("spaceDustSkillPoints").innerText = "Space Dust Skill Points: " + spaceDustSkillPoint;
        alert("You've unlocked Nebula! Check in Space Element page to see the effect!");
        // Add functionality to space elements for asteroids
        // For now, let's just display a message
        // alert("Asteroids effect applied!");
        document.getElementById("nebulaGenerator").classList.remove("hide");
        document.getElementById("statisticsNebulaDiv").classList.remove("hide");
}









function productionStatistics(){
    document.getElementById("productionSpaceDustStatistics").innerText = Math.round(autoGenerateSpaceDustRate + defineAmountSkillAddSpaceDust());
    document.getElementById("productionCometStatistics").innerText = Math.round(autoGenerateCometRate + defineAmountSkillAddComet());
    document.getElementById("productionAsteroidStatistics").innerText = Math.round(autoGenerateAsteroidRate + defineAmountSkillAddAsteroid());
    document.getElementById("productionNebulaStatistics").innerText = Math.round(autoGenerateNebulaRate + defineAmountSkillAddNebula());
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
document.getElementById("autoGenerateUpgradeNebula").addEventListener("click", upgradeAutoGenerateNebula);

function tick() {
    autoGenerateSpaceDust();
    autoGenerateComet();
    autoGenerateAsteroid();
    autoGenerateNebula();
    checkLevelUp();
    updateXPBar();

    checkSpaceDustLevelUp();
    updateSpaceDustXPBar();

    checkCelestialObjectLevelUp();
    updateCelestialObjectXPBar();

    checkSolarSystemLevelUp();
    updateSolarSystemXPBar();

    spaceDustConsumption();
    nebulaSpaceDustConsumption();
    cometConsumption();

    productionStatistics();
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

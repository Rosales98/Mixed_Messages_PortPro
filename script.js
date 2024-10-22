const characters = ["Brave Knight", "Clever Thief", "Mystical Wizard", "Fearless Archer"];
const locations = ["Dark Forrest", "Ancient Ruins", "Mountain Peak", "Enchanted Castle"];
const challanges = ["Face a fierce dragon", "Solve a mystical riddle", "Cross a dangerous river", "Rescue the lost prince"];

function getRandomMessage(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}



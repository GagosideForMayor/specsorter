// Array of players provided by Specle
var players = [
    { name: "Govin G", jerseyNumber: 0, position: "DEF/MID/FWD", rating: 83 },
    { name: "Ethan M", jerseyNumber: 1, position: "GK", rating: 85 },
    { name: "Cooper B", jerseyNumber: 5, position: "DEF", rating: 80 },
    { name: "Eashan K", jerseyNumber: 6, position: "DEF", rating: 78 },
    { name: "Liang Yu T", jerseyNumber: 7, position: "MID/FWD", rating: 82 },
    // Add more players here
];

// Function to sort players by jersey number
function sortPlayersByJerseyNumber(unsortedPlayers) {
    return unsortedPlayers.sort((a, b) => a.jerseyNumber - b.jerseyNumber);
}

// Example unsorted lineup
var unsortedLineup = [
    "Syed Areeb",
    "Ryan C",
    "Seb",
    "Camillo Villari",
    "Leo (maybe)",
    "Liang Yu",
    "Ethan",
    "Ryan H",
    "Nikush (maybe)",
    "Lochlan",
    "Mori",
    "Yi Jay",
    "Daniel N"
];

// Function to create a sorted lineup
function createSortedLineup(unsortedLineup) {
    // Map player names to their jersey numbers
    var unsortedPlayersWithJersey = unsortedLineup.map(playerName => {
        var player = players.find(p => p.name.includes(playerName));
        return { name: playerName, jerseyNumber: player ? player.jerseyNumber : null };
    });

    // Remove players without jersey numbers
    var playersWithJersey = unsortedPlayersWithJersey.filter(player => player.jerseyNumber !== null);

    // Sort players by jersey number
    var sortedPlayers = sortPlayersByJerseyNumber(playersWithJersey);

    // Generate the sorted lineup string
    var sortedLineup = sortedPlayers.map((player, index) => `${index + 1}. ${player.name}`).join('\n');

    return sortedLineup;
}

// Output the sorted lineup
console.log("Sorted Lineup:");
console.log(createSortedLineup(unsortedLineup));

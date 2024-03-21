// Array of players provided by Specle
var players = [
    { name: "Govin", jerseyNumber: 0 },
    { name: "Ethan", jerseyNumber: 1 },
    { name: "Cooper", jerseyNumber: 5 },
    { name: "Eashan", jerseyNumber: 6 },
    { name: "Liang Yu", jerseyNumber: 7 },
    { name: "Nikush", jerseyNumber: 9 },
    { name: "Ryan C", jerseyNumber: 13 },
    { name: "Camillo", jerseyNumber: 16 },
    { name: "Ryan H", jerseyNumber: 17 },
    { name: "Oskar", jerseyNumber: 20 },
    { name: "Cashel", jerseyNumber: 21 },
    { name: "Lochlan", jerseyNumber: 22 },
    { name: "Bobby", jerseyNumber: 24 },
    { name: "Sebastian", jerseyNumber: 26 },
    { name: "Areeb", jerseyNumber: 28 },
    { name: "Daniel N", jerseyNumber: 35 },
    { name: "Ricardo", jerseyNumber: 72 },
    { name: "Yi-Jay", jerseyNumber: 95 },
    { name: "Mori", jerseyNumber: 111 },
    { name: "Dani M", jerseyNumber: 33 },
    { name: "Daniel M", jerseyNumber: 33 },
    { name: "Leo", jerseyNumber: 30 }
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

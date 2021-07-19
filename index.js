 const numbers = [1, 5, 3, 8, 2];
const greatThenTwo = numbers.filter(num =>num > 2);
// console.log(greatThenTwo);

const multByTwo = greatThenTwo.map(num => num * 3);
// console.log(multByTwo);

const sorted = multByTwo.sort((a, b) => b - a);
// console.log(sorted)
const res = numbers
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);
// console.log(res);
// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 880 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 320 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 670 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 470 },
// ];
//const onlineAndSorted = players.filter((player) => player.isOnline).sort((firstPlayer, lastPlayer) => firstPlayer - lastPlayer);
//console.table(onlineAndSorted);
const players = [
    { id: 'id-1', tag: 'Mango', online: true, points: 80, timePlayed: 230 },
    { id: 'id-2', tag: 'Poly', online: false, points: 30, timePlayed: 630 },
    { id: 'id-3', tag: 'Ajax', online: true, points: 60, timePlayed: 479 },
    { id: 'id-4', tag: 'Kiwi', online: true, points: 45, timePlayed: 530 },
];
// const upatedPlayers = players.map(player => ({
//     ...player,
//     points: player.points + player.points * 0.1,
// }));
// console.table(upatedPlayers);
const playerIdToUpdate = 'player -3';
// const updatedPlayers = players.map((player => {
//     if (player.id === playerIdToUpdate) {
//         return { ...player, timePlayed + 50,
//         };
//     }
//     return player;
// });

//ТАРНАРНЫЙ ОПЕРАТОР !!!!!
// const updatedPlayers = players.map(player =>
//     player.id === playerIdToUpdate
//         ? { ...player, timePlayed: player.timePlayed + 60 } : player);
// console.table(updatedPlayers);

// (...players)  ЗАСПЫЛЕНИЕ!!!!SPREAD


const updatedPlayers = players.map(player => {
    return player.id === playerIdToUpdate
        ? { ...player, timePlayed: player.timePlayed + 60 } : player});
console.table(updatedPlayers);
    
        
    
    
 

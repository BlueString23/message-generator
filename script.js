/*  gold
    items
    experience
    */

const gold = Math.floor(Math.random() * 500);
const experience = Math.floor(Math.random() * 150);
const success = ()  => {
const enemy = ['a troll', 'a dragon', 'a group of bandits', 'cultists', 'demons', 'religious fundamentalists', 'a rabid wolf'];
const sayings = ['grr', 'owwwwooooo', 'blaaa', 'let\'s go on a date', 'purge them', 'help me']
const items = ['a broken sword', 'a dragon\'s tooth', 'a marble staff', 'a health potion', 'a mana potion', 'a purple flower', 'vellum', 'charcoal', 'an empty bottle']
let receivedItem = [];
let chosenSaying = [];
let encounteredEnemy = [];
const itemSelector = Math.floor(Math.random() * 9)
const enemySelector = Math.floor(Math.random() * 7)
const sayingSelector = Math.floor(Math.random() * 6)

for (i = 0; i < items.length; i++){
    if (i === itemSelector){
     receivedItem.push(items[itemSelector])
    }
}
for (j = 0;  j < sayings.length; j++){
    if(j === sayingSelector){
        chosenSaying.push(sayings[sayingSelector])
    }
}
for(k = 0; k < enemy.length; k++){
    if (k === enemySelector){
        encounteredEnemy.push(enemy[enemySelector])
    }
}

return `You defeated ${encounteredEnemy} which screamed "${chosenSaying}". You received ${receivedItem}, ${gold} gold, and ${experience} experience points.`
}

console.log(success());
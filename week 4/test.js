const fruits = ['apple', 'pear', 'orange'];
function getFruit(fruitIndex, fruitToCompare)
{
    if (fruitIndex === fruitToCompare)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log('SELECTED FRUITS')
let filteredFruits = fruits.filter(function(fruitIndex) {
    return getFruit(fruitIndex,'apple')
})
console.log(filteredFruits[0]);
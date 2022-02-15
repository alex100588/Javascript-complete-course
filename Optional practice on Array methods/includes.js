
const names = ['Alex', 'Ivan', 'Florin']

const res = names.includes('Ivan')
console.log(res);

const fruits = ['Apples', 'Oranges', 'Bananas']

if(fruits.includes('Oranges')){
    console.log('We have oranges');
}else{
    console.log('We must buy');
}

const items = function(fruit){
    if(fruit.includes('Oranges')){
        console.log(`We have ${fruit}`);
    }else{
        console.log(`We must buy ${fruit}`);
    }
}

items('Oranges')
items('Mango')
items('Berrys')
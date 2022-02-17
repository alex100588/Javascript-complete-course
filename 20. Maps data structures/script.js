'use strict'

const rest = new Map()

rest.set('name', 'Alex')
rest.set('firstName', 'Gabri')
rest.set(22, 'age')
rest.set(true, 'adevarat')
rest.set(false, 'fals')

console.log(rest.get(22));

rest.set('restaurant', 'Classico Italiano').set('categories', ['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza',])

console.log(rest.get('categories'));
console.log(rest.has('categories'));
rest.delete('name')
console.log(rest);
console.log(rest.size);
//rest.clear()
console.log(rest);


/////////////////////////////////////

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again']
])

console.log(question.get(1));

console.log(question.get('question'));
//question.forEach((val, key)=> console.log(key,val))
for(const [key, value] of question){
    //console.log(key, value);
    if(typeof key === 'number'){
        console.log(`answer ${key}: ${value}`);
    }
}

const answer = Number(prompt('select your answer'))

question.get('correct') === answer ? console.log(true) : console.log(false);;
console.log(question.get(answer));

const convertToArray = [...question]
console.log(convertToArray);
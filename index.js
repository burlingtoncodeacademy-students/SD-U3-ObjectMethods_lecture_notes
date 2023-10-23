//! Object Methods

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17'
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01'
            },
        ],
        "season two" : [/*... */],
        "season three" : [/*... */]
    },
    currently_running: true
};

/* 
*  .keys()
    - Details all the keys available within the object as an array.
*/
// console.log(Object.keys(theSimpsons));

/* 
*  .values()
    - returns an array of values
*/
// console.log(Object.values(theSimpsons));

/* 
*  Object.assign()
    - copies all enumerable properties from one or more sources.

    let objOne = {name: "Bob"};
    let objTwo = {work: "Manager"};

    let newObject = Object.assign(objOne, objTwo)

*   Result:
    newObject = {
        name: "Bob",
        work: "Manager"
    }
*/

let futurama = Object.assign(theSimpsons);
// console.log('Futurama: ', futurama);


/* 
*  delete object.key
*/

futurama.currently_running = false;
console.log("BEFORE: ", Object.keys(futurama));
delete futurama.currently_running;
console.log("AFTER: ", Object.keys(futurama));




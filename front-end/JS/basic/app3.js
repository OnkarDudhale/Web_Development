// nested for-loop
let students=[["aman",98],["nikhil",100],["suraj",97]];
for(let i=0;i<students.length;i++){
    for(let j=0;j<students[i].length;j++){
        console.log(students[i][j]);
    }
}

// for-of loop
let marvalHeroes=["spiderman","ironman","antman"];
for(let hero of marvalHeroes){
    console.log(hero);
}

//nested for-of loop
let heroes=[["captain-america","hulk","thor"],["batman","flash","wonder women"]];
for(let list of heroes){
    for(let hero of list){
        console.log(`${hero}`);
    }
}
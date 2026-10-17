import { sum, PI } from './data.js';
import randomWord from 'random-word';
console.log(sum(1, 5));
console.log(PI);

console.log(randomWord());

// let obj=require('./data.js');
// console.log(obj.sum(3,4));
// console.log(obj.name[0]);


//Export Directories data
import {fruit} from './Fruits/index.js';
console.log(fruit);

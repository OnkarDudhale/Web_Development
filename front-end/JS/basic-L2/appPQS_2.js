//larger than number
let arr=[10,20,30,40];
let num=15;
function larger(){
    for(let i=0;i<arr.length;i++){
    if(num>arr[i]){
        console.log(arr[i]);
    }
    }
}
larger();

//Unique characters
let str="abcdabcdefgggh";
function uniqueChar(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let temp=str[i];
        if(ans.indexOf(temp)==-1){
            ans+=temp;
        }
    }
    return ans;
}
let ans=uniqueChar(str);
console.log(ans);

//Longest country name
let country=["Australia","Germany","United States of America"];
function largeCountry(country){
    let largeCN=country[0];
    for(let i=0;i<country.length;i++){
        if(largeCN.length<country[i].length){
            largeCN=country[i];
        }
    }
    console.log(largeCN);
}
largeCountry(country);

//count number of vowels
let strCount="appleMangooUA";
let vovels="aeiouAEIOU";
function countVowels(strCount){
    let count=0;
    for(let i=0;i<strCount.length;i++){
        if((vovels.indexOf(strCount[i]))!=-1){
            count++;
        }
        
    }
    return count;
}
console.log(countVowels(strCount));

//random number within a range(start,end)
function randomRange(start,end){
    let range=end-start;
    return Math.floor(Math.random()*range)+start;
}
console.log(randomRange(25,100));

let url='https://icanhazdadjoke.com/';

//axios Library to make http request
async function getJoke(){
    try{
        const config={headers:{Accept:"application/json"}};

        let res=await axios.get(url,config);
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}


// let apiUrl = 'https://catfact.ninja/fact';
// let fact = document.querySelector('.fact');
// async function getApiData() {
//     try {
//         let res = await axios.get(apiUrl);
//         console.log(res);
//         fact.innerText = res.data.fact;
//     } catch (err) {
//         console.log(err);
//     }
// }
// let btn = document.querySelector('.getFact');
// btn.addEventListener('click', getApiData);



// let urlDogImg = 'https://dog.ceo/api/breeds/image/random';
// let img = document.querySelector('.pic');
// async function getDogImg() {
//     try {
//         let resp = await axios.get(urlDogImg);
//         console.log(resp);
//         return resp.data.message;
//     } catch (err) {
//         console.log(err);
//         return 'No image found';
//     }
// }
// let bt = document.querySelector('.showImg');
// // bt.addEventListener('click',getDogImg);
// bt.addEventListener('click', async () => {
//     let imgLink = await getDogImg();
//     img.setAttribute('src', imgLink);
// });





// async function fetchApiData() {
//     try {
//         let res = await fetch(apiUrl);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2=await fetch(apiUrl);
//         let data2=await res2.json();
//         console.log(data2.fact);
//     }
//     catch (err) {
//         console.log(err);
//     }
//     console.log('this is a fetch api');
// }

// console.log('hello');
// fetch(api).then((res)=>{ //fetch(api) return Promise
//     return res.json();   //response convert to readable format
// }).then((res)=>{
//     console.log("Cat First Fact : "+res.fact); //actual content
//     return fetch(api);
// }).then((res)=>{
//     return res.json();
// }).then((res)=>{
//     console.log("Cat Second Fact : "+res.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })


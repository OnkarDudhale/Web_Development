// let url = 'http://universities.hipolabs.com/search?name=';
// let country = document.querySelector('input');
// let list = document.querySelector('ul');
// async function getUName() {
//     try {       
//         let res = await axios.get(url + country.value);
//         list.innerText='';
        
//         for(let state of res.data){
//             console.log(state['state-province']);
//         }
//         for (let c of res.data) {
//             let li = document.createElement('li');
//             li.innerText = c.name;
//             list.append(li);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
// let btn = document.querySelector('button');
// btn.addEventListener('click', getUName);


let url='https://api.potterdb.com/v1';



let body=document.querySelector('body');

async function getChapters(name){
    let resCh=await axios.get(url+`/books/${name}/chapters`);
    console.log(resCh);
    for(let chapter of resCh.data.data){
        console.log(chapter.attributes.slug);
    }
}

async function getBooks(){
    let resBooks=await axios.get(url+'/books');
    let books=resBooks.data.data;
    
    for(let name of books){
        let link=document.createElement('p');
        body.append(link);
        let bookName=name.attributes.slug;
        link.innerText=bookName;
        link.addEventListener('click',()=>{
            getChapters(bookName)
        });
    }
}
let books=document.querySelector('#books');
books.addEventListener('click',getBooks);


// async function getData(){
//     let res=await axios.get(url);
//     // console.log(res.data.data.attributes['author']);
//     console.log(res);
    
//     // for(let book of res.data.data){
//     //     console.log(book);
//     // }
// }


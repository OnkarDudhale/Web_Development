let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
let def = document.querySelector('.definition');
let list = document.querySelector('ul');
let word = document.querySelector('#text');
console.log(def);
async function getData(element) {
    try {
        list.innerText = '';
        let res = await axios.get(url + word.value);
        let mean = res.data[0].meanings;

        let heading = document.createElement('p');
        heading.classList.add('title');
        def.innerHTML='';
        if (element.getAttribute('id') != 'example') {
            heading.innerText = 'Definition';
            def.append(heading);
        }
        else {
            heading.innerText = 'Example';
            def.append(heading);
        }
        for (let info of mean) {
            for (let data of info.definitions) {
                if (element.getAttribute('id') != 'example') {
                    let li = document.createElement('li');
                    li.innerText = data.definition;
                    list.append(li);
                }
                else {
                    if (data.example != undefined) {
                        let li = document.createElement('li');
                        li.innerText = data.example;
                        list.append(li);
                    }
                }
            }
        }
    } catch (err) {
        console.log(err);
    }
}

let search = document.querySelector('#search');
search.addEventListener('click', (event) => {
    getData(event.target);
});

let ex = document.querySelector('#example');
ex.addEventListener('click', (event) => {
    getData(event.target);

});

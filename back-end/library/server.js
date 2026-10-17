const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid'); //id

const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const port = 3000;

let books = [
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/TheAlchemist.jpg/500px-TheAlchemist.jpg',
        id: uuidv4(),
        title: 'The Alchemist',
        desc: 'A novel by Paulo Coelho that tells the story of a shepherd named Santiago who dreams of finding treasure in Egypt.',
        author: 'Paulo Coelho',
        content: `The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. The story follows the shepherd boy Santiago in his journey across North Africa to the Egyptian pyramids after he dreams of finding treasure there.
        Plot: An Andalusian shepherd boy named Santiago dreams of a treasure while in a ruined church.He consults a Gypsy fortune-teller about the meaning of the recurring dream.
        The woman interprets it as a prophecy, telling the boy that he will discover a treasure at the Egyptian pyramids. After Santiago sets out, he meets Melchizedek, the king of Salem, who tells him to sell his sheep so as to travel to Egypt and accomplish his "Personal Legend". 
        Early on his arrival in Africa, a man who claims to be able to take Santiago to the pyramids instead robs him of the money he had made from his flock. Santiago then has to work for a crystal merchant to earn enough to continue his journey.
        Along the way, the boy meets an Englishman who has come in search of an alchemist who can turn any metal to gold, and continues his travels with his new companion. When they reach an oasis, Santiago meets and falls in love with an Arabian girl named Fatima, to whom he proposes marriage. She promises to marry him only after he completes his journey. Frustrated at first, he later learns that true love will not stop nor must one sacrifice ones destiny to it, since to do so robs it of truth.`
    }, {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/500px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
        id: uuidv4(),
        title: 'To Kill a Mokingbird',
        desc: 'A novel by Harper Lee that deals with serious issues like racial inequality and moral growth through the eyes of a young',
        author: 'Harper Lee',
        content: 'To Kill a Mockingbird is a 1960 Southern Gothic novel by American author Harper Lee. It became instantly successful after its release; in the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird won the Pulitzer Prize a year after its release, and it has become a classic of modern American literature. The plot and characters are loosely based on Lee s observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.'
    }, {
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/1984_first_edition_cover.jpg',
        id: uuidv4(),
        title: 'Nineteen Eighty-Four',
        desc: 'A dystopian novel by George Orwell that explores the dangers of totalitarianism and extreme political ideology.',
        author: 'George Orwell',
        content: ''
    }
]



app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
})

app.get('/books', (req, res) => {
    res.render('index.ejs', { books });
})

app.get('/books/:id/page', (req, res) => {
    const { id } = req.params;
    const book = books.find((p) => id === p.id);
    res.render('page.ejs', { book });
})

app.get('/books/:id/editPage', (req, res) => {
    const { id } = req.params;
    const book = books.find((p) => id === p.id);
    res.render('editPage.ejs', { book });
})

app.get('/admin', (req, res) => {
    res.render('admin.ejs', { books });
})


app.patch('/books/:id', (req, res) => {
    const { id } = req.params;
    const newContent = req.body.content;
    const book = books.find((p) => id === p.id);
    book.content = newContent;
    res.redirect('/books');
})

app.get('/admin/book', (req, res) => {
    res.render('book.ejs');
})

app.post('/books', (req, res) => {
    let { img, title, desc, author, content } = req.body;
    img = '/assets/' + img;
    let id = uuidv4();
    books.push({ img, title, desc, author, content, id });
    res.redirect('/books');
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    books = books.filter((b) => id !== b.id);
    res.redirect('/books');
})



const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const movies = {
  action: [
    { id: 1, title: "Die Hard", year: 1988, director: "John McTiernan", rating: 8.2 },
    { id: 2, title: "Mad Max: Fury Road", year: 2015, director: "George Miller", rating: 8.1 },
    { id: 3, title: "The Dark Knight", year: 2008, director: "Christopher Nolan", rating: 9.0 },
    { id: 4, title: "John Wick", year: 2014, director: "Chad Stahelski", rating: 7.4 },
  ],
  comedy: [
    { id: 5, title: "The Hangover", year: 2009, director: "Todd Phillips", rating: 7.7 },
    { id: 6, title: "Bridesmaids", year: 2011, director: "Paul Feig", rating: 6.8 },
    { id: 7, title: "Superbad", year: 2007, director: "Greg Mottola", rating: 7.6 },
    { id: 8, title: "Anchorman", year: 2004, director: "Adam McKay", rating: 7.2 },
  ],
  drama: [
    { id: 9, title: "The Shawshank Redemption", year: 1994, director: "Frank Darabont", rating: 9.3 },
    { id: 10, title: "Forrest Gump", year: 1994, director: "Robert Zemeckis", rating: 8.8 },
    { id: 11, title: "The Godfather", year: 1972, director: "Francis Ford Coppola", rating: 9.2 },
    { id: 12, title: "Schindler's List", year: 1993, director: "Steven Spielberg", rating: 9.0 },
  ],
  sciFi: [
    { id: 13, title: "Inception", year: 2010, director: "Christopher Nolan", rating: 8.8 },
    { id: 14, title: "The Matrix", year: 1999, director: "The Wachowskis", rating: 8.7 },
    { id: 15, title: "Interstellar", year: 2014, director: "Christopher Nolan", rating: 8.6 },
    { id: 16, title: "Blade Runner 2049", year: 2017, director: "Denis Villeneuve", rating: 8.0 },
  ],
  horror: [
    { id: 17, title: "The Shining", year: 1980, director: "Stanley Kubrick", rating: 8.4 },
    { id: 18, title: "Get Out", year: 2017, director: "Jordan Peele", rating: 7.7 },
    { id: 19, title: "A Quiet Place", year: 2018, director: "John Krasinski", rating: 7.5 },
    { id: 20, title: "Hereditary", year: 2018, director: "Ari Aster", rating: 7.3 },
  ],
  animation: [
    { id: 21, title: "Toy Story", year: 1995, director: "John Lasseter", rating: 8.3 },
    { id: 22, title: "Spirited Away", year: 2001, director: "Hayao Miyazaki", rating: 8.6 },
    { id: 23, title: "Spider-Man: Into the Spider-Verse", year: 2018, director: "Peter Ramsey", rating: 8.4 },
    { id: 24, title: "The Lion King", year: 1994, director: "Roger Allers", rating: 8.5 },
  ],
};

app.post('/movies', (req, res) => {
  const { genre } = req.body;
  if (genre && movies[genre]) {
    res.json(movies[genre]);
  } else {
    res.status(400).json({ error: 'Invalid genre' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
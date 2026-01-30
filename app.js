const express = require('express');
const fs = require('fs'); 
const app = express();
const port = 3000;

let countries = JSON.parse(fs.readFileSync('./countries.json', 'utf8'));
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/countriesfull', (req, res) => {
    res.json(countries)
  });

app.get('/countriesnormal', (req, res) => {
    let countriesnormal = countries.map(country => ({
        name: country.name,
        cca2: country.cca2,
        cca3: country.cca3,
        currencies: country.currencies,
        languages: country.languages,
        flag: country.flag,
        capital: country.capital,
        population: country.population,
        continent: country.continent
    }))
    res.json(countriesnormal)
})
  


app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
